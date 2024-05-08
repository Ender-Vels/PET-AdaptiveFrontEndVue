<script >
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props:{
    dataSlide:Array
  },
  data(){
    return{

    }
  }
}
</script>

<template>
  <div class="slider">
    <Carousel>
      <Slide v-for="slide in dataSlide" :key="slide">
        <div class="carousel__iteming">
            <div class="carousel__iteming_title">
                <h3>Testimonials</h3>
              <h1>Trust our clients</h1>
            </div>
            <div class="carousel__iteming_client">
              <div class="carousel__iteming_client_avatar">
                <img src="../assets/TestinSlider/icon.png" alt="avatar">
              </div>
              <div class="carousel__iteming_client_info">
                <div class="carousel__iteming_client_info_about">
                  <h3>{{slide.name}} {{slide.surname}}</h3><span>/{{slide.role}}</span>
                </div>
                <div class="carousel__iteming_client_info_rating" v-for="star in slide.rating" :key="star">
                    
                  <img src="../assets/TestinSlider/star.png" alt="star">

                </div>
                <div class="carousel__iteming_client_info_description">
                  <p>{{slide.content}}</p>
                </div>
              </div>
    
            </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style >
@import "../style/TestinSlider/TestinSlider.css";
</style>