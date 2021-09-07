export default {
  global: {
    componenteFormativo: 'La oferta exportable de bienes y servicios',
    descripcionCurso:
      'Las empresas colombianas se enfrentan a diferentes cambios y retos que afectan directa e indirectamente la dinámica de sus operaciones, en el momento en el cual desean incursionar en mercados internacionales.<br> <br> Estos retos hacen que las mismas busquen soluciones basadas en el estudio y conocimiento de los diferentes sectores de la economía nacional para lograr localizar, en primer lugar, la oferta exportable y posteriormente, las posibilidades de éxito o fracaso a nivel internacional',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Qué es el mercadeo?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Función',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Clasificación de los mercados',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sectores de la economía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Teorías económicas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Distribución de los sectores económicos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Clasificación de los sectores económicos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Subsectores económicos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Crecimiento económico colombiano',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La oferta exportable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción al mercado internacional.',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '¿Qué es la oferta exportable?',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Desplazamientos de la curva de oferta',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Oferta exportable de Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Introducción',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Regiones económicas de Colombia',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Mapa oferta exportable por regiones económicas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'La planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '¿Qué es planear?',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Ventajas de planear',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Partes del proceso de planeación',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Planes y tipos',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Planeación estratégica de mercados.',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'ANDI. (2016). ANDI MÁS PAÍS. ',
      link:
        'http://www.andi.com.co/Home/Pagina/3-desarrollo-economico-y-competitividad',
    },
    {
      referencia: 'Banco de la República. (2005). Sectores económicos. ',
      link: 'http://www.banrepcultural.org  ',
    },
    {
      referencia:
        'Barón, J. (2002). Las regiones económicas de Colombia: un análisis de clusters ',
      link: 'http://www.banrep.gov.co/ ',
    },
    {
      referencia:
        'Balaguer, S. L. (2013). LA IMPORTANCIA DE LA DIRECCIÓN ESTRATEGICA EN LA EMPRESA,p1-16. ',
      Descarga:
        'https://www.3ciencias.com/wp-content/uploads/2013/04/4.Importancia-de-la-direcci%C3%B3n-estrat%C3%A9gica-en-la-empresa.pdf',
    },
    {
      referencia:
        'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. ',
    },
    {
      referencia:
        'Cerviño, J. (2014). Marketing Internacional, Nuevas perspectivas para un mercado globalizado. ProQuest Ebook Central ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co ',
    },
    {
      referencia: 'Colombian Trade. (s.f.).Colombina. (2008). Colombina. ',
      link: 'https://www.colombina.com',
    },
    {
      referencia: 'Corvo, H. S. (s.f.). Lifeder ',
      link: 'https://www.lifeder.com/elasticidad-oferta/',
    },
    {
      referencia:
        'Dimitri, C. R., & Rodríguez, S. Á. (2009). Planeación estratégica. ProQuest Ebook Central ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Earle C. Traynham (2018). Chapter 5, Elasticities of Demand and Supply. University of North Florida. ',
      link: 'https://unf.edu ',
    },
    {
      referencia: 'Economics Online. (2018). Price elasticity of supply ',
      link: 'https://economicsonline.co.uk ',
    },
    {
      referencia:
        'Esteban, T. Á. (2014). Principios de marketing (3a. ed.). ProQuest Ebook Central ',
      Descarga: ' https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Fernández, C., Llorente, A. y Pérez, E. (2007). Economía. Madrid, España: EDITEX S.A. ',
    },
    {
      referencia:
        'Fernández, R. A. (2005). Creatividad e innovación en empresas y organizaciones: Técnicas para la resolución de problemas. ProQuest Ebook Central ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co ',
    },
    {
      referencia:
        'Fernández, R. (2009). Segmentación de Mercados . (3a. ed.). McGraw-Hill Interamericana. ',
    },
    {
      referencia:
        'Fourastié, J. (1956). La gran esperanza del siglo XX 1956. Barcelona, España:Luis Miracle. Geoff Riley (2018). Explaining Price Elasticity of Supply. Tomado de: tutor2u.net. ',
    },
    {
      referencia:
        'González, J. M. (2016). Economía de la Empresa. Editorial Algaida. ',
    },
    {
      referencia:
        'Guerras, N. (2018) El análisis del Entorno. [Video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=xgr7T3WMX6g',
    },
    {
      referencia:
        'Khan Academy. (2015). Khan Academy. https://es.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium/supply-curve-tutorial/v/law-of-supplyLEGISCOMEX. (s.f.). ',
      link:
        'https://www-legiscomex-com.bdigital.sena.edu.co/informacion-regimen-de-aduanas-colombiano/pasos-para-exportar-informacion-completa',
    },
    {
      referencia: 'LEGISCOMEX. (s.f.). LEGISCOMEX. ',
      link:
        ' https://www-legiscomex-com.bdigital.sena.edu.co/informacion-regimen-de-aduanas-colombiano/pasos-para-exportar-informacion-completa',
    },
    {
      referencia:
        'Limas, S. S. J. (2012). Marketing empresarial: Dirección como estrategia competitiva. ProQuest Ebook Central  ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Mankiw, G. (2017). Principios de economía. (7a. ed.) Cengage. Página: 75. Tomado de  ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3752&pg=108 ',
    },
    {
      referencia:
        'Martínez, A. M., Torres Vargas, A. C., & Jaramillo Mejía, M. (2016). El comportamiento del mercado - SENA Martínez, S. J. M., & Jiménez, E. (2001). Marketing. ProQuest Ebook Central ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Meléndez, I. (2016). Cómo contribuyen los sectores económicos a la producción nacional de Colombia. Bogotá, Colombia. ',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2020). Estudios Económicos. Oficina de Estudios Económicos. Sector Comercio. ',
      link:
        'https://www.mincit.gov.co/estudios-economicos/perfiles-economicos-por-departamentos',
    },
    {
      referencia:
        'Earle C. Traynham (2018). Chapter 5, Elasticities of Demand and Supply. University of North Florida. ',
      link: 'https://unf.edu ',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2019). INFORME SOBRE LOS ACUERDOS COMERCIALES VIGENTES EN COLOMBIA. Sector Comercio. ',
      link:
        'https://www.mincit.gov.co/normatividad/docs/ley-1868-informe-2019.aspx#page=100&zoom=auto,-99,286. ',
    },
    {
      referencia:
        'Murcia, C. H. H. (2011). Creatividad e innovación para el desarrollo empresarial. ProQuest Ebook Central. ',
      Descarga: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Palacios, L. (2010). Dirección estratégica. Bogotá, Colombia: D´Vinni Impresos. ',
    },
    {
      referencia: 'Pettinge, T. (2016). economicshelp.org ',
      link: 'https://economicshelp.org',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Ediciones de la U.Página: 35. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=35',
    },
    {
      referencia:
        'PROCOLOMBIA. (s.f.). PROCOLOMBIA exportaciones, turismo inversión marca país. ',
      link: 'https://www.colombiatrade.com.co/como-exportar',
    },
    {
      referencia:
        'RCN Radio. (2015). La industria colombiana crecerá 3,5% en 2016, estima la Andi. Consultado el 12 de julio de 2016, en ',
      Descarga: 'http://www.rcnradio.com',
    },
    {
      referencia: 'Riley, G. (2018). Explaining Price Elasticity of Supply. ',
    },
    {
      referencia:
        'Rojas, L. & Medina, M.  (2011). Planeación estratégica: Fundamentos y casos. ProQuest Ebook Central ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Scheeider, F. L., Kimbrell, G., & Woloszyk, C. A. (2001). Mercadeo en el siglo xxi. ProQuest Ebook central ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Tejvan Pettinger (2016). Price Elasticity of Supply. Economics Help ',
      link: 'https://conomicshelp.org',
    },
    {
      referencia:
        'Vera, N. (2015) Microentorno y Macroentorno del marketing. [Video]. Youtube.  ',
      link: 'https://www.youtube.com/watch?v=nCItrbLt6w8',
    },
    {
      referencia: 'Wantuby. (2015) Plan de  marketing. [Video]. Youtube. ',
      link: 'https://www.youtube.com/watch?v=uzxqP_kwhGg',
    },
  ],
  glosario: [
    {
      termino: 'Agencias reguladoras',
      significado:
        'Conformadas por entes fiscalizadores del Estado (Sindicatos, gremios y asociaciones de usuarios) que se encargan de regular y ejercer autoridad sobre un área específica.',
    },
    {
      termino: 'Canal de distribución',
      significado:
        'Camino seguido por el producto, a través de los intermediarios; va desde el productor al consumidor final.',
    },
    {
      termino: 'Pirognóstico',
      significado:
        'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
    },
    {
      termino: 'Capacidad ociosa ',
      significado:
        'Capacidad instalada de producción de una empresa que no se utiliza o que se subutiliza.',
    },
    {
      termino: 'Ciclo de vida del producto',
      significado:
        'Trayectoria que sigue un producto desde su concepción hasta su eliminación de la línea. Las etapas incluyen: introducción, crecimiento, madurez y declinación.',
    },
    {
      termino: 'Clientes',
      significado: 'Quienes compran los productos o servicios.',
    },
    {
      termino: 'Tipología',
      significado:
        'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
    },
    {
      termino: 'Competidores',
      significado:
        'Otras empresas que participan en el mercado con productos y/o servicios similares.',
    },
    {
      termino: 'Interés Inferior del menor',
      significado:
        'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
    },
    {
      termino: 'Consumidor',
      significado:
        'tPersona que compra productos de consumo. En mercadeo se utiliza para referirse a todo comprador.',
    },
    {
      termino: 'Demanda',
      significado:
        'La cantidad de bienes y servicios que son adquiridos por consumidores a diferentes precios, a de una unidad de tiempo específico.',
    },
    {
      termino: 'Elasticidad de la oferta',
      significado:
        'Es un indicador usado en economía para expresar la capacidad de respuesta o flexibilidad de la cantidad ofertada de un producto o servicio frente a un cambio de su precio.',
    },
    {
      termino: 'Entorno',
      significado:
        'Se puede definir como el conjunto de fuerzas directas e indirectas y controlables e incontrolables que son susceptibles de ejercer influencia, desde un ámbito microeconómico y macroeconómico, en todas sus acciones, decisiones y resultados.',
    },
    {
      termino: 'Pirognóstico',
      significado:
        'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
    },
    {
      termino: 'Know how',
      significado:
        'Expresión anglosajona usada en el comercio internacional para designar los conocimientos que no son siempre académicos e incluyen técnicas, información secreta de las estrategias de la empresa, datos privados de clientes y proveedores, todo lo que sea conocimiento común de una empresa y la diferencie del resto de sus concurrentes.',
    },
    {
      termino: 'Macroentorno',
      significado:
        'Son todos los factores externos que influyen en la empresa como son: entorno económico, entorno demográfico, entorno legal, entorno tecnológico, entorno ambiental.',
    },
    {
      termino: 'Marketing',
      significado:
        'Conjunto de actividades destinadas a lograr, con beneficio, la satisfacción del consumidor mediante un producto o servicio.',
    },
    {
      termino: 'Mercadeo internacional',
      significado:
        'Es la forma en que una empresa extiende sus esfuerzos para incluir mercados en el extranjero, exportando sus productos y/o servicios y adaptándose a las condiciones de la economía global.',
    },
    {
      termino: 'Mercado local',
      significado:
        'En el ámbito geográfico es el espacio más reducido del mercado. Hace referencia a las empresas, emprendimientos y negocios que se encuentran ubicados y desarrollan sus operaciones en veredas, municipios y departamentos.',
    },
    {
      termino: 'Mercados',
      significado:
        'Conjunto de transacciones de procesos o intercambio de bienes o servicios entre individuos.',
    },
    {
      termino: 'Mercados globales',
      significado:
        'Su origen no es otro que el fenómeno de la globalización. En un mundo tan avanzado como el actual, las empresas operan a nivel mundial realizando operaciones comerciales que incluye prácticamente todas las zonas del planeta. ',
    },
    {
      termino: 'Mercados internacionales',
      significado:
        'Es un intercambio de bienes y servicios entre países, algunos compran en otro país cercano o lejano (importaciones) y otros venden bienes y servicios fuera de sus países(exportan).',
    },
    {
      termino: 'Mercados nacionales',
      significado:
        'Este tipo de mercado extiende sus operaciones hacia los clientes potenciales en todo el país.',
    },
    {
      termino: 'Método DOFA',
      significado:
        'Este método de selección le permite realizar un análisis sobre problemas existentes en la organización, su función radica en la identificación de debilidades, oportunidades, fortalezas y amenazas que giran en torno al problema que se quiere solucionar.',
    },
    {
      termino: 'Oferta',
      significado:
        'La cantidad ofrecida de cualquier bien o servicio, es la cantidad que los vendedores quieren y pueden vender.',
    },
    {
      termino: 'Oferta exportable ',
      significado:
        'Cantidad de productos y servicios que están listos para exportar.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'Es una herramienta de la dirección para obtener una ventaja real sobre sus competidores. Por lo tanto, la planeación estratégica es el proceso formal de planeación a largo plazo que se usa para definir y alcanzar objetivos organizacionales.',
    },
    {
      termino: 'Planeación operativa',
      significado:
        'Es a corto plazo (menos de 1 año) y consiste en la formulación y asignación de actividades más desarrolladas que deben realizar los últimos niveles jerárquicos de la organización. Se rigen por los parámetros establecidos por la planeación táctica.',
    },
    {
      termino: 'Planeación táctica',
      significado:
        'Se refiere a la planeación de un producto o de publicidad, los cuales los hacen y coordinan los directivos de nivel medio para orientarla hacia la distribución de los recursos, además se dan a mediano plazo (1 a 5 años).',
    },
    {
      termino: 'Planear',
      significado:
        'Es la etapa que forma parte del proceso administrativo mediante la cual se establecen directrices, se definen estrategias y se seleccionan las alternativas y rutas de acción, en función de objetivos y metas generales económicas, sociales y políticas, tomando en consideración los recursos reales y potenciales que permitan establecer un marco de referencia necesario para concretar programas y acciones específicas en tiempo y espacio, logrando una predicción lo más probable del futuro para generar planes que puedan garantizar el éxito.',
    },
    {
      termino: 'Producto Interno Bruto (PIB)',
      significado:
        'Indicador económico que refleja el valor monetario de todos los bienes y servicios finales producidos por un país o región en un determinado periodo de tiempo, normalmente un año.',
    },
    {
      termino: 'Mercados globales',
      significado:
        'Su origen no es otro que el fenómeno de la globalización. En un mundo tan avanzado como el actual, las empresas operan a nivel mundial realizando operaciones comerciales que incluye prácticamente todas las zonas del planeta. ',
    },
    {
      termino: 'Proveedores',
      significado:
        'Quienes suministran los recursos para la elaboración de un producto o prestación de un servicio.',
    },
    {
      termino: 'Visión',
      significado:
        'Es lo que las empresas están proyectando alcanzar a futuro, indica la meta y debe ser expresada en términos de éxito que contagie a todos los que conforman la organización, lo cual se transmite a clientes y proveedores. Es el acto de verse en el tiempo y el espacio. Debe ser amplia, retadora, posible y concreta. Es la identificación clara de lo que la organización quiere lograr en un tiempo determinado.',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Comercio, Industria y Turismo, (s.f), Informe sobre los acuerdos comerciales vigentes en Colombia.”',
      tipo: 'Informe',
      link:
        'https://www.mincit.gov.co/normatividad/docs/ley-1868-informe-2019.aspx#page=100&zoom=auto,-99,286',
    },
    {
      texto:
        'Ministerio de Comercio, Industria y Turismo, (2020), perfiles económicos y comerciales por departamentos.',
      tipo: 'Informe',
      link:
        'https://www.mincit.gov.co/estudios-economicos/perfiles-economicos-por-departamentos',
    },
    {
      texto:
        'Salvador Lledó Balaguer, (2013), Importancia de la dirección estratégica en la empresa.',
      tipo: 'Articulo',
      link:
        'https://www.3ciencias.com/wp-content/uploads/2013/04/4.Importancia-de-la-direcci%C3%B3n-estrat%C3%A9gica-en-la-empresa.pdf',
    },
    {
      texto: 'Guerras y Navas, (2018), El análisis del entorno.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xgr7T3WMX6g',
    },
    {
      texto: 'Vera, (2015), Microentorno y macroentorno del marketing.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nCItrbLt6w8',
    },
    {
      texto: 'Wantubi, (2015), Plan de Marketing.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uzxqP_kwhGg',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Kateryn Valderrama',
        cargo: 'Experta técnica',
        centro: 'Centro de comercio y servicios – Regional Tolima',
      },
      {
        nombre: 'José Gregorio Ramírez',
        cargo: 'Experto técnico',
        centro: 'Centro de comercio y servicios – Regional Tolima',
      },
      {
        nombre: 'Bertha Paola Bejarano Ávila',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Evaluador instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdron',
        cargo: 'Evaluador instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Zenen Arévalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
