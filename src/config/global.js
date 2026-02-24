export default {
  global: {
    componenteFormativo:
      'Evaluación, capacitación y permanencia de talento humano',
    descripcionCurso:
      'La gestión del talento humano es la encargada de las etapas o procesos que generan o influyen en los comportamientos y en las actitudes de los empleados, condicionando sus resultados en la productividad, la satisfacción laboral, la rotación o permanencia y, por ende, en los resultados acertados de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        numero: '1',
        titulo: 'Evaluación y capacitación del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evaluación de desempeño',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Capacitación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bienestar y calidad de vida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Salud ocupacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comunicación empresarial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_19_122153_DU.pdf',
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
  complementario: [
    {
      tema: 'Evaluación de desempeño',
      referencia:
        'QuestionPro. (s.f.). <i>11 métodos de evaluación de desempeño para alcanzar tus objetivos</i>.',
      tipo: 'Artículo',
      link:
        'https://www.questionpro.com/blog/es/metodos-de-evaluacion-de-desempeno-mas-importantes/#:~:text=Evaluaci%C3%B3n%20360%20%E2%80%8B%E2%80%8Bgrados,obtener%20retroalimentaci%C3%B3n%20de%20fuentes%20externas.',
    },
    {
      tema: 'Salud ocupacional',
      referencia:
        'Congreso de Colombia. Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012.  ',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201562%20de%202012.pdf',
    },
    {
      tema: 'Comunicación empresarial',
      referencia:
        'GCFAprendeLibre. (2022). Tipo de comunicación organizacional Comunicación empresarial (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eb0kP8iMpWI&feature=youtu.be',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente laboral',
      significado:
        'situación intangible que se identifica y percibe dentro de las organizaciones. Situación de agrado o desagrado al estar o laborar en un ambiente determinado.',
    },
    {
      termino: 'Capacitación',
      significado:
        'conjunto de actividades didácticas para ampliar y mejorar conocimientos, habilidades y aptitudes de una persona.',
    },
    {
      termino: 'Competencias',
      significado:
        'son destrezas, habilidades y conocimientos que tiene el trabajador para desempeñar sus funciones. ',
    },
    {
      termino: 'Desarrollo de habilidades',
      significado:
        'perfeccionamiento o crecimiento en los aspectos motrices o cognitivos del ser humano.',
    },
    {
      termino: 'Desempeño',
      significado:
        'acción de desarrollar o ejercer determinada labor o función.',
    },
    {
      termino: 'Evaluación',
      significado:
        'valoración de conocimientos, actitud y rendimiento de una persona, un empleado, un bien o un servicio.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'son todas aquellas situaciones o elementos que pueden causar daños, accidentes o enfermedades a las personas.',
    },
    {
      termino: 'Habilidades',
      significado:
        'capacidades para realizar determinadas acciones o tareas de forma efectiva.',
    },
    {
      termino: 'Plan de mejoramiento',
      significado:
        'acciones encaminadas al mejoramiento de una actividad, o proceso.',
    },
    {
      termino: 'Salud mental',
      significado:
        'es un estado de bienestar y tranquilidad, donde el individuo es consciente de su calidad de vida.',
    },
    {
      termino: 'Talento humano',
      significado:
        'capacidad especial o facilidad de una persona para aprender o ejecutar una determinada tarea.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boada, R. (2015). <i>Identificando el talento humano</i>. McGraw-Hill Interamericana.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7452',
    },
    {
      referencia:
        'Chiavenato, I. (2009). <i>Gestión del talento humano</i>. McGraw-Hill.',
    },
    {
      referencia:
        'Chiavenato, I. (2017). <i>Administración de recursos humanos. El capital humano de las organizaciones</i>. McGraw-Hill.',
    },
    {
      referencia:
        'Cuesta Santos, A. (2010). <i>Gestión del talento humano y el conocimiento</i>. Ecoe Ediciones.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=110 ',
    },
    {
      referencia:
        'Louffat, E. (2017). <i>Reclutando y seleccionando al personal</i>. Pearson Educación.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10379',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
