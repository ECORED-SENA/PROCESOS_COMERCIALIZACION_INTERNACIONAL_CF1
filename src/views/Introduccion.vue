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
      .col-12.col-md-8.col-lg-5.col-xl-6
        br
        br
        br
        br
        br
        br
        img(src="@/assets/curso/images/tema1/intro.svg", alt= "",style="width:450px; display:block; margin:0 auto;")

      .col-12.col-md-8.col-lg-5.col-xl-5.mb-3
        br
        p.mb-3 Las empresas colombianas se enfrentan a diferentes cambios y retos que afectan directa e indirectamente la dinámica de sus operaciones, en el momento en el cual desean incursionar en mercados internacionales
        p.mb-3 Estos retos hacen que las mismas busquen soluciones basadas en el estudio y conocimiento de los diferentes sectores de la economía nacional para lograr localizar, en primer lugar, la oferta exportable y posteriormente, las posibilidades de éxito o fracaso a nivel internacional.

        p.mb-3 Así mismo, es conveniente pensar en la adaptación de los bienes y servicios según el perfil y necesidades del mercado potencial, sin dejar a un lado las estrategias de marketing digital que son indispensables en el momento de realizar la comercialización internacional y las ventajas que los acuerdos comerciales otorgan a los países participantes

    
      h5.mb-3.text-center Mapa conceptual
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-5.col-xl-8
        img(src="@/assets/curso/images/tema1/mapa.jpg", alt= "",style="width:1000px; display:block; margin:0 auto;")

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
