/* =========================================================
   DADOS DO SITE  ✏️  EDITE AQUI!
   Este arquivo concentra o conteúdo pessoal do site.
   (As redações ficam em js/redacoes.js)
   ========================================================= */

// Nome (aparece no topo, na apresentação e no rodapé)
const MEU_NOME = "Maria Clara do Prado de Castro";
const MEU_NOME_CURTO = "Maria Clara"; // aparece no menu do topo

/* ---------------------------------------------------------
   MEMÓRIAS ESCOLARES — linha do tempo
   etapa: "infantil" | "fund1" | "fund2" | "medio"
   foto: coloque a imagem em assets/img/ com o mesmo nome.
         Se a foto não existir, aparece uma imagem de exemplo.
   --------------------------------------------------------- */
const MEMORIAS = [
  {
    etapa: "infantil",
    icone: "🧸",
    periodo: "Jardim de Infância e Pré-escola · 2013–2014",
    titulo: "Onde tudo começou",
    escola: "Jaguariaíva – PR",
    foto: "assets/img/jaguariaiva.jpg",
    texto: "Nasci em Jaguariaíva, no interior do Paraná, e foi lá que dei os primeiros passos na escola, no Jardim de Infância e na Pré-escola. Eu e minha irmã gêmea, a Ana Lívia, começamos juntas essa aventura, mas cada uma na sua turma. Era a primeira vez que a gente passava parte do dia separada, e no começo isso parecia estranho. Aos poucos, a escola virou um lugar de massinha, desenhos, músicas e muitas brincadeiras no parquinho.",
    momento: "A hora da saída, quando eu e a Ana Lívia nos encontrávamos no portão e cada uma queria contar primeiro tudo o que tinha feito na sua sala."
  },
  {
    etapa: "fund1",
    icone: "🏙️",
    periodo: "1º ano · 2015",
    titulo: "Uma cidade nova, uma escola nova",
    escola: "Escola Inovação do Saber – Curitiba",
    foto: "assets/img/inovacao-do-saber.jpg",
    texto: "Em 2015 veio a primeira grande mudança: saímos de Jaguariaíva e fomos morar em Curitiba. Comecei o 1º ano na Inovação do Saber, em uma cidade muito maior do que a que eu conhecia. Foi o ano da alfabetização, de juntar as letras, ler as primeiras palavras sozinha e descobrir que os livros tinham histórias inteiras esperando por mim.",
    momento: "O dia em que consegui ler uma frase inteira sem ajuda e corri para mostrar em casa."
  },
  {
    etapa: "fund1",
    icone: "🌱",
    periodo: "2º ano · 2016",
    titulo: "Recomeçar de novo",
    escola: "Escola Novo Éden – Curitiba",
    foto: "assets/img/novo-eden.jpg",
    texto: "No 2º ano mudei outra vez de escola e fui para o Novo Éden. Mudar tantas vezes ainda tão pequena me ensinou cedo a me adaptar: chegar em um lugar desconhecido, aprender os nomes dos colegas e dos professores e fazer novas amizades. Hoje percebo que essa facilidade de recomeçar veio daí.",
    momento: "O primeiro recreio na escola nova, quando uma colega me chamou para brincar e o frio na barriga passou na hora."
  },
  {
    etapa: "fund1",
    icone: "🎒",
    periodo: "3º ao 5º ano · 2017–2019",
    titulo: "Três anos de raízes",
    escola: "Escola Natália de Conto Costa – Curitiba",
    foto: "assets/img/natalia-de-conto-costa.jpg",
    texto: "Na Natália de Conto Costa finalmente fiquei mais tempo no mesmo lugar: foram três anos, do 3º ao 5º ano. Foi uma fase de criar raízes, fazer amizades mais duradouras, enfrentar a tabuada, os primeiros trabalhos em grupo e as apresentações para a turma. Mesmo estudando na mesma escola, eu e a Ana Lívia continuávamos em salas diferentes.",
    momento: "A despedida do 5º ano, com a sensação de que uma etapa inteira estava terminando."
  },
  {
    etapa: "fund2",
    icone: "👯",
    periodo: "6º ano · 2020",
    titulo: "Finalmente na mesma turma!",
    escola: "Morelli – Curitiba",
    foto: "assets/img/sexto-ano.jpg",
    texto: "Em 2020 chegamos ao Morelli e, pela primeira vez na vida, eu e a Ana Lívia ficamos na mesma turma. Depois de tantos anos em salas separadas, dividir a mesma sala foi uma novidade enorme. Só que a alegria durou pouco no formato presencial: poucas semanas depois do início das aulas, a pandemia de Covid-19 fechou as escolas, e nosso primeiro ano juntas na mesma turma aconteceu, quase todo, através de uma tela.",
    momento: "Os primeiros dias de aula no Morelli, sentando perto da minha irmã na mesma sala pela primeira vez."
  },
  {
    etapa: "fund2",
    icone: "💻",
    periodo: "6º e 7º ano · 2020–2021",
    titulo: "A escola dentro de casa",
    escola: "Morelli – aulas on-line",
    foto: "assets/img/pandemia.jpg",
    texto: "Entre 2020 e 2021, a escola passou a caber na tela do computador. Câmeras desligadas, internet travando, atividades enviadas por plataforma e a saudade de conversar com os colegas no intervalo. Foi um período difícil, que exigiu disciplina e organização. Ter a Ana Lívia na mesma turma ajudou muito: estudávamos juntas, tirávamos dúvidas uma da outra e uma não deixava a outra desanimar. No final de 2021, as aulas presenciais finalmente voltaram.",
    momento: "A volta às aulas presenciais no final de 2021 e o reencontro com a turma, depois de tanto tempo vendo todo mundo só pela tela."
  },
  {
    etapa: "fund2",
    icone: "🏁",
    periodo: "8º e 9º ano · 2022–2023",
    titulo: "A vida volta ao normal",
    escola: "Morelli – Curitiba",
    foto: "assets/img/oitavo-nono-ano.jpg",
    texto: "Com a rotina presencial de volta, o 8º e o 9º ano foram de recuperar o tempo perdido: conviver de verdade com a turma, fazer trabalhos em grupo, rir no intervalo e valorizar coisas simples que a pandemia tinha tirado de nós. No 9º ano veio a sensação de fechar um ciclo, com o fim do Ensino Fundamental e a expectativa para o Ensino Médio.",
    momento: "O encerramento do 9º ano, com a turma comemorando a conclusão do Ensino Fundamental."
  },
  {
    etapa: "medio",
    icone: "⭐",
    periodo: "1º ano do Ensino Médio · 2024",
    titulo: "Um dos melhores anos",
    escola: "Morelli – Curitiba",
    foto: "assets/img/primeiro-ano-em.jpg",
    texto: "O 1º ano do Ensino Médio foi, sem dúvida, um dos melhores anos da minha vida escolar. Tudo parecia novo: mais matérias, mais responsabilidades e o começo das redações no modelo do ENEM. Ao mesmo tempo, a turma estava mais unida do que nunca e cada dia tinha uma história nova para contar.",
    momento: "Os momentos com a turma que fizeram desse ano um dos meus favoritos."
  },
  {
    etapa: "medio",
    icone: "💡",
    periodo: "2º ano do Ensino Médio · 2025",
    titulo: "Pensando no futuro",
    escola: "Morelli – Curitiba",
    foto: "assets/img/segundo-ano-em.jpg",
    texto: "O 2º ano foi um ano de amadurecimento. Comecei a pensar com mais seriedade no futuro: que curso fazer, qual profissão seguir, como me preparar para o vestibular. As redações ficaram mais exigentes, os conteúdos mais difíceis, e aprendi a organizar melhor meus estudos.",
    momento: "As conversas com amigos sobre o que cada um queria ser no futuro."
  },
  {
    etapa: "medio",
    icone: "🎓",
    periodo: "3º ano do Ensino Médio · 2026",
    titulo: "O melhor ano de todos",
    escola: "Morelli – Curitiba",
    foto: "assets/img/terceiro-ano-em.jpg",
    texto: "Chegamos ao fim! O 3º ano foi, ao lado do 1º, o melhor de toda a minha trajetória. Teve ENEM, simulados e a pressão da reta final, mas também teve muita união, risadas e a vontade de aproveitar cada momento com a turma. Encerro essa jornada que começou em Jaguariaíva, passou por cinco escolas e terminou ao lado da Ana Lívia, na mesma sala, como sempre deveria ter sido.",
    momento: "O último dia de aula do Ensino Médio, sabendo que aquela seria a última vez de todos juntos como turma."
  }
];

// As redações ficam em js/redacoes.js
