<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-12.col-md-8.col-lg-5.col-xl-6.mb-5
        br
        img(src="@/assets/curso/images/tema1/intro.svg", alt= "",style="width:450px; display:block; margin:0 auto;")

      .col-12.col-md-8.col-lg-5.col-xl-5.mb-5
        br
        p.mb-3 Actualmente en el afán de ser cada día más competitivos y líderes en el mercado, los empresarios y emprendedores han enfocado sus esfuerzos en crear estrategias para lograr la satisfacción de las necesidades, gustos y preferencias de los clientes. En este sentido, el mercadeo se ha convertido en la pieza clave para el éxito y supervivencia de las empresas, ocupando un papel fundamental en el funcionamiento y dinámica de las mismas, las cuales evidencian un notorio cambio casi a diario de las condiciones del mercado y el entorno en el cual desarrollan sus operaciones.  

    
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
