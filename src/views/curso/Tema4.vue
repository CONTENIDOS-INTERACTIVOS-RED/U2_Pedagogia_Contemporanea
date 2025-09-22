<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Pedagogía crítica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg
          .p-4
            p(data-aos="fade-up") ¡Es momento de cuestionar para transformar!
            p.mb-0 ¿La escuela realmente forma ciudadanos libres o si, por el contrario, reproduce desigualdades y silencios impuestos? Iniciar el estudio de la Pedagogía Crítica es abrir una puerta hacia una educación que no solo enseña contenidos, sino que despierta conciencia, promueve la reflexión y compromete con el cambio social.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Desde esta perspectiva, se invita a mirar más allá de las normas, los manuales y las metodologías repetidas. Aquí se propone asumir la enseñanza como un acto político, ético y liberador, especialmente relevante en el campo de la Educación Infantil, donde se siembran las primeras ideas sobre justicia, equidad, voz propia y empatía.
    
        .bg-color-9.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Adentrarse en la pedagogía crítica implica cuestionar lo dado, problematizar lo aprendido y construir saberes junto con los otros, reconociendo que cada niño, cada niña y cada comunidad tienen derecho a una educación transformadora. Prepárese para analizar, debatir y descubrir cómo su rol como futuro educador o educadora puede contribuir a una sociedad más justa desde la primera infancia.
    
    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Paulo Freire y la educación como práctica de la libertad
    
    p.mb-5 La pedagogía de Paulo Freire representa una de las propuestas más influyentes en el campo de la educación crítica y transformadora.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Paulo Freire y la educación como práctica de la libertad
            p.mb-4(data-aos="fade-right") En el PDF <b>Paulo Freire y la educación como práctica de la libertad</b>, se presenta una mirada profunda sobre su pensamiento y su legado, destacando cómo el diálogo, la conciencia crítica y el compromiso con la transformación social pueden ser aplicados incluso en la educación infantil. A través de ejemplos concretos, se invita a repensar la práctica docente desde una perspectiva humanizadora, donde el educador y el educando construyen juntos el conocimiento en un marco de respeto, participación y sentido ético.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Paulo Freire y la educación como práctica de la libertad
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/4.png', alt='')

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Conciencia crítica y transformación social

    .bg-color-4.p-4(data-aos="fade-left").h-100.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 ¿Para qué se educa si no es para transformar el mundo?
    
    .bg-full-width.bg-color-8
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") La pregunta resulta provocadora, pero necesaria. En una sociedad atravesada por desigualdades, discursos impuestos y exclusión, educar sin formar conciencia crítica puede significar perpetuar la injusticia. Desde la mirada de la pedagogía crítica, y especialmente de Paulo Freire, la conciencia crítica es la capacidad que permite leer el mundo, no solo la palabra, interpretar la realidad más allá de la apariencia y comprometerse activamente con su transformación.
        
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              p.mb-0 Según Maldonado (2018), formar conciencia crítica no es enseñar a repetir ideas progresistas, ni adoctrinar bajo un nuevo discurso. Se trata de despertar en cada persona la capacidad de pensar por sí misma, de cuestionar lo establecido, de dialogar con otros y de actuar con sentido ético y social. En educación infantil, este enfoque no se traduce en debates políticos complejos, sino en sembrar semillas de reflexión, empatía, autonomía, respeto y participación activa desde los primeros años de vida.
            p La conciencia crítica es un proceso que se construye gradualmente. Para Freire, existen tres niveles:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Conciencia ingenua
                p.mb-0.text-center Se acepta la realidad tal como se presenta, sin cuestionarla.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Conciencia mágica
                p.mb-0.text-center Se reconoce que hay problemas, pero se atribuyen a causas externas, casi místicas, sin asumir responsabilidad ni posibilidades de cambio.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Conciencia crítica
                p.mb-0.text-center Se entiende que la realidad es histórica, social y transformable. Se analiza, se cuestiona y se actúa sobre ella.
    
    p.mb-5 Este proceso no se impone, se acompaña. Por ello, en la práctica educativa es esencial:

    .bg-full-width.bg-color-10
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema4/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Primero
                p.text-center Dialogar con los niños y las niñas sobre sus realidades, lo que sienten, lo que observan, lo que les inquieta.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema4/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Segundo
                p.text-center Plantear preguntas abiertas que estimulen la reflexión y no solo la memorización.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema4/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Tercero
                p.text-center Fomentar la expresión libre y el pensamiento divergente, en lugar de buscar respuestas únicas y correctas.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema4/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Cuarto
                p.text-center Acompañar la interpretación del entorno, ayudando a comprender fenómenos sociales, naturales y culturales de forma crítica.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema4/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Quinto
                p.text-center Conectar el aprendizaje con la vida, haciendo del aula un reflejo del mundo que se habita y se puede transformar.

    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/10.png', alt='')
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Desarrollar conciencia crítica implica asumir una postura ética y activa frente al entorno. No basta con saber que algo está mal; es necesario preguntarse: ¿qué se puede hacer? ¿cómo se puede aportar? Desde la infancia, esto se traduce en pequeños actos de participación, empatía, cuidado colectivo y responsabilidad.
    
    p.mb-5 Por ejemplo, en la escuela infantil se puede:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Acción pedagógica y su impacto social
    .tabla-a.color-acento-botones.pst.mb-5
      table
        thead
          tr
            th.text-center.text-white.bg-color-5 Acción pedagógica
            th.text-center.text-white.bg-color-5 Impacto social
        tbody.bg-color-11
          tr
            th Conversar sobre el cuidado del ambiente.
            td Formar conciencia ecológica y sentido de responsabilidad con el planeta.
          tr
            th Trabajar la resolución pacífica de conflictos.
            td Promover la cultura de paz, la escucha y la convivencia respetuosa.
          tr
            th Visibilizar las diferencias culturales.
            td Fomentar el respeto, la inclusión y el reconocimiento de la diversidad.
          tr
            th Participar en proyectos comunitarios.
            td Enseñar que el aprendizaje también transforma el entorno más cercano.

    p Estas acciones no solo desarrollan habilidades cognitivas y socioemocionales, sino que <b>forman ciudadanos activos, reflexivos y solidarios desde la infancia.</b>
    p.mb-5 Para que la conciencia crítica florezca, el docente debe asumir también una postura crítica. Esto significa:

    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center.px-5
            .col-lg-8(data-aos="fade-left").p-5
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Revisar sus propias creencias, prejuicios y prácticas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Estar dispuesto a aprender junto con los estudiantes, reconociendo que el saber no es unidireccional.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Generar espacios de diálogo, escucha y participación, donde el pensamiento se enriquezca desde la diferencia.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Concebir su práctica como un acto ético y político, comprometido con la justicia y la transformación.
              p Educar desde la conciencia crítica no es fácil, especialmente en contextos que valoran más la obediencia que la autonomía. Sin embargo, es uno de los caminos más poderosos para construir una escuela y una sociedad más humana y equitativa.
            .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema4/16.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema4/17.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo puede un niño o una niña de preescolar comenzar a desarrollar conciencia crítica?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué actitudes debe cultivar un docente para promover el pensamiento reflexivo en el aula?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Por qué educar sin crítica puede ser una forma de opresión silenciosa?

    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Implicaciones pedagógicas en el aula
    
    p.mb-5 Las implicaciones pedagógicas de la educación crítica cobran pleno sentido cuando se materializan en el aula como acciones concretas que promueven la participación, el pensamiento reflexivo y la transformación social desde la infancia.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Implicaciones pedagógicas en el aula
            p.mb-4(data-aos="fade-right") En el PDF <b>Implicaciones pedagógicas en el aula</b>, se exploran estrategias prácticas que permiten llevar los principios de la pedagogía crítica a la cotidianidad educativa, especialmente en los primeros años de formación. A través de propuestas como los círculos de diálogo, los proyectos de investigación infantil o la lectura del entorno, se muestra cómo es posible construir una cultura escolar más democrática, ética y afectiva, donde el rol del docente se redefine como un facilitador del aprendizaje y un agente de cambio comprometido con la infancia y su contexto.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Implicaciones pedagógicas en el aula
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/19.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/156878" target="_blank" rel="noopener noreferrer") Weissmann, P. (Comp.). (2018). Hacia una educación para el buen vivir: aportes de las pedagogías críticas: ( ed.). Editorial Maipue. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/235170 " target="_blank" rel="noopener noreferrer") Sánchez Sáinz, M. (2019). Pedagogías queer ¿Nos arriesgamos hacer otra educación?: (1 ed.). Los libros de la Catarata. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/6198/619865690003/ " target="_blank" rel="noopener noreferrer") Jardilino, J. R. L., & Soto-Arango, D. E. (2020). Paulo Freire y la Pedagogía Crítica: su legado para una nueva pedagogía desde el Sur. Revista Ibero-Americana de Estudos em Educação, 1072-1093. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.numberanalytics.com/blog/critical-pedagogy-ultimate-guide" target="_blank" rel="noopener noreferrer") Critical Pedagogy: A Revolutionary Approach. (s.f.). Number Analytics - AI Statistical Software.  



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=SGoM4pcvJ7Y " target="_blank" rel="noopener noreferrer") Universidad Pedagógica Nacional. (2022, 10 de agosto). Conferencia Pedagogías Críticas Latinoamericanas [Video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
