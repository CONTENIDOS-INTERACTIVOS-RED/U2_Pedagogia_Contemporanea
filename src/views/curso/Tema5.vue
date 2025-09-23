<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Ecopedagogía'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Educar para cuidar la vida: una invitación a pensar con el corazón y la razón.
    
        .bg-color-6.p-5(data-aos="fade-left").mb-4
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 ¿Qué mensaje transmite la escuela sobre la relación con la naturaleza?
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 ¿Se educa para consumir o para cuidar?
          p.mb-0 Estas preguntas abren el camino hacia la Ecopedagogía, una propuesta educativa que va más allá del aula y que invita a repensar el vínculo entre seres humanos, comunidad y planeta.
        p Hoy, más que nunca, la crisis ambiental exige nuevas formas de enseñar y aprender. Desde la primera infancia se puede sembrar una conciencia ecológica profunda, que no solo enseñe a reciclar, sino que forme ciudadanos sensibles, responsables y comprometidos con la vida en todas sus formas.

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este tema propone acercarse a la Ecopedagogía como una mirada crítica y amorosa sobre el mundo. Se explorarán sus principios, su conexión con la pedagogía crítica y las posibilidades que ofrece para transformar el aula infantil en un espacio de respeto, cuidado y acción. Porque educar también es una forma de sanar el planeta, se invita a sumarse a este viaje que combina conocimiento, sensibilidad y compromiso ambiental.
    
    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Educación ambiental y sostenibilidad
    
    p.mb-5 La educación ambiental y la sostenibilidad son dimensiones fundamentales en la formación de ciudadanos conscientes, sensibles y comprometidos con el cuidado del planeta.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Educación ambiental y sostenibilidad
            p.mb-4(data-aos="fade-right") En el PDF <b>Educación ambiental y sostenibilidad</b>, se abordan reflexiones y estrategias para integrar estos principios en la educación infantil, partiendo de experiencias significativas que conectan a los niños y niñas con su entorno natural. Se analiza cómo desde las primeras edades es posible sembrar valores ecológicos, fomentar el pensamiento crítico y promover acciones responsables que contribuyan al bienestar común y al equilibrio del ecosistema. Este enfoque pedagógico no solo enriquece el aprendizaje, sino que fortalece una cultura de respeto y cuidado que se proyecta hacia el futuro.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_10.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Educación ambiental y sostenibilidad
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/3.png', alt='')

    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Ciudadanía planetaria y cuidado de la vida
    
    p.mb-5 Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VTyW4vvBf5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_5_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.3] Propuestas didácticas desde la ecopedagogía
    
    p.mb-5 Las propuestas didácticas desde la ecopedagogía ofrecen una oportunidad valiosa para transformar el aula infantil en un espacio de conexión activa con la naturaleza y de formación ética en torno al cuidado del planeta.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Propuestas didácticas desde la ecopedagogía
            p.mb-4(data-aos="fade-right") En el PDF <b>Propuestas didácticas desde la ecopedagogía</b>, se exploran estrategias pedagógicas concretas que permiten integrar el enfoque ambiental de forma significativa en la educación inicial, a través de experiencias vivenciales, sensibles y creativas. Estas propuestas no solo buscan desarrollar conocimientos sobre el entorno, sino también fomentar actitudes de respeto, participación y conciencia crítica en los niños y las niñas, sentando las bases para una ciudadanía comprometida con la sostenibilidad y la justicia ecológica desde los primeros años de vida.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_11.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Propuestas didácticas desde la ecopedagogía
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/4.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://earthcharter.org/wp-content/assets/virtual-library2/images/uploads/Antunes.pdf " target="_blank" rel="noopener noreferrer") Antunes, Á., & Gadotti, M. (2006). La ecopedagogía como la pedagogía indicada para el proceso de la Carta de la Tierra. La Carta de la Tierra en acción. Hacia un mundo sostenible, 141-143. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=6151980 " target="_blank" rel="noopener noreferrer") Sánchez, P. D., Moscoso, A. O. P., & Bocanegra, C. E. H. (2017). Ecopedagogía y buen vivir: los caminos de la sustentabilidad. Praxis, 13(1), 84-92. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://recursos-educacion-ambiental.blogspot.com/2015/09/la-ecopedagogia.html" target="_blank" rel="noopener noreferrer") La ecopedagogía. (s.f.). Recursos para la Educación Ambiental.  



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=wUiqPS1a_KY " target="_blank" rel="noopener noreferrer") Universidad Castro Carazo. (2020, 15 de septiembre). Video 1: ¿Qué es la Ecoformación? [Video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones NO es un componente central de la innovación educativa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tecnología',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Tradición pedagógica',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Metodología',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Conocimiento',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué valor promueve la pedagogía crítica en el contexto educativo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Neutralidad política',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aceptación pasiva',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Justicia social',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Memorismo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Si una docente rediseña el currículo incluyendo metodologías activas, actividades al aire libre y reflexión crítica, ¿qué modelo está aplicando?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tradicional',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ecopedagogía',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Bancario',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Conductista',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de estos desafíos enfrenta la innovación educativa en contextos escolares reales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Motivación intrínseca de los estudiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Apoyo institucional continuo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Resistencia al cambio por parte de algunos docentes',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Uso de tecnologías emergentes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Si una maestra incorpora debates sobre sostenibilidad y cambios climáticos en sus clases, está aplicando:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '<em>Homeschool</em>',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aprendizaje memorístico',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ecopedagogía',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aprendizaje técnico',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
