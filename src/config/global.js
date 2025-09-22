export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Innovación de la educación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características de la innovación educativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El rol de las personas en los procesos de cambio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Conocimiento como motor de transformación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tecnología educativa: herramientas para innovar',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Metodologías activas y centradas en el estudiante',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Transformación educativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'De la educación tradicional a enfoques flexibles',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Nuevas formas de enseñar, aprender y evaluar',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'El aula como espacio de construcción colectiva',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Homeschool</em> (Educación en casa)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fundamentos, ventajas y retos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Marco normativo y experiencias en América Latina',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'La personalización del aprendizaje en casa',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Pedagogía crítica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Paulo Freire y la educación como práctica de la libertad',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Conciencia crítica y transformación social',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Implicaciones pedagógicas en el aula',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Ecopedagogía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Educación ambiental y sostenibilidad',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Ciudadanía planetaria y cuidado de la vida',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Propuestas didácticas desde la ecopedagogía',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Garrido Abia, R. (Il.), García Lázaro, D. (Il.) & Martín Nieto, R. (Coord.). (2021). Innovación educativa: avances desde la investigación: (1 ed.). Dykinson.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/220428',
    },
    {
      referencia:
        'Arroyo Martínez, L. (Il.) & Fernández de Castro, J. (Il.). (2024). Aspectos cruciales de la innovación educativa: (1 ed.). Narcea Ediciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/277571',
    },
    {
      referencia:
        'Fiorucci, M. (Il.), Roig-Vila, R. (Il.) & Crescenza, G. (Il.). (2024). Innovación educativa y transformación de la sociedad: (1 ed.). Dykinson.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279357',
    },
    {
      referencia:
        'Fernández Batanero, J. M. (2020). TIC y discapacidad: investigación e innovación educativa: ( ed.). Ediciones Octaedro, S.L.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/158312',
    },
    {
      referencia:
        'Michavila, F. (2009). La innovación educativa. Oportunidades y barreras. Arbor, 185(Extra), 3-8.  ',
      link: 'https://arbor.revistas.csic.es/index.php/arbor/article/view/373',
    },
    {
      referencia:
        'Gairín Sallán, J. & Muñoz Moreno, J. L. (2025). Planes y programas para la transformación educativa: los planteamientos institucionales en los centros educativos: (1 ed.). LA LEY Soluciones Legales S.A.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/284514',
    },
    {
      referencia:
        'Sarceda Gorgoso, C. Fuentes Abeledo, E. J. & Barreira Cerqueiras, E. M. (2023). La formación y la innovación educativa: ejes para la transformación social: (1 ed.). Dykinson.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/229954',
    },
    {
      referencia:
        'García Gutiérrez, Z. D. P. Herrero Hernández, A. & Dumett Arrieta, S. A. (2022). Ciudadanía creativa. Travesía de investigación educativa en primera infancia hacia la transformación social: (1 ed.). Corporación Universitaria Minuto de Dios. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231736 ',
    },
    {
      referencia:
        'De La Puente, J. L. B. (2005). La transformación educativa y social en las comunidades de aprendizaje. Teoría de la Educación. Revista Interuniversitaria, 17.    ',
      link:
        'https://revistas.usal.es/tres/index.php/1130-3743/article/view/3118',
    },
    {
      referencia:
        'Panqueva, A. H. G. (2020). Transformación educativa mediada con tecnología digital: oportunidad única de cara a la “nueva normalidad”. Innovaciones Educativas, 22, 28-32. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8470005 ',
    },
    {
      referencia:
        'Valero Heredia, A. (2012). Ideario educativo constitucional y «homeschooling»: a propósito de la sentencia del tribunal constitucional 133/2010, de 2 de diciembre. Revista Española de Derecho Constitucional, (94): ( ed.). CEPC - Centro de Estudios Políticos y Constitucionales.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/8607',
    },
    {
      referencia:
        'Soberanes Díez, J. M., & Trejo Osornio, L. A. (2011). Educación escolarizada vs. educación en casa. Reflexiones sobre la sentencia homeschooling del Tribunal Constitucional español. Cuestiones constitucionales, (25), 353-365.  ',
      link: 'https://www.scielo.org.mx/pdf/cconst/n25/n25a13.pdf',
    },
    {
      referencia:
        'Obregón, M. L. Á., Obregón, M. D. Á., & del Pozo, F. C. (2018). Homeschooling una alternativa en educación. Polo del Conocimiento: Revista científico-profesional, 3(10), 205-222.  ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9535698',
    },
    {
      referencia:
        'Rodrigo Lara, B. (2021). La educación en casa. Anuario de derecho eclesiástico, 1009-1044.  ',
      link: 'https://dialnet.unirioja.es/servlet/autor?codigo=278471',
    },
    {
      referencia:
        'Maldonado García, M. Á. (2018). Pedagogías críticas: otras formas de pensar la educación: ( ed.). Editorial UOC.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/59141',
    },
    {
      referencia:
        'Aparici, R. Escaño González, C. & García Marín, D. (2018). La otra educación: pedagogías críticas para el siglo XXI: ( ed.). UNED - Universidad Nacional de Educación a Distancia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/117244',
    },
    {
      referencia:
        'Ramírez Bravo, R. (2008). La pedagogía crítica: Una manera ética de generar procesos educativos. folios, (28), 108-119.  ',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S0123-48702008000200009&script=sci_arttext',
    },
    {
      referencia:
        'Alvarado Arias, M. (2007). José Martí y Paulo Freire: aproximaciones para una lectura de la pedagogía crítica. Revista electrónica de investigación educativa, 9(1), 1-19.  ',
      link:
        'https://www.scielo.org.mx/scielo.php?pid=S1607-40412007000100004&script=sci_arttext',
    },
    {
      referencia:
        'Gadotti, M. (2002). Los aportes de Paulo Freire a la pedagogía crítica. Revista Educación, 26(2), 51-60.',
      link: ' https://www.redalyc.org/articulo.oa?id=44026207 ',
    },
    {
      referencia:
        'Gutiérrez Pérez, F. & Prado Rojas, C. (2015). Ecopedagogía y ciudadanía planetaria: ( ed.). Editorial Parmenia, Universidad La Salle México.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/183474',
    },
    {
      referencia:
        'Hernández Méndez, G. (Coord.), Pérez Chacón, J. L. (Coord.) & Simbaqueba Triana, A. (Coord.). (2023). Ecopedagogía: educación relacional en el ser y el hacer complejos: (1 ed.). Plaza y Valdés (México).  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/251084',
    },
    {
      referencia: 'López Guarín, L. Y. (2017). Ecopedagogía.  ',
      link:
        'https://digitk.areandina.edu.co/entities/publication/255e7b29-f4a6-4215-9176-98615eaacc6b',
    },
    {
      referencia:
        'Zingaretti, H. E. (2008). La ecopedagogía y la formación de los niños. Universidad Nacional de Cuyo. ',
      link: 'https://feeye.uncuyo.edu.ar/web/X-CN-REDUEI/eje3/Zingaretti.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje significativo',
      significado:
        'Proceso en el que el estudiante construye nuevos conocimientos conectándolos con saberes previos.',
    },
    {
      termino: 'Competencias',
      significado:
        'Conjunto de conocimientos, habilidades y actitudes que permiten actuar de manera eficaz en diferentes contextos.',
    },
    {
      termino: 'Conciencia crítica',
      significado:
        'Capacidad para reflexionar sobre la realidad, cuestionar y actuar frente a las injusticias sociales.',
    },
    {
      termino: 'Contextualización',
      significado:
        'Adaptación del proceso educativo a las características, necesidades y entorno de los estudiantes.',
    },
    {
      termino: 'Diversidad',
      significado:
        'Reconocimiento de las diferencias individuales, culturales, sociales o cognitivas presentes en el aula.',
    },
    {
      termino: 'Ecopedagogía',
      significado:
        'Enfoque educativo que promueve el cuidado del planeta, la sostenibilidad y la conciencia ecológica.',
    },
    {
      termino: '<em>Homeschool</em>',
      significado:
        'Modalidad educativa en la que los procesos de enseñanza y aprendizaje se desarrollan en el hogar.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Proceso que garantiza la participación y el aprendizaje de todos los estudiantes sin discriminación.',
    },
    {
      termino: 'Innovación educativa',
      significado:
        'Introducción de prácticas pedagógicas novedosas y pertinentes que mejoran los procesos de enseñanza-aprendizaje.',
    },
    {
      termino: 'Metodologías activas',
      significado:
        'Estrategias pedagógicas que promueven la participación del estudiante como protagonista del aprendizaje.',
    },
    {
      termino: 'Paulo Freire',
      significado:
        'Educador brasileño, referente de la pedagogía crítica, que propone una educación liberadora y transformadora.',
    },
    {
      termino: 'Pedagogía crítica',
      significado:
        'Enfoque educativo que busca formar sujetos capaces de analizar, cuestionar y transformar su realidad.',
    },
    {
      termino: 'Práctica pedagógica',
      significado:
        'Conjunto de acciones que realiza el docente en su labor educativa, orientadas al aprendizaje del estudiante.',
    },
    {
      termino: 'Tecnología educativa',
      significado:
        'Herramientas tecnológicas aplicadas al contexto educativo para apoyar la enseñanza y el aprendizaje.',
    },
  ],
}
