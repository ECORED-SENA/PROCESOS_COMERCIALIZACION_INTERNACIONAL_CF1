<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Sectores de la economía 


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-5.mb-lg-0
        .bloque-texto-b.color-custom-1.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Al realizar un análisis de la economía de un país, es posible observar que algunos sectores se desarrollan más que otros; identificar cuáles son los sectores de la economía que contribuyen al crecimiento de esta o los más atrasados, le permiten dimensionar y planear las políticas económicas y sociales de un país.<br> Conocer el comportamiento de los tres sectores económicos en que se ha dividido la producción:  las fuentes primarias como los recursos naturales, renovables o no renovables; el sector industrial y el sector de prestación de servicios, son indispensables para examinar el desarrollo económico de un país. 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Meléndez, 2013
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
          img.my-3(src="@/assets/curso/images/tema2/img_1_1.svg", alt= "",style="width:400px; display:block; margin:0 auto;") 
    Separador 
    #t_2_1.titulo-segundo
      .h4 2.1 Teorías económicas
    
    p.mb-3 La actividad económica de un país se encuentra dividida por conjuntos de actividades productivas o comerciales, cada uno de estos conjuntos o sectores, se agrupan de acuerdo a características comunes que guardan relación entre sí. Su división se realiza de acuerdo a los procesos de producción que ocurren al interior de cada uno de estos. 

    p.mb-3 La teoría económica desarrollada por Colin Clark y Jean Fourastié, divide las economías en tres sectores, según esta teoría “el principal objeto de la actividad de una economía varía desde el primario, a través del secundario hasta llegar al sector terciario” (Fourastié, 1956).

    p.mb-3 Fourastié también habla sobre el aumento de la calidad de vida, la seguridad social, el florecimiento de la educación y la cultura, una mayor cualificación, la humanización del trabajo y evitar el desempleo. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11.mb-5.mb-lg-0
        .bloque-texto-b.color-custom-1.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular <b>Los países con una baja renta per cápita están en un estadio temprano de desarrollo; la mayor parte de sus ingresos nacionales son a base de la producción del sector primario. Los países con un estadio más avanzado de desarrollo, con ingresos nacionales intermedios, obtienen sus ingresos del sector secundario principalmente. En los países altamente desarrollados con elevados ingresos, el sector terciario domina las salidas totales de la economía </b>
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Fourastié, 1956

    Separador

    #t_2_2.titulo-segundo
      .h2.mb-3 2.2 Distribución de los sectores económicos

    .row.justify-content-center.align-items-center.mb-3
        .col-lg-12.mb-5.mb-lg-8.fondo-2
          img(src="@/assets/curso/images/tema2/img_2.svg", alt="", style="width:800px; display:block; margin:0 auto;")
    Separador 
   
    #t_2_3.titulo-segundo
      .h4 2.3 Clasificación de los sectores económicos
    .row.mb-5
      p.mb-5 Según estudios económicos presentados por la subgerencia cultural del Banco de la República los sectores se clasifican según el tipo de productos o servicios que ofrecen en:
      br
      SlyderB.mb-5(:datos="datosSlyder")
      figcaption Fuente: Subgerencia Cultural del Banco de la República (2005)
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-5.mb-lg-0
         
        p.mb-3 La minería y otros sectores extractivos, a pesar de ser actividades cuya definición corresponde con la obtención de materias primas, no suelen considerarse como parte del sector primario para efectos de contabilidad nacional y se engloban con el sector energético y otros sectores industriales con los que comparten características (como la industria pesada). Por el contrario, los procesos industriales que se limitan a empacar, preparar o purificar los recursos naturales suelen ser considerados parte del sector primario, especialmente si dicho producto es difícil de ser transportado en condiciones normales a grandes distancias. 

        p.mb-3 La industria agroalimentaria está tan estrechamente ligada al sector primario que se la suele considerar conjuntamente con éste en muchas cuestiones. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-5.mb-lg-0
        .bloque-texto-b.color-custom-1.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular <b>El dominio del sector primario, tanto si se reduce al sector agrario como si se considera la totalidad de los sectores extractivos, suele ser una característica definitoria de la economía de los países subdesarrollados</b>
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Rouco, 1997

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up-right")
      .col-lg-6.mb-5.mb-lg-0 
          img.my-3(src="@/assets/curso/images/tema2/img_6_1.svg", alt="", style="width:400px; display:block; margin:0 auto;")
      .col-lg-6.mb-5.mb-lg-0
        p.mb-3 Colombia cuenta con ventajas competitivas y comparativas que lo sitúan con condiciones privilegiadas, posibilitando la negociación internacional a lo largo y ancho de los sectores, pero para mantener esta posición se requiere de profesionales, técnicos y tecnólogos visionarios e innovadores que puedan fortalecer las cualidades que tiene la nación.
        p.mb-3 En Colombia existe una alianza de carácter público-privado denominada Programa de Transformación Productiva para desarrollar Sectores de Clase Mundial, lo que permite enfocar los esfuerzos por parte de las empresas y las personas, todo a partir de varios estudios técnicos preliminares con potencial exportador y de inversión, en donde se concentran los mayores esfuerzos institucionales, corporativos y gubernamentales, mediante la implementación de incentivos en materia financiera y tributaria, entre otras (Proexport Colombia, 2013).
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="flip-left")
      .col-12
        .bloque-texto-a.color-custom.p-3.mb-5
          .row.m-4.align-items-center.justify-content-between
              .col-lg-5.mb-4.mb-lg-12
                  img(src="@/assets/curso/images/tema2/img_7_1.svg" alt="", style="width:450px; display:block; margin:0 auto;")
              .col-lg-7
                .bloque-texto-a__texto.p-4
                  .col-sm.mt-3   
                    p.mb-3 El sector agroindustrial es un gran jugador en la economía nacional, generando cerca del 6,2% del PIB (Producto Interno Bruto). En materia de exportaciones, se presentó un crecimiento del 32,2% en los últimos cinco años.
   
    p.mb-5 El PIB agropecuario creció 5,2% entre 2012 y 2013. 
    
    .row.mb-5(data-aos="fade-left")
      .col-lg-6.mb-5.mb-lg-0
         
        ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Colombia es uno de los países latinoamericanos con mayores tasas de precipitación anual y el cuarto a nivel mundial con mayor disponibilidad de agua. 
            li 
              i.fas.fa-angle-right
              |  Al estar ubicado en el Trópico cuenta con diversidad de pisos térmicos con alturas sobre el nivel del mar que van desde los 0 metros sobre el nivel del mar (m.s.n.m) (> 24 C°) hasta los 4.000 m.s.n.m (< 6 C°). (ProColombia, 2012).

        .col-lg-6.mb-5.mb-lg-0.mb-5
        .bloque-texto-b.color-custom-1.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular <b>En el caso de la industria manufacturera, si bien aún se observa cierto rezago frente al total del PIB, es importante anotar que en esta actividad comienza a observarse una leve recuperación en sus principales indicadores, especialmente los tendenciales </b>
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 RCN Radio, 2015
        br
        p.mb-3 La predominancia del sector terciario en el porcentaje de participación frente a los demás sectores denota mayor desarrollo y a esto se le denomina proceso de tercerización. 
      .col-lg-6.mb-5.mb-lg-0 
          img.my-3(src="@/assets/curso/images/tema2/img_8_1.svg", alt="", style="width:500px; display:block; margin:0 auto;")
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-md-8.col-lg-8.col-xl-10
          .cajon.color-custom.p-4.mb-4
            p.mb-0 Por medio del Programa de Transformación Productiva, iniciativa liderada por el Gobierno Nacional, se busca desarrollar sectores de clase mundial dentro de los cuales se encuentran subsectores de servicios tales como <i>software</i> y servicios de Tecnologías de la Información (TI), tercerización de procesos de negocio, energía eléctrica, bienes y servicios conexos. Más del 30% del PIB nacional proviene de actividades de servicios (ProColombia, s.f.).

      p.mb-3 Además de los tres sectores clásicos, en los últimos tiempos y gracias al desarrollo tecnológico y gerencial, ha tomado fuerza el concepto de dos sectores adicionales:

      AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Sector cuaternario:")
          .col-md-6
            figure
              img(src="@/assets/curso/images/tema2/img_9.svg", alt="", style="width:300px; display:block; margin:0 auto;")
            

          .col-md-6.mb-4.mb-md-0
            p Aglutina actividades empresariales y políticas con un alto grado de especialización y relacionadas con la gestión y distribución (compra, venta y alquiler) de la información, el bien económico fundamental. La sociedad se centraba antes en actividades materiales de tipo industrial y ahora se aglutina en torno a tareas que tienen que ver con el valor intangible de la información, tales como la dirección, la alta investigación, las nuevas tecnologías y la toma de decisiones. Se dice que ha surgido una nueva sociedad en el nuevo milenio, la sociedad de la información (cuyos antecedentes se encuentran en el concepto de Daniel Bell sobre la sociedad postindustrial) o la sociedad del conocimiento, que plasma la revolución de la información y tecnológica que se vive en el sistema del mundo actual, tal vez de similares proporciones a la industrial de finales del siglo XVIII. 
          .row.justify-content-center.align-items-center    
            .col-md-12.mb-4.mb-md-0
              p.mb-3 Se consideran dentro del sector cuaternario las empresas que tradicionalmente se integran en el sector industrial, pero que están ligadas con las tecnologías de la información, como los fabricantes de ordenadores, programas de ordenador y nuevas tecnologías como los CAD/CAM por sus siglas en inglés <i>Computer Aided Design / Computer Aided Manufacturing (diseño asistido por ordenador / fabricación asistida por computadora); SIG-Geographic Information System</i> (Sistema de información geográfica) y los portales de internet. Así mismo, las actividades relacionadas con las finanzas (cuestiones bancarias y bursátiles, seguros y grandes negocios mercantiles, entre otros)].

              p También se consideran dentro del cuaternario ciertos trabajos ligados a la información, como el realizado en las editoriales, los medios de comunicación, las bibliotecas, las consultorías y hasta las empresas telefónicas y el teletrabajo.

        .row(titulo="Sector quinario:")
          .col-md-6
            figure
              img(src="@/assets/curso/images/tema2/img_10.svg", alt="", style="width:300px; display:block; margin:0 auto;")
            
          .col-md-6.mb-4.mb-md-0
              br
              br
              p Algunos autores ya hablan de un sector quinario, relativo a las actividades relacionadas con la cultura, la educación, el arte y el entretenimiento. Sin embargo, las actividades incluidas en este sector varían de unos autores a otros, incluyendo en ocasiones actividades relacionadas con la sanidad. (Fernández, Llorente y Pérez, 2007, p. 84)
    Separador  
    #t_2_4.titulo-segundo
      .h4 2.4 Subsectores económicos

    p.mb-5 Los sectores económicos se subdividen a su vez en una clasificación estandarizada internacional bastante específica, por ejemplo, en la rama de la industria manufacturera que pertenece al sector secundario, se encuentra la industria del vidrio y del calzado, entre otros.

    .row.justify-content-center.align-items-center   
      .col-md-3.mb-4.mb-md-0.d-flex
        .tarjeta_Sp-13.p-4
          p.text-center.small.text Acuícola, biocombustibles, cacao, chocolatería, carnico, forestal, hortofrutícola y lácteo. 
  
      .col-md-3.mb-4.mb-md-0.d-flex
        .tarjeta_Sp-14.p-4
          p.text-center.small.text Manufactura de alimentos y textiles  (prendas de vestir y cuero), fabricación de productos minerales y otros, industria de madera (corcho y papel) y fabricación de automóviles y accesorios.  

      .col-md-3.mb-4.mb-md-0.d-flex
        .tarjeta_Sp-15.p-4
          p.text-center.small.text Construcción, electricidad, gas y vapor, comercio, transporte, almacenaje y comunicaciones. 
          p.text-center.small.text Servicios financieros, hotel, restaurante y similares. Turismo, actividades deportivas y esparcimiento, <i>software</i> u otros. 
    
    Separador 
    #t_2_5.titulo-segundo
      .h4  2.5 Crecimiento económico colombiano
    
    p.mb-5 A continuación, encuentra un análisis comparativo del crecimiento económico comprendido entre el 2018 al 2019: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12
        .table_overflow
          table(style="min-width:1042px;").tg
            thead
              tr.th-1
                th.tg-0pky(rowspan='4',colspan='8')
                  span(style='background-color:#FD8F25') 
                  p.text-center.text-white <b>PIB POR ACTIVIDAD ECONÓMICA - VARIACIÓN ANUAL (%)</b>
                  span(style='background-color:#D9D9D9') 
                th.tg-0pky(colspan='5').th-4
                  span(style='background-color:#FD8F25') 
                  p.text-center.text-white <b>TRIMESTRES</b>
                  span(style='background-color:#D9D9D9') 
              tr.th-1
                th.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:white') <b>2019-I</b>
                  span(style='background-color:#D9D9D9') 
                th.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:white') <b>2019-II</b>
                  span(style='background-color:#D9D9D9') 
                th.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:white') <b>2019-III</b>
                  span(style='background-color:#D9D9D9') 
                th.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:white') <b>2019-IV</b>
                  span(style='background-color:#D9D9D9') 
                th.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:white') <b>Total 2019</b>
                  span(style='background-color:#D9D9D9')      
            tbody
              tr.th-2
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Agricultura, ganadería, caza, silvicultura y pesca
                  span(style='background-color:#D9D9D9') 
               
                
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,8
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,0
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,2
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,0
                  span(style='background-color:#D9D9D9')  
              tr.th-3
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Explotación de minas y canteras
                  span(style='background-color:#D9D9D9')  
              
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,5
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 0,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,0
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,0
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,1
                  br
                  span(style='background-color:#D9D9D9')   
              tr.th-2
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Industrias manufactureras
                  span(style='background-color:#D9D9D9')  
               
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 0,6
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,5
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,6
                  span(style='background-color:#D9D9D9')   
              tr.th-3
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Electricidad,gas,vapor y aire acondicionado, Distribución de agua, evacuación y tratamiento de aguas residuales, gestión desechos y actividades de saneamiento
                  span(style='background-color:#D9D9D9')  
               
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,1
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,6
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,8
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,7
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,8
                  span(style='background-color:#D9D9D9')
              tr.th-2
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Construcción
                  span(style='background-color:#D9D9D9')  
                
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:red') -3,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,2
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:red') -2,7
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:red') -0,1
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:red') -1,3
                  span(style='background-color:#D9D9D9')
              tr.th-3
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Comercio al por mayor y al por menor; Reparación de vehiculos automotores y motociletas; Transporte y almacenamiento; Alojamiento y servicios de comida
                  span(style='background-color:#D9D9D9')  
                 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,1
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,7
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 5,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,7
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,9
                  span(style='background-color:#D9D9D9')
              tr.th-2
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Información y comunicaciones 
                  span(style='background-color:#D9D9D9')  
                
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,3
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:red') -0,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 0,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 1,7
                  span(style='background-color:#D9D9D9')
              tr.th-3
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Actividades financieras y de seguros 
                  span(style='background-color:#D9D9D9')  
                
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 5,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 8,0
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,6
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 5,7
                  span(style='background-color:#D9D9D9')
              tr.th-2
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Actividades inmobiliarias
                  span(style='background-color:#D9D9D9')  
                
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,0
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,1
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,0
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,8
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,0
                  span(style='background-color:#D9D9D9')
              tr.th-3
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Actividades profesionales, científicas y técnicas; Actividades de servicio administrativo y de apoyo
                  span(style='background-color:#D9D9D9')  
                
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,6
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,1
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,6
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,7
                  span(style='background-color:#D9D9D9')
              tr.th-2
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Administración pública y defensa; planes de seguridad social de afiliación obligatoria; Educación; Actividades de atención de la salud humana y de servicios sociales 
                  span(style='background-color:#D9D9D9')  
               
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,2
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 5,3
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 5,1
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,9
                  span(style='background-color:#D9D9D9')
              tr.th-3
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Actividades artisticas, de entrenamiento y recreación y otras actividades de servicios; Actividades de los hogares individuales en calidad de empleadores; Actividdes no diferenciadas de los hogares individuales como productores de bienes y servicios para uso propio
                  span(style='background-color:#D9D9D9')  
               
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,1
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,3
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,9
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 2,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,4
                  span(style='background-color:#D9D9D9')
              tr.th-2
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') <b>Valor agregado bruto</b>
                  span(style='background-color:#D9D9D9')  
               
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,2
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,2
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,3
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,2
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,2
                  span(style='background-color:#D9D9D9')
              tr.th-3
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') Impuestos menos subvenciones sobre los productos
                  span(style='background-color:#D9D9D9')  
               
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,1
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 5,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 5,3
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 4,6
                  span(style='background-color:#D9D9D9')
              tr.th-2
                td.text-center.tg-0pky(colspan='8')
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') <b>PRODUCTO INTERNO BRUTO</b>
                  span(style='background-color:#D9D9D9')  
               
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,2
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,3
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,5
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,4
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0pky
                  span(style='background-color:#D9D9D9') 
                  br
                  span(style='color:black') 3,3
                  span(style='background-color:#D9D9D9')
      
      .row.justify-content-center.align-items-center.my-5
        br
        SlyderE.slyder-color-5
          .row.p-4
            .col-md-6.mb-4.mb-md-0
              br
              p Al analizar los resultados del Producto Interno Bruto (PIB) de 2019, podemos afirmar que la economía del país registró un crecimiento de 3,3 por ciento, lo que significa una notable aceleración frente al PIB de 2,5 por ciento valorado en 2018. Así mismo, es de destacar un importante crecimiento en la economía colombiana en el tercer y cuarto trimestre de 2019, con registros del 3,5 y 3,4 por ciento, respectivamente.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/img_11.svg',alt= "",style="width:300px; display:block; margin:0 auto;")
          .row.p-4
            .col-md-6.mb-4.mb-md-0
              br
              p Dentro de las actividades económicas de mayor crecimiento durante el 2019 podemos resaltar las actividades financieras que pasaron de un crecimiento del 3,6 por ciento en 2018 a un 5,7 por ciento en 2019 lo que representa una variación del 2,1 por ciento con respecto al 2018, también tenemos el comercio al por mayor y al por menor; reparación de automotores y motocicletas; transporte y almacenamiento; alojamiento y servicios de comida que presentaron un crecimiento del 2,7 por ciento en 2018 y del 4,9 por ciento en 2019.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/img_12.svg',alt= "",style="width:300px; display:block; margin:0 auto;")
          .row.p-4
            .col-md-6.mb-4.mb-md-0
              br
              p Conviene mencionar aquellas actividades económicas que presentaron un crecimiento inferior con respecto al comportamiento presentado en 2018, dichas actividades son las industrias de manufactura que pasaron de un crecimiento del 1,8 por ciento en 2018 a 1,6 por ciento en 2019, también está el sector de la información y las comunicaciones que en 2018 logro crecer un 2,9 por ciento y en 2019 apenas logro un crecimiento del 1,7 por ciento.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/img_13.svg',alt= "",style="width:300px; display:block; margin:0 auto;")
            
          .row.p-4
            .col-md-6.mb-4.mb-md-0
              br
              p Es de resaltar la fuerte aceleración experimentada por el sector de la explotación de minas y canteras que paso de un crecimiento negativo del 1,9 por ciento en 2018 a un crecimiento del 2,1 por ciento en 2019, resulta preocupante el comportamiento del sector de la construcción el cual presenta un comportamiento negativo que va en picada pasando de un crecimiento negativo del 0,4 por ciento en 2018 a un inquietante crecimiento negativo del 1,3 por ciento en 2019.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/img_14.svg',alt= "",style="width:300px; display:block; margin:0 auto;")

      figcaption Fuente: (ANDI)
    

   








    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: ' Sector primario o agropecuario',
        texto:
          'Obtiene el producto de sus actividades directamente de la naturaleza, sin ningún proceso de transformación. La agricultura, la ganadería, la silvicultura, la caza y la pesca.',
        imagen: require('@/assets/curso/images/tema2/img_3_1.png'),
      },
      {
        titulo: 'Sector secundario o industrial ',
        texto:
          'Comprende todas las actividades económicas de un país relacionadas con la transformación industrial de los alimentos y otros tipos de bienes o mercancías, los cuales se utilizan como base para la fabricación de nuevos productos. <br> • Extracción minera y de petróleo. <br> • Envasado de legumbres y frutas, embotellado de refrescos, fabricación de abonos y fertilizantes, vehículos, cementos y aparatos electrodomésticos, entre otros.',
        imagen: require('@/assets/curso/images/tema2/img_4_1.png'),
      },
      {
        titulo: 'Sector terciario o de servicios ',
        texto:
          'Este sector se enfoca en los intangibles o servicios. <br> Hotelería y turismo, espectáculos, banca, comunicaciones, comercio, <i>software</i>, servicios públicos, salud, tercerización y servicios BPO.',
        imagen: require('@/assets/curso/images/tema2/img_5_1.png'),
      },
    ],
    datosSlyder1: [
      {
        titulo: '',
        texto:
          'Al analizar los resultados del Producto Interno Bruto (PIB) de 2019, podemos afirmar que la economía del país registró un crecimiento de 3,3 por ciento, lo que significa una notable aceleración frente al PIB de 2,5 por ciento valorado en 2018. Así mismo, es de destacar un importante crecimiento en la economía colombiana en el tercer y cuarto trimestre de 2019, con registros del 3,5 y 3,4 por ciento, respectivamente.',
        imagen: require('@/assets/curso/images/tema2/img_11.svg'),
      },
      {
        titulo: '',
        texto:
          'Dentro de las actividades económicas de mayor crecimiento durante el 2019 podemos resaltar las actividades financieras que pasaron de un crecimiento del 3,6 por ciento en 2018 a un 5,7 por ciento en 2019 lo que representa una variación del 2,1 por ciento con respecto al 2018, también tenemos el comercio al por mayor y al por menor; reparación de automotores y motocicletas; transporte y almacenamiento; alojamiento y servicios de comida que presentaron un crecimiento del 2,7 por ciento en 2018 y del 4,9 por ciento en 2019.',
        imagen: require('@/assets/curso/images/tema2/img_12.svg'),
      },
      {
        titulo: '',
        texto:
          'Conviene mencionar aquellas actividades económicas que presentaron un crecimiento inferior con respecto al comportamiento presentado en 2018, dichas actividades son las industrias de manufactura que pasaron de un crecimiento del 1,8 por ciento en 2018 a 1,6 por ciento en 2019, también está el sector de la información y las comunicaciones que en 2018 logro crecer un 2,9 por ciento y en 2019 apenas logro un crecimiento del 1,7 por ciento.',
        imagen: require('@/assets/curso/images/tema2/img_13.svg'),
      },
      {
        titulo: '',
        texto:
          'Es de resaltar la fuerte aceleración experimentada por el sector de la explotación de minas y canteras que paso de un crecimiento negativo del 1,9 por ciento en 2018 a un crecimiento del 2,1 por ciento en 2019, resulta preocupante el comportamiento del sector de la construcción el cual presenta un comportamiento negativo que va en picada pasando de un crecimiento negativo del 0,4 por ciento en 2018 a un inquietante crecimiento negativo del 1,3 por ciento en 2019.',
        imagen: require('@/assets/curso/images/tema2/img_14.svg'),
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
