<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 La planeación estratégica 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-5.mb-lg-0
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Es la etapa que forma parte del proceso administrativo mediante la cual se establecen directrices, se definen estrategias y se seleccionan las alternativas y rutas de acción, en función de objetivos y metas generales económicas, sociales y políticas, tomando en consideración los recursos reales y potenciales que permitan establecer un marco de referencia necesario para concretar programas y acciones específicas en tiempo y espacio, logrando una predicción del futuro para generar planes que puedan garantizar el éxito.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Rojas y Medina, 2011)
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
          img.my-3(src="@/assets/curso/images/tema5/img_1.svg", alt= "",style="width:400px; display:block; margin:0 auto;") 

      Separador 
      #t_5_2.titulo-segundo
        .h4 5.2 Ventajas de planear
      .row.mb-5(data-aos="fade-right")
        .col-lg-6.mb-5.mb-lg-0 
            img.my-3(src="@/assets/curso/images/tema5/img_2.svg", alt="", style="width:400px; display:block; margin:0 auto;")
        .col-lg-6.mb-5.mb-lg-0

            ul.lista-ul.p-4.mb-5
              li 
                i.fas.fa-angle-right
                | Anticiparse al futuro. 
              li
                i.fas.fa-angle-right
                |  Organizar y coordinar. 
              li 
                i.fas.fa-angle-right
                | Medir la habilidad y capacidad de los recursos disponibles. 
              li
                i.fas.fa-angle-right
                |  Identificar aspectos de relevancia para fijar planes de atención especial.
              li 
                i.fas.fa-angle-right
                | Permite un desempeño más eficiente de las personas.
              li 
                i.fas.fa-angle-right
                |  Facilita la solución de problemas.
              li 
                i.fas.fa-angle-right
                | Busca el logro de objetivos y metas de las empresas.
              li 
                i.fas.fa-angle-right
                | Disminuye la incertidumbre en la toma de decisiones gerenciales.

      Separador 
      #t_5_3.titulo-segundo
        .h4 5.3 Partes del proceso de planeación
      .row.mb-3(data-aos="fade-right")
        .col-lg-6.mb-5.mb-lg-0 
            img.my-3(src="@/assets/curso/images/tema5/img_3.svg", alt="", style="width:500px; display:block; margin:0 auto;")
        .col-lg-6.mb-5.mb-lg-0
            p.mb-3 Es la etapa que forma parte del proceso administrativo mediante la cual se establecen directrices, se definen estrategias y se seleccionan las alternativas y rutas de acción, en función de objetivos y metas generales económicas, sociales y políticas, tomando en consideración los recursos reales y potenciales que permitan establecer un marco de referencia necesario para concretar programas y acciones específicas en tiempo y espacio, logrando una predicción del futuro para generar planes que puedan garantizar el éxito (Rojas y Medina, 2011).

      Separador
      #t_5_4.titulo-segundo
        .h4 5.4 Planes y tipos

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-6.mb-5.mb-lg-0
          .bloque-texto-d.color-secundario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular <b> Los planes son el resultado del proceso de planeación y pueden definirse como diseños o esquemas detallados de lo que habrá de hacerse en el futuro, y las especificaciones necesarias para realizarlos. </b>
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              .h5.mb-0 Limas, 2012.p. 241
        .col-lg-6.mb-5.mb-lg-0 
            img.my-3(src="@/assets/curso/images/tema5/img_12.svg", alt="", style="width:400px; display:block; margin:0 auto;")
      h5.mb-3 Tipos de planes en una empresa

      p.mb-5 En una empresa, existen diferentes tipos y niveles de planes, todos ellos interrelacionados. Estos son de tres tipos: estratégicos, tácticos y operacionales. Véase figura 4.1. a continuación.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.mb-5.mb-lg-0
          img.my-3(src="@/assets/curso/images/tema5/img_4.svg") 
      figcaption.mb-5 Fuente: Limas, 2012,p 241

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.mb-5.mb-lg-0
          .bloque-texto-d.color-secundario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular Se hará el enfoque en los planes estratégicos que son los que establecen los lineamientos generales de la planeación, sirviendo de base a los demás planes (táctico y operativos), son diseñados por los miembros de mayor jerarquía de la empresa y su función consiste en regir la obtención, uso y disposición de los medios necesarios para alcanzar los objetivos generales de la organización, son a largo plazo (más de 5 años) y comprenden toda la empresa. 
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              .h5.mb-0 Limas, 2012

      h5.mb-3 Planeación táctica 

      p.mb-3 Se refiere a la planeación de un producto o de publicidad, los cuales los hacen y coordinan los directivos de nivel medio para orientarla hacia la distribución de los recursos, además se dan a mediano plazo (entre 1 y 5 años).

      h5.mb-3 Planeación operativa 

      p.mb-5 Para evitar riesgos en la toma de decisiones al ingresar a mercados internacionales se puede tener en cuenta lo siguiente: 

      .jumbotron 
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")

      Separador
      #t_5_5.titulo-segundo
        .h4 5.5  Planeación estratégica de mercados.

      p.mb-3 Es un documento escrito que define y especifica las acciones necesarias para alcanzar los objetivos empresariales. Se realiza para un bien o servicio, una marca o una línea de producto. Contiene los lineamientos a desarrollar por el área de marketing en un periodo futuro y que responde al plan general o corporativo (plan estratégico gerencial de la empresa). 

      p.mb-3 Este incluye dos niveles: el estratégico y el táctico. En el nivel estratégico se toman decisiones para cumplir con el objetivo de marketing, están relacionadas con la definición del mercado meta, posicionamiento, ventaja competitiva y demás decisiones con base en oportunidades de mercadeo. En el nivel táctico, se especifican acciones de marketing para concretar la estrategia de mercadeo, con base en las herramientas de producto, precio, plaza y promoción. (Limas, 2012, p. 246)

      p.mb-5 Este plan cuenta con la siguiente secuencia: 

      AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
        .row(titulo="Misión:")

          .col-md-6

            figure
              img(src="@/assets/curso/images/tema5/img_5.svg", alt= "",style="width:350px; display:block; margin:0 auto;")
          .col-md-6.mb-4.mb-md-0

            p.mb-3 Es la declaración formal y escrita que representa el credo y la identidad de la organización. Es la razón de ser de la empresa que condicionará sus actividades presentes y futuras; proporciona unidad, sentido de dirección y guía en la toma de decisiones.

            p.mb-3 Representa el que hacer de la entidad y responde a preguntas como ¿para qué existe? ¿cuál es su negocio? ¿cuáles son sus productos y mercados? ¿quiénes son sus clientes y con quienes están compitiendo? ¿cuáles son los deberes y derechos de sus proveedores? ¿cuáles son sus objetivos organizacionales? ¿cuál es su responsabilidad social y ambiental?

            p.mb-3 La misión debe ser objetiva, clara, posible, consultada, inspiradora, comprensiva y un reflejo del quehacer. (Palacios, 2009, p. 46) 

            p.mb-3 Definir la misión es fundamental porque encierra el que hacer de la empresa y quiénes son sus clientes actuales y potenciales.
          
          
        .row(titulo="Visión")
          .col-md-6
            figure
              img(src="@/assets/curso/images/tema5/img_6.svg", alt= "",style="width:350px; display:block; margin:0 auto;")        
          .col-md-6.mb-4.mb-md-0
              br
              br
              p Es lo que las empresas están proyectando alcanzar a futuro, indica la meta y debe ser expresada en términos de éxito que contagie a todos los que conforman la organización, lo cual se transmite a clientes y proveedores. Es el acto de proyectarse en el tiempo y el espacio. Debe ser amplia, retadora, posible y concreta. 
          

        .row(titulo="Políticas corporativas")
          .col-md-6
           
            figure
              img(src="@/assets/curso/images/tema5/img_7.svg",  alt= "",style="width:350px; display:block; margin:0 auto;")
          .col-md-6.mb-4.mb-md-0
              
              p.mb-3 Son principios o normas que la empresa se compromete a cumplir para dar solución a problemas y fijar restricciones en cuanto a la toma de decisiones; es importante ajustarlas permanentemente con el fin de que sean acordes a las tendencias del mercado, la economía y la industria. Para lograr una adecuada formulación de estrategias se debe: 

              ul.lista-ul.p-4.mb-5
                li 
                  i.fas.fa-angle-right
                  | Realizar un análisis de los aspectos estratégicos y los factores claves de éxito. 
                li 
                  i.fas.fa-angle-right
                  |  Apreciar los objetivos estratégicos y las estrategias. 
                li 
                  i.fas.fa-angle-right
                  | Valorar las normas, procedimientos y regulaciones relacionadas con la actividad de la organización.
                li
                  i.fas.fa-angle-right
                  |  Definir y aprobar las políticas. 
                
                p.mb-3 (Palacios, 2009, p. 60) 

        .row(titulo="Análisis de la situación actual ")
          .col-md-6
            figure
              img(src="@/assets/curso/images/tema5/img_8.svg",  alt= "",style="width:350px; display:block; margin:0 auto;")       
          .col-md-6.mb-4.mb-md-0
              
              p.mb-3 Es el insumo para realizar el plan de mercadeo, por lo que es el primer paso de la planeación, al momento de hacerlo, se debe efectuar un análisis interno y externo de la organización. 

              ul.lista-ul.p-4.mb-5
                li 
                  i.fas.fa-angle-right
                  | Económico, financiero y monetario (variables económicas, entes de control, entidades y servicios financieros 
                li 
                  i.fas.fa-angle-right
                  |  Social, cultural y demográfico. 
                li 
                  i.fas.fa-angle-right
                  | Gubernamental, político y legal
                li
                  i.fas.fa-angle-right
                  |  Infraestructura (obras físicas, transporte y servicios públicos), geográficos y ecológicos
                li 
                  i.fas.fa-angle-right
                  |  Tecnológico: equipos, maquinaria, nuevos materiales y Tecnologías de la Información y Comunicación.
                     
        .row(titulo="Análisis interno")
          .col-md-6
            br
            br
            figure
              img(src="@/assets/curso/images/tema5/img_9.svg",  alt= "",style="width:350px; display:block; margin:0 auto;")   
          .col-md-6.mb-4.mb-md-0
              
              p.mb-3 Se debe hacer descripción de la empresa para saber cuáles son sus características y en que consiste su valor diferencial para lo que es, es importante tener en cuenta lo siguiente:

              ul.lista-ul.p-4.mb-5
                li 
                  i.fas.fa-angle-right
                  | Mercados atendidos (geográficamente).
                li 
                  i.fas.fa-angle-right
                  |  Clientes o segmentos a atender.
                li 
                  i.fas.fa-angle-right
                  | Necesidades y expectativas a cubrir.
                li
                  i.fas.fa-angle-right
                  | Tecnologías utilizadas.
                li 
                  i.fas.fa-angle-right 
                  | Capacidad gerencial u organizacional.
                li 
                  i.fas.fa-angle-right
                  | Procesos estratégicos o misionales.

              p.mb-3 Después se hace análisis de recursos y potencial de la empresa identificando factores que afectan internamente a la empresa como son:

              ul.lista-ul.p-4.mb-5
                li 
                  i.fas.fa-angle-right
                  | Capacidad gerencial u organizacional
                li 
                  i.fas.fa-angle-right
                  |  Capacidad física y tecnológica.
                li 
                  i.fas.fa-angle-right
                  | Capacidad económica y financiera.
                li
                  i.fas.fa-angle-right
                  | Capacidad del talento humano.
                li 
                  i.fas.fa-angle-right 
                  | Capacidad competitiva.

        .row(titulo="Objetivos de marketing")
          .col-md-6
            br
            br
            br
            figure
              img(src="@/assets/curso/images/tema5/img_10.svg",  alt= "",style="width:350px; display:block; margin:0 auto;")   
          .col-md-6.mb-4.mb-md-0
              
            p.mb-3 El objetivo del marketing responde a la siguiente pregunta ¿que deseamos lograr como empresa en un periodo determinado?; y así desarrollar lo siguiente: aumentar su participación, Identificar oportunidades, posicionar su imagen, innovar o ser más competitiva.

            p.mb-3 Para formular los objetivos de mercadeo, es importante tener en cuenta lo siguiente: 

            ul.lista-ul.p-4.mb-5
              li 
                i.fas.fa-angle-right
                | Que sean acordes y conexos con la situación de la empresa (análisis DOFA).
              li 
                i.fas.fa-angle-right
                |  Que estén sujetos a los objetivos estratégicos.
              li 
                i.fas.fa-angle-right
                | Que sean expresados en términos cuantitativos (cuánto) y delimitados para ser alcanzados en un determinado plazo cuándo Los objetivos de mercadeo más usuales son: 
              li
                i.fas.fa-angle-right
                | Identificar oportunidades de crecimiento en las unidades estratégicas de negocio.
              li 
                i.fas.fa-angle-right 
                | Aumentar el volumen de ventas.
              li 
                i.fas.fa-angle-right
                | Posicionar la imagen de un producto o marca.
              li 
                i.fas.fa-angle-right
                | Introducir un nuevo producto al mercado.
              li
                i.fas.fa-angle-right
                | Potenciar un producto en declive.
              li 
                i.fas.fa-angle-right 
                | Establecer procesos de innovación.
              li 
                i.fas.fa-angle-right
                | Posicionamiento en el mercado.
              li 
                i.fas.fa-angle-right
                | Mejorar la competitividad.

        .row(titulo="Formulación de estrategia")
          .col-md-6
            figure
              img(src="@/assets/curso/images/tema5/img_11.svg",  alt= "",style="width:350px; display:block; margin:0 auto;")   
          .col-md-6.mb-4.mb-md-0.mb-5
              br
              br
              p “El conjunto de objetivos, planes, políticas y programas que define el campo de acción de los negocios, los proveedores y la organización humana, tecnológica y económica que requiere una empresa para satisfacer a clientes, accionistas y empleados con ventajas competitivas”. Palacios (2009).







</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Capacidad física:',
        texto:
          'Corresponde a lo que la empresa está en capacidad de producir, debido a que la capacidad exportable corresponde al excedente que queda después de atender el mercado interno.',
        icono: require('@/assets/curso/images/tema5/ico_4.svg'),
      },
      {
        titulo: 'Capacidad administrativa:',
        texto:
          'Es el talento humano encargado de lo relacionado a las operaciones del comercio internacional de la empresa.',
        icono: require('@/assets/curso/images/tema5/ico_5.svg'),
      },
      {
        titulo: 'Capacidad económica:',
        texto:
          'Es el presupuesto asignado a la operación de comercio internacional que pueda responder a los requerimientos de la operación y a las contingencias que se puedan presentar durante esta.',
        icono: require('@/assets/curso/images/tema5/ico_6.svg'),
      },
      {
        titulo: 'Conciencia exportadora',
        texto:
          'Esta implica que todos los integrantes de la organización estén comprometidos con el rol que desempeñan y cómo este influye en la calidad de la operación internacional y que los miembros del departamento de comercio internacional estén enfocados en el logro de los objetivos.',
        icono: require('@/assets/curso/images/tema5/ico_7.svg'),
      },
      {
        titulo: 'Preselección de mercados:',
        texto:
          'Evaluar el riesgo y las condiciones económicas del país al que desea ingresar. ',
        icono: require('@/assets/curso/images/tema5/ico_8.svg'),
      },
      {
        titulo: 'Información general del mercado',
        texto:
          'Este aspecto incluye recoger toda la información del mercado seleccionado, para hacerlo puede acudir a diferentes fuentes tales como: internet, publicaciones, reportajes, periódicos, residentes del país y embajadas, entre otras.',
        icono: require('@/assets/curso/images/tema5/ico_9.svg'),
      },
      {
        titulo: 'Condiciones de acceso al mercado',
        texto:
          'Investigar los medios y los modos de transporte, teniendo en cuenta operatividad y costos para definir cuál es el más adecuado en relación al producto.',
        icono: require('@/assets/curso/images/tema5/ico_10.svg'),
      },
      {
        titulo: 'Prácticas comerciales',
        texto:
          'Definir cómo se va a manejar el producto o servicio en el país seleccionado, si se va a utilizar fuerza de ventas propia u otro mecanismo de distribución y ventas.',
        icono: require('@/assets/curso/images/tema5/ico_11.svg'),
      },
      {
        titulo: 'Adecuaciones del producto',
        texto:
          'Es importante respetar la cultura y las costumbres del país objetivo y con base en ello, definir si el producto debe adaptarse o modificarse, o si se puede manejar como un producto global.',
        icono: require('@/assets/curso/images/tema5/ico_12.svg'),
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
