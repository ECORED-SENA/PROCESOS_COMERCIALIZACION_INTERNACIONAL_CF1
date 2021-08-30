<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Oferta exportable de Colombia 

    #t_4_1.titulo-segundo
        .h4 4.1  Introducción
    
    p.mb-5 Antes de hablar de la oferta exportable de Colombia es necesario entender el término exportación, el cual se define como el proceso de comercializar un bien o servicio en territorio extranjero, es decir, la acción de vender productos y servicios en otros paises. 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-5.mb-lg-0

        p.mb-3 Colombia no es ajeno a este proceso y cuenta con un amplio portafolio de productos y servicios, con descripción completa que desea exportar, entre los más destacados se encuentran los productos agrícolas, alimentos, textiles y confección, así como lo indica el catálogo de oferta exportable en Colombia B2B Marketplace de PROCOLOMBIA. 

        p.mb-3 Para la oferta exportable hay dos enfoques diferentes; uno es cuando la oferta está constituida por la capacidad ociosa y, por otra parte, cuando existan excedentes de producción que necesiten de un nuevo mercado para ser comercializados. 

        p.mb-3 La adquisición de la oferta colombiana por parte de los consumidores en el exterior, estará determinada principalmente por su ventaja competitiva, es decir, las características que la diferencian de otros y el precio de comercialización. 

        p.mb-3 Es muy importante tener claras las razones por las cuales se inicia un proceso de exportación. Entre las razones es posible encontrar las siguientes: diversificar mercados y no depender exclusivamente de la economía local, adquirir experiencia y alianzas con empresas extranjeras, o también la búsqueda de ventas en mayor volumen.  

      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
          img.my-3(src="@/assets/curso/images/tema4/img_1.svg", alt= "",style="width:400px; display:block; margin:0 auto;") 

    .row.mb-5(data-aos="fade-right")
      .col-lg-6.mb-5.mb-lg-0 
          img.my-3(src="@/assets/curso/images/tema4/img_2.svg", alt="", style="width:500px; display:block; margin:0 auto;")
      .col-lg-6.mb-5.mb-lg-0
          p.mb-5 Además, existen las siguientes razones:

          ul.lista-ul.p-4.mb-5
            li 
              i.fas.fa-angle-right
              | Ganar competitividad mediante la adquisición de tecnología, Know how y capacidad gerencial obtenidas en el mercado.
            li 
              i.fas.fa-angle-right
              |  Hacer alianzas estratégicas con empresas extranjeras para reducir costos, mejorar la eficiencia y diversificar productos.
            li 
              i.fas.fa-angle-right
              | Aumentar el volumen de ventas para utilizar la capacidad productiva de la empresa y crear economías de escala.
            li
              i.fas.fa-angle-right
              |  Aprovechar las ventajas comparativas y las oportunidades de mercados ampliados a través de acuerdos preferenciales.
            li 
              i.fas.fa-angle-right
              | Necesidad de incursionar y ser competitivos en el mercado mundial.
            li 
              i.fas.fa-angle-right
              |  Buscar mayor rentabilidad en los mercados internacionales y ampliar la expectativa de vida de la empresa.
      
      figcaption.mb-3 Fuente: PROCOLOMBIA, s.f.

      p.mb-5 Para el año 2019, de acuerdo con la información otorgada por el DANE- DIAN, Colombia aumentó su déficit en la balanza comercial a US$10.782 millones, esto debido a que, para tal año, las importaciones de Colombia fueron superiores a las exportaciones. Del mismo modo, los sectores con mayor cantidad de exportaciones fueron: 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.mb-5.mb-lg-0
          p Principales Sectores 2019

           .table_overflow.mb-5
            table(style="min-width:1042px;").tg
              thead
                tr.th-1
                  th.tg-0pky(rowspan='4',colspan='2')
                    span(style='background-color:#FD8F25') 
                    p.text-center.text-white <b>Exportaciones</b>
                    span(style='background-color:#D9D9D9') 
                  th.tg-0pky(colspan='2')
                    span(style='background-color:#FD8F25') 
                    p.text-center.text-white <b>Miles de USD</b>
                    span(style='background-color:#D9D9D9')
                  th.tg-0pky(colspan='2')
                    span(style='background-color:#FD8F25') 
                    p.text-center.text-white <b>Part. %</b>
                    span(style='background-color:#D9D9D9') 
              tbody
                tr
                  td.text-center.th-2(colspan='2') Petróleo
                  td.text-center.th-2(colspan='2') 12.979.699
                  td.text-center.th-2(colspan='2') 32,9
                tr
                  td.text-center(colspan='2').th-3  Carbón
                  td.text-center(colspan='2').th-3  5.668.329
                  td.text-center(colspan='2').th-3  14,4
                tr
                  td.text-center(colspan='2').th-2  Derivados del petróleo 
                  td.text-center(colspan='2').th-2  2.982.254
                  td.text-center(colspan='2').th-2  7,6
                tr
                  td.text-center(colspan='2').th-3  Café
                  td.text-center(colspan='2').th-3  2.272.874
                  td.text-center(colspan='2').th-3  5,8
                tr
                  td.text-center(colspan='2').th-2  Química básica 
                  td.text-center(colspan='2').th-2  2.206.013
                  td.text-center(colspan='2').th-2  5,6
                tr
                  td.text-center(colspan='2').th-3  Resto 
                  td.text-center(colspan='2').th-3  13.379.998
                  td.text-center(colspan='2').th-3  33,9
                tr
                  td.text-center(colspan='2').th-2  <b>Total exportado a Colombia (FBO)</b>
                  td.text-center(colspan='2').th-2  <b> 39.489.168 </b>
                  td.text-center(colspan='2').th-2  <b> 100,0 </b>

     



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'El precio de los insumos',
        texto:
          'Para producir el pan, los vendedores utilizan varios insumos: margarina, harina, polvo de hornear, azúcar, levadura, máquinas, la infraestructura que se requiere para producirlo y la mano de obra de los trabajadores para mezclar los ingredientes y operar las máquinas. <br> Cuando el precio de uno o más de estos insumos se incrementa, producir pan es menos rentable y las empresas ofrecen menos pan. Si los precios de los insumos aumentan de forma significativa, una empresa podrá cerrar y no ofrecer pan en absoluto. Entonces, la oferta de un bien es inversamente proporcional al precio de los insumos empleados para producir dicho bien.',
        imagen: require('@/assets/curso/images/tema3/img_9.svg'),
      },
      {
        titulo: 'Tecnología',
        texto:
          'La tecnología disponible para convertir los insumos en el producto final, para nuestro ejemplo, el pan, es otro factor determinante de la oferta. <br> Por ejemplo: la invención de la máquina para cortar los panes en diferentes formas y tamaños redujo la cantidad necesaria de mano de obra para producirlo. En otras palabras, las empresas invierten una vez en una maquinaria que les permitirá dejar de incurrir en el gasto permanente de mano de obra, disminuyendo los costos de producción, por ende, aumentar la oferta del pan. ',
        imagen: require('@/assets/curso/images/tema3/img_10.svg'),
      },
      {
        titulo: 'Expectativas',
        texto:
          'La cantidad de pan que una empresa ofrece hoy puede depender de sus expectativas sobre el futuro. Por ejemplo: si la empresa espera que el precio del pan aumente en el futuro, almacenará una parte de la materia prima e insumos necesarios, reduciendo la oferta actual del pan y teniendo existencias para la producción futura.',
        imagen: require('@/assets/curso/images/tema3/img_11.svg'),
      },
      {
        titulo: 'Número de vendedores',
        texto:
          'En este aspecto se revisa de manera colectiva el mercado, en el cual, si Bimbo o Ramo detiene su producción de pan para Colombia, la cantidad ofertada va a ser menor (Mankiw, 2017).',
        imagen: require('@/assets/curso/images/tema3/img_12.svg'),
      },
    ],
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
