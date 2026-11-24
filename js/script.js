/* =========================================================
   SCRIPT PRINCIPAL — interatividade do site
   (o conteúdo fica em js/dados.js)
   ========================================================= */

const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);

/* ---------- Nome do aluno ---------- */
["#hero-nome", "#rodape-nome"].forEach((id) => ($(id).textContent = MEU_NOME));
$("#logo-nome").textContent = typeof MEU_NOME_CURTO !== "undefined" ? MEU_NOME_CURTO : MEU_NOME;

/* ---------- Tema claro/escuro (salvo no navegador) ---------- */
const temaBtn = $("#temaBtn");
function aplicarTema(escuro) {
  document.body.classList.toggle("escuro", escuro);
  temaBtn.textContent = escuro ? "☀️" : "🌙";
}
let temaSalvo = null;
try { temaSalvo = localStorage.getItem("tema"); } catch (e) {}
aplicarTema(temaSalvo ? temaSalvo === "escuro" : window.matchMedia("(prefers-color-scheme: dark)").matches);
temaBtn.addEventListener("click", () => {
  const escuro = !document.body.classList.contains("escuro");
  aplicarTema(escuro);
  try { localStorage.setItem("tema", escuro ? "escuro" : "claro"); } catch (e) {}
});

/* ---------- Menu mobile ---------- */
const menuBtn = $("#menuBtn");
const navLinks = $("#navLinks");
menuBtn.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
});
$$(".nav-links a").forEach((link) => link.addEventListener("click", () => navLinks.classList.remove("aberto")));

/* =========================================================
   MEMÓRIAS — linha do tempo
   ========================================================= */
const linhaTempo = $("#linhaTempo");
linhaTempo.innerHTML = MEMORIAS.map((m) => `
  <li class="marco revelar" data-etapa="${m.etapa}" data-icone="${m.icone}">
    <div class="marco-card">
      <div class="marco-corpo">
        <span class="marco-periodo">${m.periodo}</span>
        <h3>${m.titulo}</h3>
        <p>${m.texto}</p>
        <p class="marco-escola">${m.escola}</p>
        <details class="sanfona">
          <summary>Momento inesquecível</summary>
          <p>${m.momento}</p>
        </details>
      </div>
    </div>
  </li>`).join("");

// Filtro por etapa
$$("#filtrosEtapa .filtro").forEach((botao) => {
  botao.addEventListener("click", () => {
    $$("#filtrosEtapa .filtro").forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    const etapa = botao.dataset.etapa;
    $$(".marco").forEach((marco) => {
      marco.classList.toggle("oculto", etapa !== "todas" && marco.dataset.etapa !== etapa);
    });
  });
});

/* =========================================================
   REDAÇÕES — cards + busca + modal de leitura
   ========================================================= */
const gradeRedacoes = $("#gradeRedacoes");
let listaVisivel = []; // índices das redações exibidas (após filtros)

function tempoLeitura(paragrafos) {
  const palavras = paragrafos.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(palavras / 200)) + " min de leitura";
}

function renderizarRedacoes() {
  const busca = $("#buscaRedacao").value.trim().toLowerCase();
  const ano = $("#filtroAno").value;

  listaVisivel = REDACOES
    .map((r, i) => ({ ...r, i }))
    .filter((r) => (ano === "todos" || r.ano === ano) &&
      (r.titulo + " " + r.resumo + " " + r.genero + " " + (r.repertorios || []).join(" ")).toLowerCase().includes(busca))
    .map((r) => r.i);

  $("#contagemRedacoes").textContent = `Mostrando ${listaVisivel.length} de ${REDACOES.length} redações`;

  gradeRedacoes.innerHTML = listaVisivel.length
    ? listaVisivel.map((i) => {
        const r = REDACOES[i];
        return `
        <button class="card-redacao" data-indice="${i}">
          <span class="card-numero">${String(i + 1).padStart(2, "0")}</span>
          <span class="card-tag">${r.genero}</span>
          <h3>${r.titulo}</h3>
          <p class="card-resumo">${r.resumo}</p>
          <div class="card-rodape"><span>${r.ano} · ${r.data}</span><span>${tempoLeitura(r.texto)}</span></div>
        </button>`;
      }).join("")
    : `<p class="sem-resultado">Nenhuma redação encontrada. 😕</p>`;
}

$("#buscaRedacao").addEventListener("input", renderizarRedacoes);
$("#filtroAno").addEventListener("change", renderizarRedacoes);
gradeRedacoes.addEventListener("click", (e) => {
  const card = e.target.closest(".card-redacao");
  if (card) abrirRedacao(Number(card.dataset.indice));
});
renderizarRedacoes();

