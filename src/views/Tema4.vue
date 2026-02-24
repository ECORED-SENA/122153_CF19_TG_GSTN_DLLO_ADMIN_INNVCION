<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Comunicación empresarial
      
      .row.justify-content-center.mb-4
        .col-md-5
          figure.mw-sm-350px
            img(src='@/assets/curso/temas/texto_destacado/img17.png', alt='imagen relacionada')
        .col-md-7      
          p Parte importante de todo el proceso de capacitación es la comunicación organizacional, la cual se establece en todas las instituciones y hace parte de la cultura corporativa; está documentada y organizada por medio de un plan de comunicaciones y, a partir de ella, se puede dar entre todos los niveles jerárquicos de la empresa de manera fluida y efectiva. 
      
      p.mb-4 Por lo general pueden existir dos tipos de comunicación:

      TabsC.color-acento-contenido.mb-4
        .py-3.py-md-4(titulo="Comunicación formal")
          .row.justify-content-around.align-items-center
            .col-md-8.mb-4.mb-md-0
              p La propia empresa establece, genera, o manipula esta información. Se estructura bajo las políticas y metas de la organización, debe ser controlada y estar sujeta a normas o reglas.
              .tarjeta.color-fondo.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/texto_destacado/icono1.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p Para ampliar la información, se invita a revisar el material complementario donde encontrará el video <strong>“Tipos de comunicación organizacional | Comunicación empresarial”</strong>.
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=eb0kP8iMpWI')" target="_blank")
                          span(style="color: white") ver video
                          i.fas.fa-angle-right
            .col-md-4
              figure
                img(data-aos="zoom-out-up" src='@/assets/curso/temas/texto_destacado/img18.svg', alt='imagen representativa')
          
        .py-3.py-md-4(titulo="Comunicación informal")
          .row.justify-content-around.align-items-center
            .col-md-8.mb-4.mb-md-0
              p Esta clase de comunicación se basa en la naturalidad, más no en la jerarquía; nace de la interacción social entre los miembros y del resultado de los vínculos que se crean dentro de la organización.
            .col-md-4
              figure
                img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img19.svg', alt='imagen representativa')

      h3.mb-4.mt-4
        i.fas.fa-square.me-3.cuadrado
        | Comunicación interna y externa
      
      p.mb-4 La comunicación interna hace mención a toda la información que se genera, manipula o utiliza dentro de la organización; es considerada como una herramienta gerencial aplicada en todos los niveles jerárquicos con el propósito de alcanzar la totalidad de los objetivos estratégicos, misionales, operativos, culturales y comportamentales de la empresa. Su desarrollo se da de acuerdo con la aplicación del “proceso de comunicación organizacional formal”, como se presenta en la Figura 5:

      .mx-auto.col-md-12.mb-4.mt-4
      .titulo-sexto.color-acento-contenido
        h5 Figura 5 
        br
        span.fst-italic Proceso de comunicación organizacional formal

      figure.mb-4
          img(data-aos="flip-left" src='@/assets/curso/temas/figuras/2.svg', alt='diagrama')  
      
      p.mb-4 Las principales funciones de la comunicación interna son:

      ol.lista-ol
        li 
          span.fas.fa-check(style='color: #f85316')
          |Instaurar, perfeccionar o consolidar la imagen corporativa de la organización.
        li 
          span.fas.fa-check(style='color: #f85316')
          | Apoyar al logro de los objetivos, planes o programas y proyectos.
        li 
          span.fas.fa-check(style='color: #f85316')
          | Reducir los conflictos y los malos climas organizacionales.
        li 
          span.fas.fa-check(style='color: #f85316')
          | Instaurar espacios de libre expresión para que los empleados puedan brindar sus aportes y opiniones.
        li 
          span.fas.fa-check(style='color: #f85316')
          | Mantener una información actualizada y veraz para los integrantes de la organización.
        li 
          span.fas.fa-check(style='color: #f85316')
          | Promover la buena comunicación entre todos los participantes y niveles de la empresa.
      
      p.mb-4 La comunicación externa se conoce con el nombre de “comunicación comercial” y hace referencia a todo el intercambio o flujo de información que manipula la organización; está destinada para los públicos externos, sea de manera directa o a través de intermediarios, con el objetivo de mantener o mejorar sus relaciones comunitarias, proyectar una imagen corporativa favorable y promover los productos o servicios.

      .row.justify-content-center.mb-4
        .col-md-10
          .cajon.color-acento-botones.color-fondo-secundario.p-4
            p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
      



  
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
