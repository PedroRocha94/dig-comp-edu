<template>
  <div class="home">
    <Sidebar/>
    <div class="content">
      <div class="header">
        <h1 class="header-title">Bem vindo!</h1>
        <img src="../assets/images/selfie_logo.png" alt="Logomarca">
      </div>
      <div class="text-header">
        <div class="text-body-image">
          <img src="../assets/images/background.png" alt="Logo DigCompEdu">
        </div>
        <p class="introduction">
          O Quadro Europeu de Competência Digital para Educadores responde à consciencialização 
          crescente entre muitos estados membros europeus que os educadores precisam de um 
          conjunto de competências digitais específicas para a sua profissão de modo a serem capazes 
          de aproveitar o potencial das tecnologias digitais para melhorar e inovar a educação.
        </p>
      </div>
      <div class="info-about">
        <div class="info-about-text">
          <p class="info-about-text-p">
            Este site tem como objetivo proporcionar ao usuário uma alternativa de auto avaliação em relação as suas 
            competencias digitais. O uso do site é voltado para os professores, mas qualquer pessoa pode realizar sua
            auto avaliação mas, tendo em mente que as pontuações podem ficar abaixo em algumas áreas específicas.
          </p>
          <p>
            <strong>Competência digital</strong> são conhecimentos e criatividades que o sujeito tem para utilizar mídias digitais, 
            tanto para o aprendizagem quanto para o uso em sociedade.
          </p>
        </div>
        <img src="../assets/images/competencias.png" alt="Competencias">
      </div>
      <div class="text-body">
        <div class="digcompedu">
          <h2>DIGCOMPEDU</h2>
        </div>
        <div class="areas-introduction">
          <p class="areas-presentation">
            O Quadro DigCompEdu visa captar e descrever estas competências digitais específicas, propondo 22 
            competências elementares, organizadas em 6 áreas.
          </p>
        </div>
        <div class="areas">
          <div class="areas-card" style="border: 2px solid #ff6384;">
            <img src="../assets/images/envolvimento.png" alt="Envolvimento Profissional">
            <p class="areas-presentation">
              A Área 1. <strong>Envolvimento Profissional</strong>, dirige-se ao ambiente profissional, ou seja, ao uso de tecnologias digitais 
              por parte dos educadores em interações profissionais com colegas, aprendentes, para o 
              seu próprio desenvolvimento profissional e para o bem coletivo da instituição.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #36a2eb;">
            <img src="../assets/images/recursos.png" alt="Recurso">
            <p class="areas-presentation">
              A Área 2. <strong>Recurso</strong>, centra-se nas competências necessárias para usar, criar e partilhar recursos digitais para a aprendizagem,
              de forma efetiva e responsável.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #ffce56;">
            <img src="../assets/images/ensino.png" alt="Ensino e Aprendizagem">
            <p class="areas-presentation">
              A Área 3. <strong>Ensino e Aprendizagem</strong>, é dedicada à gestão e orquestração da utilização de tecnologias digitais no ensino e aprendizagem.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #4bc0c0;">
            <img src="../assets/images/avaliacao.png" alt="Avaliação">
            <p class="areas-presentation">
              A Área 4. <strong>Avaliação</strong>, aborda o uso de estratégias digitais para melhorar a avaliação.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #9966ff;">
            <img src="../assets/images/capacitacao.png" alt="Capacitação dos alunos">
            <p class="areas-presentation">
              A Área 5. <strong>Capacitação dos Alunos</strong>, concentra-se no potencial das tecnologias digitais para estratégias de ensino e aprendizagem centradas
              no aluno.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #ff9f40;">
            <img src="../assets/images/promocao.png" alt="Promoção">
            <p class="areas-presentation">
              A Área 6. <strong>Promoção da Competências Digital dos Alunos</strong>, detalha as competências pedagógicas específicas necessárias para promover a competência digital dos 
              alunos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>