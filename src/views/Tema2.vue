<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 UNIDAD 2. SECTORES DE LA ECONOMÍA 

    p.mb-3 Al realizar un análisis de la economía de un país, es posible observar que algunos sectores se desarrollan más que otros; identificar cuáles son los sectores de la economía que contribuyen al crecimiento de esta o los más atrasados, le permiten dimensionar y planear las políticas económicas y sociales de un país. 

    p.mb-3 Conocer el comportamiento de los tres sectores económicos en que se ha dividido la producción:  las fuentes primarias como los recursos naturales, renovables o no renovables; el sector industrial  y el sector de prestación de servicios, son indispensables para examinar el desarrollo económico de un país. (Meléndez, 2013).

    h4.mb-5 6. Teorías económicas
    .row
        .col-12.col-md-8.col-lg-10.col-xl-12.mb-5
          figure.mb-5
              img(src="@/assets/curso/images/tema2/img_1.svg", alt="", style="width:800px; display:block; margin:0 auto;")

    p.mb-3 La actividad económica de un país se encuentra dividida por conjuntos de actividades productivas o comerciales, cada uno de estos conjuntos o sectores, se agrupan de acuerdo a características comunes que guardan relación entre sí. Su división se realiza de acuerdo a los procesos de producción que ocurren al interior de cada uno de estos. 

    p.mb-5 La teoría económica desarrollada por Colin Clark y Jean Fourastié, divide las economías en tres sectores, según esta teoría “el principal objeto de la actividad de una economía varía desde el primario, a través del secundario hasta llegar al sector terciario” (Fourastié, 1956).

    .row
      .col-12.col-md-8.col-lg-10.col-xl-12.mb-5
        figure.mb-5
            img(src="@/assets/curso/images/tema2/img_2.svg", alt="", style="width:800px; display:block; margin:0 auto;")
  
    h4.mb-5 7. Distribución de los sectores económicos

    .row
      .col-12.col-md-8.col-lg-10.col-xl-12.mb-5
        figure.mb-5
            img(src="@/assets/curso/images/tema2/img_3.svg", alt="", style="width:600px; display:block; margin:0 auto;")
            br
            | Fuente: Fourastié (1956)

    h4.mb-5 8. Clasificación de los sectores económicos

    p.mb-3 Según estudios económicos presentados por la subgerencia cultural del Banco de la República los sectores se clasifican según el tipo de productos o servicios que ofrecen en:
    .row.justify-content-center.align-items-center.mb-3
      .col-12
        table.mb-5
          tbody
            tr
              td.table-color-1 Sector primario o agropecuario
              td.table-color-2 Obtiene el producto de sus actividades directamente de la naturaleza, sin ningún proceso de transformación.<br><br> La agricultura, la ganadería, la silvicultura, la caza y la pesca.
              td
                img(src="@/assets/curso/images/tema2/img_4.svg", alt="", style="width:600px; display:block; margin:0 auto;")
            tr
              td.table-color-3 Sector secundario o industrial 
              td.table-color-4 Comprende todas las actividades económicas de un país relacionadas con la transformación industrial de los alimentos y otros tipos de bienes o mercancías, los cuales se utilizan como base para la fabricación de nuevos productos. <br><br> Extracción minera y de petróleo. Envasado de legumbres y frutas, embotellado de refrescos, fabricación de abonos y fertilizantes, vehículos, cementos y aparatos electrodomésticos, entre otros.
              td 
                img(src="@/assets/curso/images/tema2/img_5.svg", alt="", style="width:600px; display:block; margin:0 auto;")
            tr
              td.table-color-5 Sector terciario o de servicios 
              td.table-color-6 Este sector se enfoca en los intangibles o servicios. <br><br> Hotelería y turismo, espectáculos, banca, comunicaciones, comercio, software, servicios públicos, salud, tercerización y servicios BPO.
              td 
                img(src="@/assets/curso/images/tema2/img_6.svg", alt="", style="width:600px; display:block; margin:0 auto;")
            br
            | Fuente: Subgerencia Cultural del Banco de la República (2005)

    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  











    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
