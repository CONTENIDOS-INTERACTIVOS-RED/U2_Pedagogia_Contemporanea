<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. <em>Homeschool</em> (Educación en casa)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema3/1.svg', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p(data-aos="fade-up") Bienvenidos al fascinante mundo del Homeschool: cuando el hogar se convierte en aula.
            p.mb-0 En los últimos años, se ha fortalecido una tendencia educativa que invita a repensar el lugar donde ocurre el aprendizaje: el homeschool o educación en casa. Este modelo ha despertado el interés de muchas familias que buscan alternativas a la escolarización tradicional, ya sea por convicciones pedagógicas, razones culturales, condiciones de salud o simplemente por el deseo de acompañar más de cerca el proceso de formación de sus hijos.
    
    p.mb-5 Pero:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué significa realmente educar en casa? 
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué implica para el desarrollo de los niños y las niñas? 
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo se transforma el rol del adulto cuando asume la responsabilidad de enseñar desde el entorno familiar? 
    
    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/3.png', alt='')
        .col-lg
          .p-4
            p(data-aos="fade-up") Estas preguntas abren un universo de posibilidades y reflexiones que resultan especialmente valiosas para quienes se están formando como educadores infantiles.
            p.mb-0 Se invita, entonces, a explorar este enfoque con una mirada crítica, comprensiva y abierta, reconociendo sus fundamentos, sus prácticas, sus beneficios y sus tensiones. Porque conocer distintas formas de educar amplía la mirada pedagógica, y permite construir propuestas más flexibles, respetuosas y contextualizadas.
    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Fundamentos, ventajas y retos
    
    p.mb-5 El <em>homeschool</em> o educación en casa ha emergido como una alternativa educativa cada vez más considerada por las familias que buscan experiencias de aprendizaje personalizadas, flexibles y coherentes con sus valores y realidades.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Fundamentos, ventajas y retos
            p.mb-4(data-aos="fade-right") En el PDF <b>Fundamentos, ventajas y retos</b>, se analizan los principios pedagógicos que sustentan esta modalidad, sus beneficios potenciales para el desarrollo integral de los niños y niñas, así como los desafíos que enfrenta en su implementación. A través de esta lectura, se invita a reflexionar sobre cómo el acto educativo puede trascender las paredes del aula tradicional y abrirse a nuevas formas de aprender, convivir y construir conocimiento desde el entorno familiar.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Fundamentos, ventajas y retos
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Marco normativo y experiencias en América Latina
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Es legal educar en casa en nuestros países? 
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo se regula esta modalidad en la región?

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 Reflexionar sobre estas preguntas resulta clave al abordar el fenómeno del <em>homeschool</em>, especialmente en contextos donde predomina una tradición escolar presencial y estandarizada. Si bien el interés por la educación en casa ha crecido significativamente en América Latina, especialmente después de la pandemia, el respaldo normativo no ha evolucionado al mismo ritmo. Esto genera escenarios diversos y, en muchos casos, contradictorios: mientras algunas familias ejercen su derecho a educar desde el hogar, otros sectores cuestionan la legalidad o la viabilidad pedagógica de esta elección.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Por ello, se hace necesario conocer y comprender el marco legal que rige esta modalidad en los distintos países latinoamericanos, así como analizar algunas de las experiencias más representativas que dan cuenta de cómo las familias, en la práctica, enfrentan los desafíos y ejercen su libertad educativa con responsabilidad y compromiso.

    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center.px-5
            .col-lg-8(data-aos="fade-left").p-5
              p En América Latina, la mayoría de las constituciones nacionales reconocen el derecho a la educación como un derecho fundamental de todos los ciudadanos. Sin embargo, en muchos casos este derecho se ha asociado exclusivamente con la escolarización tradicional, es decir, con la asistencia a una institución formal. Esto ha generado una interpretación limitada del acto educativo, dejando por fuera modalidades no convencionales como el homeschool.
            .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 La situación jurídica del <em>homeschool</em> varía, según el país:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Situación jurídica por país
    .tabla-a.color-acento-botones.pst
      table
        thead
          tr
            th.text-center.text-white.bg-color-5 País
            th.text-center.text-white.bg-color-5 Situación legal
        tbody.bg-color-11
          tr
            th México
            td No existe una Ley específica, pero se interpreta que la libertad de enseñanza (Artículo 3°) lo permite. Algunas familias educan en casa y luego validan mediante exámenes.
          tr
            th Colombia
            td La Ley General de Educación, exige escolarización formal, pero existen mecanismos de validación por ciclos. El homeschool no está legalmente reconocido, aunque hay experiencias familiares activas.
          tr
            th Argentina
            td La Ley exige la escolarización obligatoria. Sin embargo, hay familias que practican homeschool de forma discreta y con algunos intentos de regulación.
          tr
            th Chile
            td Es uno de los países que regula el homeschool. La Ley General de Educación permite rendir exámenes libres para certificar aprendizajes.
          tr
            th Brasil
            td En el 2022 se aprobó una Ley nacional que regula el homeschool, aunque su implementación ha sido gradual y con controversia.
          tr
            th Perú
            td La Legislación exige asistencia escolar. No existe regulación específica del homeschool, pero hay experiencias informales, sobre todo en zonas rurales.

    .bg-full-width.bg-color-12
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-3 Como puede observarse, la región se encuentra en una etapa de transición: ni el reconocimiento legal es generalizado, ni las restricciones son absolutas. Este panorama genera un llamado urgente a actualizar los marcos normativos, garantizar la calidad educativa y proteger los derechos de niños, niñas y adolescentes, sin desconocer la autonomía de las familias.
        
            .bg-color-1.p-5(data-aos="fade-left")
              p.mb-0 A pesar de los vacíos normativos, el homeschool ha venido consolidándose en América Latina como una práctica educativa alternativa, con redes de familias, colectivos, recursos digitales y experiencias compartidas que fortalecen su legitimidad social.
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/9.svg" alt="" style="width: 90px")
              h5.text-center México
              p.mb-0.text-center En México, existen asociaciones como "Educar en Familia", que brindan asesoría legal, curricular y emocional a quienes deciden optar por esta vía.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/10.svg" alt="" style="width: 90px")
              h5.text-center Chile
              p.mb-0.text-center En Chile, el sistema de exámenes libres ha permitido a muchas familias legitimar esta opción con respaldo institucional.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/11.svg" alt="" style="width: 90px")
              h5.text-center Colombia
              p.mb-0.text-center En Colombia, aunque el Estado no lo regula, existen experiencias de validación por ciclos y propuestas de "unschooling" en zonas rurales y urbanas.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/12.svg" alt="" style="width: 90px")
              h5.text-center Brasil
              p.mb-0.text-center En Brasil, la legislación reciente ha impulsado la creación de comunidades educativas domiciliarias y programas híbridos con escuelas privadas.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          p.mb-0 Estas experiencias muestran que la educación en casa no responde únicamente a un deseo de aislamiento o rechazo del sistema escolar, sino a una búsqueda consciente de flexibilidad, personalización del aprendizaje y bienestar emocional. En muchos casos, las familias que educan en casa lo hacen con criterios pedagógicos claros, asesoramiento profesional y responsabilidad afectiva.

        p(data-aos="fade-left") Desde la formación en Educación Infantil, es fundamental que se reconozca la existencia del homeschool no solo como un dato legal o una moda emergente, sino como una manifestación concreta de la diversidad educativa contemporánea. Esto implica:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/14.png")
            .col-lg-7
              p Comprender que el aprendizaje no está limitado a un aula física, sino que puede ocurrir en múltiples entornos, con distintos actores y metodologías.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/15.png")
            .col-lg-7
              p Respetar la autonomía de las familias, sin prejuicios ni imposiciones, reconociendo sus saberes, valores y capacidades.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/16.png")
            .col-lg-7
              p Participar activamente en procesos de acompañamiento, orientación o validación de aprendizajes, desde una mirada pedagógica, ética y empática.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7
              p Promover el diálogo entre escuela, familia y Estado, para garantizar que todos los niños y las niñas, sin importar la modalidad educativa, accedan a experiencias significativas, afectivas y de calidad.

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white El <em>homeschool</em>, entonces, interpela a las instituciones educativas a transformarse, flexibilizarse y aprender a coexistir con otras formas de enseñar y aprender.

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema3/18.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué desafíos éticos y pedagógicos se presentan cuando una familia decide educar en casa?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo se puede garantizar la calidad educativa en el <em>homeschool</em> sin caer en la vigilancia o la desconfianza?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cuál es el rol de las universidades y los docentes frente a la expansión de estas modalidades no convencionales?

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] La personalización del aprendizaje en casa
    
    p.mb-5 La personalización del aprendizaje es uno de los pilares más significativos de la educación en casa, ya que permite adaptar el proceso educativo a los intereses, ritmos y estilos de cada niño o niña.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") La personalización del aprendizaje en casa
            p.mb-4(data-aos="fade-right") En el PDF <b>La personalización del aprendizaje en casa</b>, se exploran los fundamentos, estrategias y beneficios de este enfoque, mostrando cómo el homeschool se convierte en un escenario privilegiado para construir experiencias formativas centradas en la persona. A través de propuestas pedagógicas flexibles y ambientes afectivos, esta modalidad revela nuevas posibilidades para transformar la enseñanza, ofreciendo claves que también pueden enriquecer las prácticas escolares tradicionales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> La personalización del aprendizaje en casa
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/19.png', alt='')



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://digiuv.villanueva.edu/handle/20.500.12766/309 " target="_blank" rel="noopener noreferrer") Valero Estarellas, M. J. (2013). Homeschooling o Educación en casa. Ilegalidad o derecho de los padres. Anuario de derecho eclesiástico del Estado, (29), 689-710. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.bibdigital.uccor.edu.ar/index.php/adiv/article/view/3232 " target="_blank" rel="noopener noreferrer") Quiñones, J. A. (2018). Del concepto de la" educación en casa" a la" educación en familia" en Colombia. Anuario digital de investigación educativa, (1). 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.homeschoolingmedellin.com/blog-home-schooling/ " target="_blank" rel="noopener noreferrer") Blog home school. (s.f.). Home Schooling Medellín. 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=oYxVJYhwfXc " target="_blank" rel="noopener noreferrer") FUNDESTEAM. (2020, 8 de mayo). SISTEMA HOMESCHOOL Educación en casa [Video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
