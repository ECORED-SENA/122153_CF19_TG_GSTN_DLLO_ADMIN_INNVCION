<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 El siguiente mapa integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="A continuación, se presenta la síntesis del componente formativo: Evaluación, capacitación y permanencia del talento humano donde se encuentra la evaluación que se compone por métodos de evaluación e indicadores de gestión. Bienestar y calidad de vida donde se encuentra componentes de calidad de vida y programas de bienestar. Salud ocupacional donde sus factores laborales y factores psicosociales. Capacitación donde se encuentran objetivos, elementos, técnicas y escenarios y proceso. Comunicación empresarial el que se compone de comunicación externa, comunicación interna, tipos. ")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
