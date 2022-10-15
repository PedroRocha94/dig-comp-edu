import { ref, computed } from "vue";

export const questions = ref([
  {
    id: 1,
    area: {
      id: 1,
      name: 'Envolvimento Profissional'
    },
    question: 'Uso, sistematicamente, diferentes canais de comunicação para melhorar a comunicação com alunos, encarregados de educação e colegas, p.ex. emails, blogues, website da escola, apps',
    options: [
      'Raramente uso canais de comunicação digital',
      'Uso canais de comunicação básicos; p. ex. email',
      'Combino diferentes canais de comunicação; p. ex. email, blogue de turma ou o website da escola',
      'Seleciono, ajusto e combino, sistematicamente, diferentes soluções digitais para uma comunicação eficaz',
      'Reflito, discuto e desenvolvo as minhas estratégias de comunicação proativamente'
    ],
    selected: null,
  },
  {
    id: 2,
    area: {
      id: 1,
      name: 'Envolvimento Profissional'
    },
    question: 'Uso tecnologias digitais para trabalhar com colegas dentro e fora da minha instituição educativa',
    options: [
      'Raramente tenho oportunidade para colaborar com outros colegas',
      'Às vezes troco materiais com colegas, p. ex. via email',
      'Entre colegas, trabalhamos juntos em ambientes colaborativos ou usamos mídias compartilhadas',
      'Troco ideias e materiais, também com colegas externos à minha escola, p. ex. numa rede online profissional ou num espaço colaborativo online',
      'Crio materiais juntamente com outros colegas numa rede online de professores de diferentes instituições'
    ],
    selected: null
  },
  {
    id: 3,
    area: {
      id: 1,
      name: 'Envolvimento Profissional'
    },
    question: 'Desenvolvo as minhas habilidades de ensino digital ativamente',
    options: [
      'Raramente tenho tempo para melhorar as minhas habilidades de ensino digital',
      'Melhoro as minhas habilidades através da reflexão e experimentação',
      'Uso uma variedade de recursos para desenvolver as minhas habilidades de ensino digital',
      'Discuto com colegas como usar tecnologias digitais para inovar e melhorar a prática educativa',
      'Ajudo colegas a desenvolver as suas estratégias de ensino digital'
    ],
    selected: null
  },
  {
    id: 4,
    area: {
      id: 1,
      name: 'Envolvimento Profissional'
    },
    question: 'Participo em oportunidades de formação online, p. ex. cursos online, MOOCs, webinars, conferências virtuais...',
    options: [
      'Esta é uma área nova que ainda não considerei',
      'Ainda não, mas estou definitivamente interessado(a)',
      'Participei em formação online uma ou duas vezes',
      'Tentei várias oportunidades diferentes de formação online',
      'Participo frequentemente em todo o tipo de formação online',
    ],
    selected: null
  },
  {
    id: 1,
    area: {
      id: 2,
      name: 'Recursos Digitais'
    },
    question: 'Uso diferentes websites e estratégias de pesquisa para encontrar e selecionar um conjunto de diferentes recursos digitais',
    options: [
      'Raramente uso a internet para encontrar recursos',
      'Uso motores de busca e plataformas educativas para encontrar recursos relevantes',
      'Avalio e seleciono recursos com base na sua adequação ao meu grupo de alunos',
      'Comparo recursos usando uma série de critérios relevantes; p. ex. confiabilidade, qualidade, adequação, design, interatividade, atratividade',
      'Aconselho colegas sobre recursos adequados e estratégias de pesquisa'
    ],
    selected: null
  },
  {
    id: 2,
    area: {
      id: 2,
      name: 'Recursos Digitais'
    },
    question: 'Crio os meus próprios recursos digitais e modifico recursos existentes para adaptá-los às minhas necessidades',
    options: [
      'Não crio os meus próprios recursos digitais',
      'Crio fichas de trabalho com um computador, mas depois imprimo-as',
      'Crio apresentações digitais, embora pouco',
      'Crio diferentes tipos de recursos digitais',
      'Organizo e adapto recursos complexos e interativos'
    ],
    selected: null
  },
  {
    id: 3,
    area: {
      id: 2,
      name: 'Recursos Digitais'
    },
    question: 'Divulgo, de forma eficaz, conteúdo com dados sensíveis; p. ex. exames, classificações, dados pessoais dos alunos',
    options: [
      'Não preciso, porque a instituição realiza esses procedimentos',
      'Evito armazenar dados pessoais eletronicamente',
      'Divulgo alguns dados pessoais',
      'Divulgo arquivos os com dados pessoais com senha',
      'Divulgo dados pessoais de forma abrangente; p. ex. combinando senhas difíceis de adivinhar com encriptação e atualizações frequentes de software'
    ],
    selected: null
  },
  {
    id: 1,
    area: {
      id: 3,
      name: 'Ensino e Aprendizagem'
    },
    question: 'Pondero, cuidadosamente, como, quando e por que usar tecnologias digitais em sala de aula, para garantir que elas sejam usadas com valor acrescentado',
    options: [
      'Não uso, ou raramente uso, tecnologia em sala de aula',
      'Faço uma utilização básica do equipamento disponível; p. ex. quadros interativos ou projetores multimídias',
      'Uso uma variedade de recursos e ferramentas digitais em minhas aulas',
      'Uso ferramentas digitais para melhorar sistematicamente minhas aulas',
      'Uso ferramentas digitais para implementar estratégias pedagógicas inovadoras'
    ],
    selected: null
  },
  {
    id: 2,
    area: {
      id: 3,
      name: 'Ensino e Aprendizagem'
    },
    question: 'Monitoro as atividade e interações dos meus alunos nos ambientes colaborativos online que usamos',
    options: [
      'Não utilizo ambientes digitais com os meus alunos',
      'Não monitoro a atividade dos alunos nos ambientes online que utilizo',
      'Ocasionalmente verifico as discussões dos alunos',
      'Monitoro e analiso a atividade online dos meus alunos regularmente',
      'Intervenho com comentários motivadores ou corretivos regularmente'
    ],
    selected: null
  },
  {
    id: 3,
    area: {
      id: 3,
      name: 'Ensino e Aprendizagem'
    },
    question: 'Quando os meus alunos trabalham em grupos, usam tecnologias digitais para adquirir e documentar conhecimento',
    options: [
      'Os meus alunos não trabalham em grupos',
      'Não é possível, para mim, integrar tecnologias digitais em trabalho em grupo',
      'Incentivo os alunos trabalharem em grupos, procurando informação online ou apresentar os seus resultados em um formato digital',
      'Peço aos alunos que trabalham em grupos e utilizem a internet para encontrarem informação e apresentarem os seus resultados em um formato digital',
      'Os meus alunos trocam evidências e criam conhecimento juntos, num espaço colaborativo online'
    ],
    selected: null
  },
  {
    id: 4,
    area: {
      id: 3,
      name: 'Ensino e Aprendizagem'
    },
    question: 'Uso tecnologias digitais para permitir que os alunos planejem, documentem e monitorem as suas aprendizagens; p. ex. quizzes para autoavaliação, portfólios para documentação e divulgação, diários online/blogues para reflexão...',
    options: [
      'Não é possível no meu contexto de trabalho',
      'Os meus alunos refletem sobre a sua aprendizagem, mas não com tecnologias digitais',
      'Às vezes uso; p. ex., quizzes para autoavaliação',
      'Uso uma variedade de ferramentas digitais para permitir aos alunos planejar, documentar ou refletir sobre a sua aprendizagem',
      'Integro, sistematicamente, diferentes ferramentas digitais para planejar, monitorar e refletir sobre o progresso dos alunos'
    ],
    selected: null
  },
  {
    id: 1,
    area: {
      id: 4,
      name: 'Avaliação'
    },
    question: 'Uso ferramentas de avaliação digital para monitorar o progresso de aprendizagem dos alunos',
    options: [
      'Não monitoro o progresso dos alunos',
      'Monitoro o progresso regularmente, mas não através de meios digitais',
      'Às vezes utilizo uma ferramenta digital; p. ex. um quiz, para controlar o progresso dos alunos',
      'Uso uma variedade de ferramentas digitais para monitorar o progresso dos alunos',
      'Uso, sistematicamente, uma variedade de ferramentas digitais para monitorar o progresso dos alunos'
    ],
    selected: null
  },
  {
    id: 2,
    area: {
      id: 4,
      name: 'Avaliação'
    },
    question: 'Analiso todos os dados disponíveis para identificar, efetivamente, os alunos que precisam de apoio adicional. Os “dados” incluem: envolvimento dos alunos, desempenho, classificações, participação; atividades e interações sociais em ambientes (online). “Alunos que precisam de apoio adicional” são: alunos que correm o risco de desistir ou apresentam baixo desempenho; alunos que têm distúrbios de aprendizagem ou necessidades específicas de aprendizagem, alunos que não possuem competências transversais; p. ex. competências sociais, verbais ou de estudo.',
    options: [
      'Estes dados não estão disponíveis e/ou não é minha responsabilidade analisá-los',
      'Em parte, apenas analiso dados academicamente relevantes; p. ex. desempenho e classificações',
      'Também levo em consideração dados sobre a atividade e o comportamento dos alunos, para identificar aqueles que precisam de apoio adicional',
      'Examino regularmente toda a evidência disponível para identificar alunos que precisam de apoio adicional',
      'Analiso dados sistematicamente e intervenho nos momentos adequados'
    ],
    selected: null
  },
  {
    id: 3,
    area: {
      id: 4,
      name: 'Avaliação'
    },
    question: 'Uso tecnologias digitais para fornecer feedback',
    options: [
      'O feedback não é necessário no meu contexto de trabalho',
      'Forneço feedback aos alunos, mas não em formato digital',
      'Às vezes utilizo formas digitais de prestar feedback; p. ex. pontuação automática em quizzes online ou “Curtidas” em ambientes digitais',
      'Uso uma variedade de formas digitais de fornecer feedback',
      'Uso sistematicamente abordagens digitais para fornecer feedback'
    ],
    selected: null
  },
  {
    id: 1,
    area: {
      id: 5,
      name: 'Capacitação dos Alunos'
    },
    question: 'Quando crio atividades digitais para os alunos, considero e abordo potenciais dificuldades práticas ou técnicas; p. ex., acesso equitativo a dispositivos e recursos digitais, problemas de interoperabilidade e conversão, falta de habilidades digitais, ...',
    options: [
      'Não crio tarefas digitais',
      'Os meus alunos não têm problemas em utilizar tecnologia digital',
      'Adapto a tarefa para minimizar dificuldades',
      'Discuto possíveis obstáculos com os alunos e delineio soluções',
      'Dou espaço para a variedade; p. ex. adapto a tarefa, discuto soluções e proporciono caminhos alternativos para completar a tarefa'
    ],
    selected: null
  },
  {
    id: 2,
    area: {
      id: 5,
      name: 'Capacitação dos Alunos'
    },
    question: 'Uso tecnologias digitais para proporcionar aos alunos oportunidades de aprendizagem personalizadas; p. ex., dou a diferentes alunos diferentes tarefas digitais para atender a necessidades individuais de aprendizagem, preferências e interesses',
    options: [
      'No meu contexto de trabalho, pede-se a todos os alunos que façam as mesmas atividades, independentemente do seu nível',
      'Forneço aos alunos recomendações de recursos adicionais',
      'Ofereço atividades digitais opcionais para os alunos que estão avançados ou atrasados',
      'Sempre que possível, utilizo tecnologias digitais para oferecer oportunidades de aprendizagem diferenciadas',
      'Adapto sistematicamente minhas aulas a relação com necessidades, preferências e interesses dos alunos'
    ],
    selected: null
  },
  {
    id: 3,
    area: {
      id: 5,
      name: 'Capacitação dos Alunos'
    },
    question: 'Uso tecnologias digitais para os alunos participarem ativamente nas aulas',
    options: [
      'No meu contexto de trabalho não é possível envolver os alunos ativamente na aula',
      'Envolvo ativamente os alunos na aula, mas não com tecnologias digitais',
      'Quando ensino, uso estímulos motivadores; p. ex. vídeos, animações',
      'Os meus alunos envolvem-se com mídias digitais nas minhas aulas; p. ex. fichas de trabalho digitais, jogos, quizzes',
      'Os meus alunos usam tecnologias digitais para investigar, discutir e criar conhecimento de forma sistemática'
    ],
    selected: null
  },
  {
    id: 1,
    area: {
      id: 6,
      name: 'Promoção da Competências Digital dos Alunos'
    },
    question: 'Ensino aos meus alunos como avaliar a confiabilidade da informação, identificar desinformação e informação tendenciosa',
    options: [
      'Isto não é possível na minha disciplina ou contexto de trabalho',
      'Ocasionalmente relembro aos alunos que nem toda a informação online é confiável',
      'Ensino aos alunos como discernir fontes confiáveis e não confiáveis',
      'Discuto com os alunos como verificar a precisão da informação',
      'Discutimos, amplamente, como a informação é criada e pode ser distorcida'
    ],
    selected: null
  },
  {
    id: 2,
    area: {
      id: 6,
      name: 'Promoção da Competências Digital dos Alunos'
    },
    question: 'Preparo tarefas que requerem que os alunos usem meios digitais para comunicarem e colaborarem uns com os outros ou com um público externo',
    options: [
      'Isto não é possível na minha disciplina ou contexto de trabalho',
      'Apenas em raras ocasiões exijo aos meus alunos que comuniquem ou colaborem online',
      'Os meus alunos usam comunicação e colaboração digital, sobretudo entre eles',
      'Os meus alunos usam meios digitais para comunicarem e colaborarem entre eles e com um público externo',
      'Preparo, sistematicamente, tarefas que permitem aos alunos expandirem lentamente as suas habilidades'
    ],
    selected: null
  },
  {
    id: 3,
    area: {
      id: 6,
      name: 'Promoção da Competências Digital dos Alunos'
    },
    question: 'Preparo atividades que requerem que os alunos criem conteúdo digital; p. ex. vídeos, áudios, fotos, apresentações digitais, blogues, wikis ...',
    options: [
      'Isto não é possível na minha disciplina ou contexto de trabalho',
      'Isto é difícil de implementar com os meus alunos',
      'Às vezes, como uma atividade lúdica',
      'Os meus alunos criam conteúdo digital como parte integrante do seu estudo',
      'Isto é uma parte integrante da sua aprendizagem e eu aumento, sistematicamente, o nível de dificuldade para desenvolver ainda mais as suas habilidades'
    ],
    selected: null
  },
  {
    id: 4,
    area: {
      id: 6,
      name: 'Promoção da Competências Digital dos Alunos'
    },
    question: 'Ensino os alunos a usarem tecnologia digital de forma segura e responsável',
    options: [
      'Isto não é possível na minha disciplina ou contexto de trabalho',
      'Informo os alunos de que precisam de ter cuidado com o compartilhamento de informação pessoal online',
      'Explico as regras básicas para agir com segurança e responsabilidade em ambientes online',
      'Discutimos e estabelecemos regras de conduta',
      'Desenvolvo, sistematicamente, a utilização de regras sociais nos diferentes ambientes digitais que utilizamos'
    ],
    selected: null
  },
  {
    id: 5,
    area: {
      id: 6,
      name: 'Promoção da Competências Digital dos Alunos'
    },
    question: ' Incentivo os alunos a usarem tecnologias digitais de forma criativa para resolverem problemas concretos, p.ex., para superar obstáculos ou desafios emergentes no processo de aprendizagem',
    options: [
      'Isto não é possível na minha disciplina ou contexto de trabalho',
      'Raramente tenho a oportunidade de promover a resolução de problemas digitais dos alunos',
      'Ocasionalmente, quando surge uma oportunidade',
      'Experimentamos, muitas vezes, soluções tecnológicas para problemas',
      'Integro, sistematicamente, oportunidades para resolução criativa de problemas digitais'
    ],
    selected: null
  },
])

export const quizCompleted = ref(false);
export const currentQuestion = ref(0);

export const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

export const nextQuestion = () => {
  if(currentQuestion.value < questions.value.length -1) {
    currentQuestion.value++;
  } else {
    quizCompleted.value = true;
  }
}