import { ref, computed } from "vue";

export const questions = ref([
  {
    id: 1,
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