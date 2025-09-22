<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Características de la innovación educativa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿Cómo sería un aula donde las ideas fluyen libremente, las herramientas digitales se combinan con el juego, y cada estudiante aprende a su ritmo? Ese escenario no es un sueño lejano, es parte de lo que hoy se conoce como innovación educativa.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Iniciar este tema es abrir una puerta hacia nuevas formas de enseñar, pensar y acompañar el aprendizaje en la primera infancia. Se trata de comprender cómo las personas, el conocimiento, la tecnología y la metodología se articulan para transformar la educación tradicional en una experiencia más creativa, significativa y cercana a las realidades de los niños y las niñas.
        p Como futuro educador infantil, descubrir estas características le permitirá fortalecer la capacidad de diseñar propuestas pedagógicas frescas, flexibles y sensibles a la diversidad del aula. Este recorrido invita a reflexionar: 
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué se considera realmente innovador en la educación? 
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo puede lograrse una transformación que no solo implique recursos, sino también actitudes y enfoques comprometidos con el cambio?
    
    p.mb-5 Se invita a explorar con curiosidad, espíritu crítico y apertura este primer paso hacia la innovación, recordando que en la educación infantil cada gesto, cada estrategia y cada decisión tiene el poder de sembrar futuros distintos.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] El rol de las personas en los procesos de cambio
    
    p.mb-5 La innovación en educación no depende exclusivamente de recursos tecnológicos o estrategias llamativas, sino del compromiso profundo con una enseñanza que transforme.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") El rol de las personas en los procesos de cambio
            p.mb-4(data-aos="fade-right") En el PDF <b>El rol de las personas en los procesos de cambio</b>, se explora cómo las y los docentes, desde su sensibilidad, reflexión y creatividad, impulsan transformaciones significativas en la práctica pedagógica cotidiana. A través de esta mirada, se reconoce que la verdadera innovación comienza con las personas y sus decisiones diarias dentro del aula.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El rol de las personas en los procesos de cambio
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Conocimiento como motor de transformación
    
    p.mb-5 El conocimiento, más allá de ser una acumulación de datos, representa una herramienta esencial para generar comprensión, acción y transformación en el ámbito educativo.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Conocimiento como motor de transformación
            p.mb-4(data-aos="fade-right") En el PDF <b>Conocimiento como motor de transformación</b>, se reflexiona sobre cómo el saber, cuando se vive de manera situada, crítica y ética, puede convertirse en una fuerza impulsora de cambios reales en la práctica pedagógica, especialmente en la educación infantil. Esta perspectiva invita a repensar el rol del educador como mediador activo en la construcción de aprendizajes significativos desde los primeros años de vida.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Conocimiento como motor de transformación
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='')
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Tecnología educativa: herramientas para innovar
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 ¿Puede la tecnología convertirse en una aliada auténtica de la educación infantil sin perder de vista el valor del juego, la exploración y el afecto?
        .bg-color-6.p-5(data-aos="fade-left")
          p.mb-0 Esta pregunta resulta esencial al abordar el papel de la tecnología en los procesos educativos contemporáneos. No se trata solo de incorporar dispositivos digitales en el aula, sino de comprender la función que cumple la tecnología cuando se orienta a enriquecer las experiencias de aprendizaje de manera significativa, sensible y pedagógica.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En tiempos donde la tecnología atraviesa casi todos los aspectos de la vida cotidiana, también ha llegado con fuerza a los escenarios escolares. Su presencia, sin embargo, exige ser comprendida desde una mirada crítica y pedagógica, evitando caer en dos extremos: ni idolatrarla como solución mágica, ni rechazarla por completo como amenaza. En su justo uso, puede convertirse en una herramienta poderosa para transformar la educación infantil, siempre que esté al servicio del desarrollo integral de los niños y las niñas.
    
        .bg-color-9.mb-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Michavila, F. (2009), innovar no significa usar aparatos nuevos, sino darle nuevo sentido a lo que se hace. Por eso, la tecnología en educación no se limita a lo técnico, sino que se vuelve pedagógica cuando potencia el aprendizaje, estimula la participación, facilita la expresión y fortalece el vínculo educativo.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En la educación infantil, este uso requiere especial cuidado. La infancia necesita experiencias concretas, juego libre, interacción afectiva, exploración del entorno y comunicación auténtica. Si bien la tecnología no sustituye estos elementos, puede complementarlos, multiplicar las posibilidades expresivas y abrir nuevas puertas para explorar el mundo.
    
        .bg-color-1.mb-5.p-4(data-aos="fade-left")
          p.mb-0 Se propone entonces mirar la tecnología como una herramienta al servicio del proyecto educativo, no como un fin en sí mismo. Lo valioso no es el dispositivo, sino el uso pedagógico que se le dé, la intención detrás de cada recurso y la capacidad del docente para adaptarlo a las necesidades del grupo (Fernández, 2020).
        p En el contexto de la educación infantil, existen múltiples herramientas que pueden integrarse de forma coherente con la etapa de desarrollo. Algunas de ellas son:
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/10.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="44%" y="73.5%" numero="+")
                h5 Canva o Genially
                p Ofrecen la posibilidad de crear material visual atractivo, como infografías, álbumes digitales, tableros de imágenes o cuentos interactivos.
    
              .bg-color-white.box-shadow.p-3(x="25%" y="36%" numero="+")
                h5 Padlet y Jamboard
                p Espacios colaborativos donde se pueden organizar ideas, dibujos, fotos o frases de los niños y sus familias.
    
              .bg-color-white.box-shadow.p-3(x="68%" y="71%" numero="+")
                h5 Kahoot y Quizizz
                p Adecuados para realizar juegos de repaso, preguntas lúdicas o pequeñas autoevaluaciones con los cuidadores.
    
              .bg-color-white.box-shadow.p-3(x="45%" y="15%" numero="+")
                h5 ScratchJr
                p Una introducción al pensamiento lógico, ideal para niños en transición hacia la primaria, fomentando el uso creativo de la tecnología.
    
              .bg-color-white.box-shadow.p-3(x="60%" y="7%" numero="+")
                h5 Grabadoras o cámaras del celular
                p Útiles para registrar producciones orales de los niños, canciones, dramatizaciones o entrevistas familiares.
              .bg-color-white.box-shadow.p-3(x="75.5%" y="42%" numero="+")
                h5 YouTube y Spotify
                p Permiten compartir cuentos narrados, canciones infantiles, juegos sonoros y experiencias culturales de todo el mundo.
    
    p.mb-5 Lo esencial es que estas herramientas se elijan con criterios claros, se adapten a los intereses del grupo y mantengan siempre la centralidad de la experiencia infantil, no de la tecnología misma.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Uno de los grandes aportes de la tecnología en contextos educativos es su capacidad de conectar realidades. Permite que el aula se abra al mundo, y que la escuela se acerque al hogar. Gracias a la virtualidad, durante emergencias sanitarias, desastres naturales o dificultades geográficas, fue posible mantener vínculos con los niños, adaptar contenidos y acompañar los procesos familiares.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p En territorios rurales o apartados, muchas experiencias de innovación han surgido a partir de tecnologías simples como el celular o la radio comunitaria. En contextos urbanos, se han desarrollado blogs escolares, encuentros sincrónicos y repositorios digitales que fortalecen la relación entre familias y maestros.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Pero también es cierto que la tecnología puede aislar si no se utiliza con propósito y mesura. El exceso de estímulos visuales, la exposición prolongada a pantallas o el uso de herramientas sin interacción real pueden afectar la atención, la comunicación y el bienestar emocional de los niños. Por eso, se insiste en que la innovación tecnológica debe ser afectiva, consciente, situada y equilibrada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Para que la tecnología educativa cumpla un papel transformador, se necesita un docente capaz de seleccionar, adaptar y aplicar recursos digitales con base en criterios pedagógicos. No se requiere ser experto en informática, sino estar abierto a aprender, a probar nuevas herramientas, a evaluar su impacto y a crear con ellas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Además, es fundamental enseñar con el ejemplo: usar la tecnología con ética, respetando los datos de los niños, valorando la producción propia, y cultivando una ciudadanía digital crítica desde la primera infancia. Esto significa formar niños y niñas que sepan expresarse con herramientas digitales, pero también que puedan desconectarse, dialogar cara a cara, cuidar su entorno y vivir en equilibrio con lo virtual.
    
    .bg-full-width.bg-color-3
      .p-4.p-md-5.mb-5
        p En educación infantil, el cuerpo, el juego, la naturaleza, el afecto y la palabra siguen siendo insustituibles. La tecnología no puede desplazar estos pilares. Su uso debe ser complementario, nunca excluyente.
        p.mb-5 Por eso, se recomienda:

        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center Priorizar el tiempo presencial, sensorial y relacional.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center Utilizar recursos digitales breves, con contenidos claros, y que inviten a crear o conversar.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/19.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center Acompañar siempre el uso tecnológico, con la presencia activa del adulto.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/20.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center Promover pausas, desconexión y reflexión sobre lo vivido.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/21.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center La innovación tecnológica real no está en lo más moderno, sino en lo más significativo.

    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/16.png', alt='')

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se está usando la tecnología como una herramienta de comunicación, creatividad y aprendizaje, o como un sustituto de la experiencia pedagógica real?
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿De qué manera se puede integrar la tecnología en las prácticas educativas respetando los ritmos, intereses y necesidades de los niños y las niñas?
    
    p.mb-5 Se invita a mirar la tecnología con sentido pedagógico, a elegirla con intención y a usarla con equilibrio. Porque toda herramienta que se pone al servicio del juego, del vínculo, del descubrimiento y del respeto por la infancia, se convierte en una verdadera innovación.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Metodologías activas y centradas en el estudiante
    
    p.mb-5 La transformación educativa comienza cuando se reconoce al estudiante como protagonista activo de su proceso de aprendizaje.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Metodologías activas y centradas en el estudiante
            p.mb-4(data-aos="fade-right") En el PDF <b>Metodologías activas y centradas en el estudiante</b>, se presentan enfoques pedagógicos que privilegian la participación, el juego, la colaboración y la exploración significativa en la educación infantil. Este material invita a repensar el rol docente, el diseño de experiencias de aula y las estrategias metodológicas, para construir una enseñanza más humana, inclusiva y coherente con las necesidades del siglo XXI.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Metodologías activas y centradas en el estudiante
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/24.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/38192" target="_blank" rel="noopener noreferrer") Guzmán Acuña, J. & Guzmán Acuña, T. D. J. (2009). Innovación educativa y tecnología: ( ed.). Editorial Miguel Ángel Porrúa.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59477 " target="_blank" rel="noopener noreferrer") Valdizán García, M. I. (2011). Mediateca escolar: un recurso para la innovación educativa: ( ed.). Editorial Universidad de Burgos. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/229730 " target="_blank" rel="noopener noreferrer") Cabero Almenara, J. (Coord.), Llorente Cejudo, C. (Coord.) & Palacios Rodríguez, A. (Coord.). (2023). Mejorando la enseñanza a través de la innovación educativa: (1 ed.). Dykinson. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://udearroba.udea.edu.co/blog/tag/innovacion-educativa/ " target="_blank" rel="noopener noreferrer") innovación educativa - Blog Ude@. (s.f.). Ude@ Educación Virtual. 



            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cSix7QgHB9k" target="_blank" rel="noopener noreferrer") Gaptain. Educación digital. (2020, 27 de febrero). INNOVACIÓN EDUCATIVA [Video]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
