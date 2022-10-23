<template>
  <div class="home">
    <Sidebar/>
    <div class="content">
      <div class="header">
        <h1 class="header-title">Bem vindo</h1>
        <img src="../assets/images/selfie_logo.png" alt="Logomarca">
      </div>
      <div class="text-body">
        <p class="introduction">
          O Quadro Europeu de Competência Digital para Educadores responde à consciencialização 
          crescente entre muitos estados membros europeus que os educadores precisam de um 
          conjunto de competências digitais específicas para a sua profissão de modo a serem capazes 
          de aproveitar o potencial das tecnologias digitais para melhorar e inovar a educação.
        </p>
        <div class="areas">
          <div class="areas-introduction">
            <p class="areas-presentation">
              O Quadro DigCompEdu visa captar e descrever estas competências digitais específicas, propondo 22 
              competências elementares, organizadas em 6 áreas.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #ff6384;">
            <img src="../assets/images/envolvimento.png" alt="Envolvimento Profissional">
            <p class="areas-presentation">
              A Área 1 dirige-se ao ambiente profissional, ou seja, ao uso de tecnologias digitais 
              por parte dos educadores em interações profissionais com colegas, aprendentes, para o 
              seu próprio desenvolvimento profissional e para o bem coletivo da instituição.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #36a2eb;">
            <img src="../assets/images/recursos.png" alt="Recurso">
            <p class="areas-presentation">
              A Área 2 centra-se nas competências necessárias para usar, criar e partilhar recursos digitais para a aprendizagem,
              de forma efetiva e responsável.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #ffce56;">
            <img src="../assets/images/ensino.png" alt="Ensino e Aprendizagem">
            <p class="areas-presentation">
              A Área 3 é dedicada à gestão e orquestração da utilização de tecnologias digitais no ensino e aprendizagem.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #4bc0c0;">
            <img src="../assets/images/avaliacao.png" alt="Avaliação">
            <p class="areas-presentation">
              A Área 4 aborda o uso de estratégias digitais para melhorar a avaliação.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #9966ff;">
            <img src="../assets/images/capacitacao.png" alt="Capacitação dos alunos">
            <p class="areas-presentation">
              A Área 5 concentra-se no potencial das tecnologias digitais para estratégias de ensino e aprendizagem centradas
              no aprendente.
            </p>
          </div>
          <div class="areas-card" style="border: 2px solid #ff9f40;">
            <img src="../assets/images/promocao.png" alt="Promoção">
            <p class="areas-presentation">
              Área 6 detalha as competências pedagógicas específicas necessárias para promover a competência digital dos 
              aprendentes.
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