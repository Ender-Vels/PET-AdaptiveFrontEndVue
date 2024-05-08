<script>
import { Carousel, Navigation,Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default {
  components: {
    Carousel,
    Slide,
    Navigation


  },
  data(){
    return{
      sliderData:[

        {
          id:1,
          img:require('../assets/Slider/slide1.png'),
          title:'Best Tour Guide',
          description:'What looked like a small patch of purple grass, above five feet.',

        },
        {
          id:2,
          img:require('../assets/Slider/slide2.png'),
          title:'Easy Booking',
          description:'Square, was moving across the sand in their direction.',

        },
        {
          id:3,
          img:require('../assets/Slider/slide3.png'),
          title:'Weather Forecast',
          description:'What looked like a small patch of purple grass, above five feet.',

        },

      ]
    }
  }
}
</script>

<template>
<div class="service">
  <div class="service_title">
    <h3>SERVICES</h3>
    <h1>Our top value categories for you</h1>
  </div>
    <div class="service_slider">
      <Carousel :items-to-show="3" :wrap-around="true">
        <Slide class="slide" v-for="slide in sliderData" :key="slide.id">
          <div class="carousel__item">
            <div class="carousel__item_img">
                <img :src="slide.img" alt="slideImg">
            </div>
            <div class="carousel__item_title">
              <h3>{{slide.title}}</h3>
            </div>
            <div class="carousel__item_description">
              <p>{{slide.description}}</p>
            </div>
          </div>
        </Slide>
        <template >
          <Navigation />
        </template>
      </Carousel>
    </div>

    <div class="adaptiveService" v-for="slide in sliderData" :key="slide.id">
        <div class="adaptiveService_slide">
            <div class="adaptiveService_slide_img">
              <img :src="slide.img" alt="slide">
            </div>
          <div class="adaptiveService_slide_title">
              <h3>{{slide.title}}</h3>
          </div>
          <div class="adaptiveService_slide_description">
            <h3>{{slide.description}}</h3>
          </div>
        </div>
    </div>
</div>
</template>

<style>
@import "../style/ServiceBlock/ServiceBlock.css";
@import "../style/ServiceBlock/adptiveSevice.css";
</style>