<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Salud ocupacional
    
    .row.justify-content-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/texto_destacado/img14.png', alt='')
      .col-lg-7      
        p Al hablar de salud ocupacional, vamos más allá del concepto propio de la salud y ahora lo enfocamos en un área o condición específica; como su nombre lo dice, “la ocupación”, es aquella labor que realizamos constantemente y que llamamos “trabajo”. Entonces, la salud ocupacional dentro de una organización, se refiere a toda actividad o acción preventiva que mitigue los riesgos que puedan afectar, de alguna manera, la salud de los colaboradores; para tal efecto, en algunas organizaciones aplican programas de control médico, como estrategias de monitoreo y control de la salud de los colaboradores.
    
    p.mb-4 Algunas de las actividades propias de los programas preventivos de salud ocupacional, entre otros, son:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-6.col-lg-4.col-md-6.mb-3 
        .tarjeta.h-100.p-md-4.p-3(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-9.col-md-7.col-lg-5.mb-3
              img(src='@/assets/curso/temas/tarjetas/avatar10.svg' alt='')      
          p.text-center Exámenes médicos (de ingreso o periódicos).
      .col-6.col-lg-4.col-md-6.mb-3
        .tarjeta.h-100.p-md-4.p-3(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-9.col-md-7.col-lg-5.mb-3
              img(src='@/assets/curso/temas/tarjetas/avatar11.svg' alt='')    
          p.text-center Conferencias de medicina preventiva.
      .col-6.col-lg-4.col-md-6.mb-3
        .tarjeta.h-100.p-md-4.p-3(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-9.col-md-7.col-lg-5.mb-3
              img(src='@/assets/curso/temas/tarjetas/avatar12.svg' alt='')
          p.text-center Mapa de riesgos ambientales.    
      .col-6.col-lg-4.col-md-6.mb-3
        .tarjeta.h-100.p-md-4.p-3(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-9.col-md-7.col-lg-5.mb-3
              img(src='@/assets/curso/temas/tarjetas/avatar13.svg' alt='')      
          p.text-center Mapa de riesgo psicosocial.
      .col-6.col-lg-4.col-md-6.mb-3
        .tarjeta.h-100.p-md-4.p-3(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-9.col-md-7.col-lg-5.mb-3
              img(src='@/assets/curso/temas/tarjetas/avatar14.svg' alt='')    
          p.text-center Programas de seguridad laboral.
      .col-6.col-lg-4.col-md-6.mb-3
        .tarjeta.h-100.p-md-4.p-3(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-9.col-md-7.col-lg-5.mb-3
              img(src='@/assets/curso/temas/tarjetas/avatar15.svg' alt='')
          p.text-center Exámenes complementarios para identificar la calidad de vida de los colaboradores.
    
    p.mb-4 Existen diferentes factores que pueden afectar directa o indirectamente al trabajador en los ambientes laborales.  Entre ellos encontramos los siguientes:

    .row.justify-content-center.mb-4
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row.justify-content-center(titulo="Ambiente físico")
            .col-md-11
              ol.lista-ol.fa-lista.mb-0
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mv-0 Iluminación adecuada.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Ventilación adecuada.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Mobiliario adecuado (sillas, escritorios). 
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Temperatura adecuada.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Equipo de trabajo adecuado.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Nivel y control de ruidos, adecuados.
          .row.justify-content-center(titulo="Ambiente psicosocial")
            .col-md-11
              ol.lista-ol.fa-lista.mb-0
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Relaciones humanas agradables.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Estilo de liderazgo participativo y democrático.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Adecuada estructura en los canales de comunicación.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Eliminación de posibles fuentes de estrés.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Actividades agradables y motivadoras.
                li 
                  span.fas.fa-check(style='color: #f85316')
                  span.mb-0 Buena relación con sus compañeros.
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img15.png', alt='')
    
    p.mb-4 Ahora, el concepto propio de los factores psicosociales se determina en aquellas condiciones o factores que se encuentran en el ambiente laboral y que su efecto va directamente relacionado con la organización y el contenido del trabajo; por lo tanto, tienen la capacidad de afectar el bienestar y la salud del trabajador. Estos factores son el origen de actitudes desfavorables que pueden adoptar los trabajadores y que, por obvias razones, afectarán su desempeño y el funcionamiento de la organización.

    p.mb-4 Algunos de estos factores pueden ser:

    .row.justify-content-center.mb-4
      .col-6.col-md-4.col-lg-2.mb-3
        .tarjeta.p-4.h-100(style='background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-9.col-md-7.col-lg-9
              img(src='@/assets/curso/temas/tarjetas/avatar16.svg', alt='')
          p.text-center Estrés
      .col-6.col-md-4.col-lg-2.mb-3
        .tarjeta.p-4.h-100(style='background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-9.col-md-7.col-lg-9
              img(src='@/assets/curso/temas/tarjetas/avatar17.svg', alt='')
          p.text-center Sobrecarga laboral
      .col-6.col-md-4.col-lg-2.mb-3
        .tarjeta.p-4.h-100(style='background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-9.col-md-7.col-lg-9
              img(src='@/assets/curso/temas/tarjetas/avatar18.svg', alt='')
          p.text-center Insatisfacción
      .col-6.col-md-4.col-lg-2.mb-3
        .tarjeta.p-4.h-100(style='background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-9.col-md-7.col-lg-9
              img(src='@/assets/curso/temas/tarjetas/avatar19.svg', alt='')
          p.text-center Desmotivación
      .col-6.col-md-4.col-lg-2.mb-3
        .tarjeta.p-4.h-100(style='background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-9.col-md-7.col-lg-9
              img(src='@/assets/curso/temas/tarjetas/avatar20.svg', alt='')
          p.text-center Carga y fatiga mental

    p.mb-4 Es importante aclarar que, ante situaciones de presión o estrés, no todos los colaboradores desarrollarán las mismas condiciones o reacciones; cada individuo, dependiendo de su personalidad, expectativas, vulnerabilidad y capacidad, podrán ser afectados o no, por los diferentes factores.

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(style="background-color: #E8E8E8")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-5.mb-4.mb-lg-0(style="background-color: #E8E8E8")
          h3.mb-0 Uno de los factores psicosociales más comunes que padece un 54 % de los trabajadores de una organización, es el estrés; nos referimos a un conjunto de reacciones físicas que se desencadenan por estímulos o situaciones de tensión, sean laborales o familiares. Algunas situaciones que dentro de la organización pueden generar estos síntomas son:
        .col-lg-7
          .bloque-texto-a__texto.p-4
            ol.lista-ol.fa-lista.mb-0
              li 
                span.fas.fa-check(style='color: #f85316')
                span.mb-0 La relación entre jefe/trabajador.
              li 
                span.fas.fa-check(style='color: #f85316')
                span.mb-0 La desconfianza.
              li 
                span.fas.fa-check(style='color: #f85316')
                span.mb-0 La presión por las cargas exageradas de trabajo.
              li 
                span.fas.fa-check(style='color: #f85316')
                span.mb-0 El autoritarismo del jefe.
              li 
                span.fas.fa-check(style='color: #f85316')
                span.mb-0 El aburrimiento.
              li 
                span.fas.fa-check(style='color: #f85316')
                span.mb-0 La monotonía.
              li 
                span.fas.fa-check(style='color: #f85316')
                span.mb-0 La insatisfacción.
              li.mb-0
                span.fas.fa-check(style='color: #f85316')
                span.mb-0 La falta de estímulo, entre otras cosas.

    p.mb-4 Las consecuencias del estrés para la organización son altamente desfavorables, interfieren en el funcionamiento, cantidad y calidad del trabajo, incrementan el ausentismo, la rotación, las incapacidades, reclamaciones, insatisfacciones por parte de los colaboradores. Según Chiavenato (2009), existen dos fuentes principales en el estrés laboral:
    
    .row.justify-content-center.mb-5
      .col-md-6.col-lg-5.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tarjetas/avatar21.svg' alt='')
          .tarjeta.color-fondo-terciario.w-100
            .p-4
              h4.text-center Ambientales
              ul.lista-ul--color.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Falta de tranquilidad en el trabajo. 
                li
                  i.fas.fa-check
                  span.mb-0 Inseguridad en el trabajo.
                li
                  i.fas.fa-check
                  span.mb-0 Cantidad de clientes internos y externos.
                li
                  i.fas.fa-check
                  span.mb-0 Ruido de máquinas, teléfonos, personas que conversan.
                li
                  i.fas.fa-check
                  span.mb-0 Espacios reducidos (hacinamientos).
                li
                  i.fas.fa-check
                  span.mb-0 Equipos de trabajo obsoletos.
      .col-md-6.col-lg-5.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tarjetas/avatar22.svg' alt='')
          .tarjeta.bg1.w-100
            .p-4
              h4.text-center Personales
              ul.lista-ul--color.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Problemas familiares.
                li
                  i.fas.fa-check
                  span.mb-0 Malos hábitos alimenticios.
                li
                  i.fas.fa-check
                  span.mb-0 Problemas económicos.
                li 
                  i.fas.fa-check
                  span.mb-0 Baja autoestima.
                li
                  i.fas.fa-check
                  span.mb-0 Consumo de drogas.
                li
                  i.fas.fa-check
                  span.mb-0 Inestabilidad emocional.
    
    .row.justify-content-center
      .col-lg-5.col-md-8.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/texto_destacado/img16.png', alt='')
      .col-lg-7      
        p Sin duda alguna, la aplicación en la empresa de todos los programas que encierra la salud ocupacional, genera un ambiente de satisfacción y bienestar al trabajador, desencadenando resultados favorables para la empresa. 
        p Podemos entonces concluir que: la estructura de un programa de salud ocupacional dentro de la empresa, más que generar personas satisfechas con un concepto positivo en su calidad de vida y un provechoso desarrollo integral, aumenta la eficiencia, calidad y rentabilidad de la misma.





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
