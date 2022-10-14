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
  }
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