/* ---------- Modal ---------- */
const modal = $("#modalRedacao");
let atual = 0;

function abrirRedacao(indice) {
  atual = indice;
  const r = REDACOES[indice];
  $("#modalMeta").textContent = `Redação ${indice + 1} · ${r.genero} · ${r.ano} · ${r.data}`;
  $("#modalTitulo").textContent = r.titulo;
  $("#modalTexto").innerHTML = r.texto.map((p) => `<p>${p}</p>`).join("");
  $("#modalRepertorios").innerHTML = r.repertorios
    ? `<h4>📚 Repertórios utilizados</h4><ul>${r.repertorios.map((x) => `<li>${x}</li>`).join("")}</ul>`
    : "";
  const pos = listaVisivel.indexOf(indice);
  $("#modalPosicao").textContent = `${pos + 1} / ${listaVisivel.length}`;
  $("#btnAnterior").disabled = pos <= 0;
  $("#btnProxima").disabled = pos >= listaVisivel.length - 1;
  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-caixa").scrollTop = 0;
}

function fecharModal() {
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function navegar(passo) {
  const pos = listaVisivel.indexOf(atual) + passo;
  if (pos >= 0 && pos < listaVisivel.length) abrirRedacao(listaVisivel[pos]);
}

$$("[data-fechar]").forEach((el) => el.addEventListener("click", fecharModal));
$("#btnAnterior").addEventListener("click", () => navegar(-1));
$("#btnProxima").addEventListener("click", () => navegar(1));

// Teclado: Esc fecha, setas navegam
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
  if (modal.classList.contains("aberto")) {
    if (e.key === "ArrowRight") navegar(1);
    if (e.key === "ArrowLeft") navegar(-1);
  }
});

/* =========================================================
   EFEITOS DE ROLAGEM
   ========================================================= */
// Revelar elementos ao aparecerem na tela
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((ent) => {
    if (ent.isIntersecting) { ent.target.classList.add("visivel"); observador.unobserve(ent.target); }
  });
}, { threshold: 0.15 });
$$(".revelar").forEach((el) => observador.observe(el));

// Contadores animados
function animarContador(el) {
  const alvo = Number(el.dataset.alvo);
  const inicio = performance.now();
  const duracao = 1500;
  function passo(agora) {
    const p = Math.min((agora - inicio) / duracao, 1);
    el.textContent = Math.round(alvo * (1 - Math.pow(1 - p, 3))).toLocaleString("pt-BR");
    if (p < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}
const obsContador = new IntersectionObserver((entradas) => {
  entradas.forEach((ent) => {
    if (ent.isIntersecting) { animarContador(ent.target); obsContador.unobserve(ent.target); }
  });
});
$$("[data-alvo]").forEach((el) => obsContador.observe(el));

// Botão voltar ao topo + link ativo no menu
const secoes = $$("main section[id]");
window.addEventListener("scroll", () => {
  $("#voltarTopo").classList.toggle("visivel", window.scrollY > 600);
  let atualId = "";
  secoes.forEach((s) => { if (window.scrollY >= s.offsetTop - 120) atualId = s.id; });
  $$(".nav-links a").forEach((a) => a.classList.toggle("ativo", a.getAttribute("href") === "#" + atualId));
});
$("#voltarTopo").addEventListener("click", () => window.scrollTo({ top: 0 }));

/* =========================================================
   CONFETE DE FORMATURA 🎉
   ========================================================= */
const canvas = $("#confete");
const ctx = canvas.getContext("2d");
let pedacos = [];

function soltarConfete() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const cores = ["#1e3a8a", "#c9a227", "#e11d48", "#16a34a", "#7c3aed", "#f97316"];
  pedacos = Array.from({ length: 180 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    tam: 6 + Math.random() * 6,
    vel: 2 + Math.random() * 4,
    giro: Math.random() * 360,
    cor: cores[Math.floor(Math.random() * cores.length)]
  }));
  requestAnimationFrame(desenharConfete);
}

function desenharConfete() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pedacos.forEach((p) => {
    p.y += p.vel; p.x += Math.sin(p.y / 30); p.giro += 5;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.giro * Math.PI) / 180);
    ctx.fillStyle = p.cor;
    ctx.fillRect(-p.tam / 2, -p.tam / 4, p.tam, p.tam / 2);
    ctx.restore();
  });
  pedacos = pedacos.filter((p) => p.y < canvas.height + 20);
  if (pedacos.length) requestAnimationFrame(desenharConfete);
  else ctx.clearRect(0, 0, canvas.width, canvas.height);
}

$("#btnComemorar").addEventListener("click", soltarConfete);
