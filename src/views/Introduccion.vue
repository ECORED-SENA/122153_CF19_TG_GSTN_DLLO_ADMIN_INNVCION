<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá que el talento humano se define como la sumatoria de competencias y habilidades que posee una persona y que le permiten generar valor agregado a su trabajo y contribuir entonces al fortalecimiento y crecimiento de la entidad a la cual presta sus servicios. El talento humano de una organización es tan importante, como su misma marca, producto o infraestructura, porque a partir del aporte de sus colaboradores, se constituye y mantiene la organización.
            br
            br
            p Por consiguiente, toda empresa debe establecer procedimientos acertados para atraer, seleccionar y fortalecer el talento de sus colaboradores y, de esta manera, construir un ambiente laboral fuerte y competente; dentro de su programa de gestión al trabajador, debe originar procesos para mejorar, fortalecer, capacitar y motivar al trabajador en el desarrollo de sus habilidades. 
    
    p.mb-4 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Tu_Wc5UgZXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
