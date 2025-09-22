<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Transformación educativa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.p-4(data-aos="fade-left").h-100.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 ¿Qué significa verdaderamente transformar la educación y por qué se hace tan urgente en estos tiempos? 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La palabra “transformación” no se refiere solo a modificar métodos o aplicar recursos nuevos: implica un cambio profundo en la manera de comprender al niño, al aprendizaje, al rol del educador y al propósito mismo de la escuela. En el contexto de la educación infantil, hablar de transformación es reconocer que no basta con enseñar contenidos; se requiere cultivar seres humanos sensibles, críticos, autónomos y capaces de convivir en un mundo diverso y cambiante.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-9.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Se invita a abordar este tema con mente abierta y sentido pedagógico, explorando cómo la transformación educativa puede convertirse en una herramienta para construir entornos más justos, creativos e inclusivos desde las primeras edades. ¿Qué elementos hacen posible esta transformación? ¿Qué papel juega el docente en este proceso? ¿Y cómo lograr que el cambio no sea solo discurso, sino una realidad viva en el aula?
    

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] De la educación tradicional a enfoques flexibles
    
    p.mb-5 La transformación de la educación implica cuestionar prácticas tradicionales y abrirse a nuevas formas de enseñar y aprender que respondan a las necesidades del presente.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") De la educación tradicional a enfoques flexibles
            p.mb-4(data-aos="fade-right") En el PDF <b>De la educación tradicional a enfoques flexibles</b>, se analiza cómo pasar de un modelo rígido y repetitivo a propuestas pedagógicas que valoren la diversidad, el contexto y la participación activa del estudiante. A través de una mirada reflexiva y crítica, se propone un enfoque más humano, creativo y adaptable, que permita construir una educación infantil centrada en el respeto, la autonomía y el desarrollo integral de cada niño y niña.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> De la educación tradicional a enfoques flexibles
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Nuevas formas de enseñar, aprender y evaluar
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-4.p-3(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se está enseñando para vivir… o solo para aprobar?
        p(data-aos="fade-left") Esta pregunta invita a cuestionar el verdadero propósito de la educación. Por mucho tiempo, enseñar ha significado transmitir información, aprender ha sido repetir contenidos, y evaluar se ha limitado a calificar. Sin embargo, los tiempos han cambiado, y con ellos las infancias, las realidades sociales y los retos del mundo. 

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-5(data-aos="fade-left")
          p Hoy se comprende que <b>enseñar, aprender y evaluar</b>, deben ser procesos profundamente conectados con la vida, la emoción, la creatividad, el cuerpo y el pensamiento crítico (López, Cobos y Jaén, 2024). 
          p.mb-0 En este contexto, surge la necesidad de transformar las prácticas tradicionales para adoptar nuevas formas que pongan en el centro al estudiante como protagonista de su propio proceso. 
    
    h2(data-aos="fade-left") Enseñar: más que decir, es provocar, guiar y crear
    p En la educación contemporánea, enseñar deja de ser un acto de transmisión unidireccional. Se transforma en una experiencia compartida, donde el docente asume el rol de guía, mediador y diseñador de entornos de aprendizaje ricos en sentido. La enseñanza se basa ahora en experiencias significativas, en preguntas abiertas, en el contacto con el entorno y en metodologías que despiertan la curiosidad natural de los niños y las niñas.
    p.mb-5 Algunas estrategias claves incluyen:

    .bg-full-width.bg-color-10
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center Aprendizaje basado en proyectos
              p.mb-0.text-center El cual permite abordar temas reales desde distintas áreas del conocimiento.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
              h5.text-center Exploración del entorno natural y social
              p.mb-0.text-center Como fuente directa de conocimiento y descubrimiento.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center Uso pedagógico de las tecnologías
              p.mb-0.text-center Al integrar herramientas digitales, de forma creativa y equilibrada.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/10.svg" alt="" style="width: 90px")
              h5.text-center Cuentos, música, arte y juego libre
              p.mb-0.text-center Como lenguajes fundamentales para enseñar desde la emoción.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white El acto de enseñar se convierte así en un espacio de encuentro, de escucha activa, de creación colectiva y de cuidado. Se enseña no solo con lo que se dice, sino con cómo se acompaña, se organiza el ambiente y se responde a las necesidades del grupo.
      
    h2(data-aos="fade-left").mb-5 Aprender: más allá de memorizar, aprender es vivir

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left").mb-5
          p.mb-0 Aprender implica mucho más que adquirir conocimientos. Es comprender, sentir, experimentar, construir sentido y transformar la experiencia en crecimiento personal. Las nuevas formas de aprendizaje reconocen la diversidad de ritmos, estilos y contextos de los estudiantes, y valoran la participación activa, la cooperación, el juego y la emoción como componentes esenciales del proceso.
        p(data-aos="fade-left") En el nivel de educación infantil, estas formas se traducen en:
    
    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Aprendizaje lúdico y corporal
              p.mb-0 Donde se involucran todos los sentidos.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Descubrimiento guiado
              p.mb-0 Donde se respeta el interés natural del niño.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Trabajo en rincones o estaciones
              p.mb-0 Los cuales promueven la autonomía y el trabajo colaborativo.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Diálogos espontáneos y preguntas del niño
              p.mb-0 Como punto de partida para nuevas exploraciones.
    
    p.mb-5 Se aprende mejor cuando se permite al niño tocar, moverse, decidir, imaginar, equivocarse y volver a intentar. Y cuando se reconoce que el error también es parte del aprendizaje.

    h2(data-aos="fade-left").mb-5 Evaluar: de la medición a la comprensión del proceso

    .bg-full-width.bg-color-8
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-4(data-aos="fade-left").mb-5
              p.mb-0 La evaluación también ha empezado a transformarse. Ya no se piensa como un fin, sino como un medio para conocer, valorar y acompañar el desarrollo del estudiante. Evaluar no es “poner una nota”, sino mirar con atención el proceso, reconocer logros, identificar necesidades y orientar nuevas experiencias. En este sentido, se transforma en un acto pedagógico, ético y emocional.

            p(data-aos="fade-left") En la educación infantil, esto implica:
        
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Observar y documentar
                p.mb-0.text-center El proceso de cada niño, en situaciones reales de juego y trabajo.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Usar instrumentos cualitativos
                p.mb-0.text-center Como diarios de campo, registros anecdóticos, carpetas de trabajos o mapas de progreso.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/19.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Incluir la autoevaluación
                p.mb-0.text-center Adaptada al nivel, para que los niños también aprendan a mirar su propio avance.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/20.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Conversar con las familias
                p.mb-0.text-center Integrándolas en la valoración del desarrollo integral del niño.
            
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Una evaluación que acompaña y no castiga, que valora y no compara, que respeta y no etiqueta, se convierte en una herramienta de transformación educativa.
    
        .bg-color-9.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas tres acciones, enseñar, aprender y evaluar, están profundamente conectadas. No tiene sentido enseñar activamente si se evalúa de forma pasiva. Ni fomentar el aprendizaje libre si luego se mide con un examen rígido. Por eso, una educación transformadora cuida que exista coherencia entre lo que se propone, lo que se hace y cómo se valora (De La Puente, 2005). 
        p Cuando se logra esta coherencia, el aula se transforma en un espacio de confianza, diálogo, creatividad y sentido. Y el rol del educador se vuelve aún más significativo, porque deja de ser quien controla el conocimiento, y se convierte en quien inspira, acompaña y aprende junto con los niños.

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:

    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").order-2.p-5
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ¿Qué nuevas formas de enseñar se podrían incorporar en la práctica educativa diaria? 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ¿Cómo se puede favorecer un aprendizaje que conecte con la vida del niño y su entorno?
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ¿De qué manera se evalúa hoy: se acompaña el proceso o solo se mide el resultado?
              p Repensar la enseñanza, el aprendizaje y la evaluación es uno de los pasos más urgentes para lograr una educación verdaderamente inclusiva, significativa y transformadora. No basta con cambiar la actividad: es necesario cambiar la intención, la mirada y la relación que se construye con el saber, con los niños y con la propia práctica pedagógica.
              p.mb-0 Y todo comienza con una pregunta honesta, una escucha atenta y una acción concreta.
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema2/24.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] El aula como espacio de construcción colectiva
    
    p.mb-5 Pensar el aula como un espacio de construcción colectiva implica reconocer que el aprendizaje no se da en soledad, sino en relación con otros.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") El aula como espacio de construcción colectiva
            p.mb-4(data-aos="fade-right") En el PDF <b>El aula como espacio de construcción colectiva</b>, se presenta una visión transformadora del aula como un entorno dinámico, participativo y afectivo, donde cada niño y niña aporta desde su singularidad a la vida del grupo. A partir de enfoques pedagógicos contemporáneos, se destaca la importancia de diseñar ambientes de aprendizaje que favorezcan el diálogo, la colaboración, el respeto por la diversidad y la construcción conjunta del saber, invitando a docentes y estudiantes a convivir, crear y crecer en comunidad.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El aula como espacio de construcción colectiva
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/25.png', alt='')






    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/158307 " target="_blank" rel="noopener noreferrer") Moliner García, O. (Il.) & Sales, A. (Il.). (2020). La escuela incluida en el territorio: la transformación educativa desde la participación ciudadana: ( ed.). Ediciones Octaedro, S.L. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/47823 " target="_blank" rel="noopener noreferrer") Auberni, S. (2007). Convivir en paz: la metodología apreciativa: aproximación a una herramienta para la transformación creativa de la convivencia en Centros Educativos: ( ed.). Editorial Desclée de Brouwer. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=9588017" target="_blank" rel="noopener noreferrer") Loja, C. M. L., & Suco, L. M. Q. (2021). El rol docente y las innovaciones pedagógicas como elementos para la transformación educativa. Revista Scientific, 6(20), 296-310.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.uniremington.edu.co/foro-sobre-la-transformacion-educativa/" target="_blank" rel="noopener noreferrer") Foro dinámico sobre la transformación educativa - Corporación Universitaria Remington. (s.f.). Corporación Universitaria Remington - Corporación Universitaria Remington. Más de 100 años de historia haciendo parte de los cambios sociales y brindando educación superior de calidad.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=OnyF3tdqkIg" target="_blank" rel="noopener noreferrer") Diario Última Hora Paraguay. (2022, 2 de noviembre). ¿Qué es la Transformación Educativa? - Cápsula ÚH [Video]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
