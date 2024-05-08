<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data(){
    return{
      dataSlider:[
        {
          id:1,
          img:require('../assets/TravelingSlider/Slide1.png'),
          name:'Paradise Beach, Bantayan Island',
          price:'$550.16',
          location:'Rome, Italy',
          rating:4.8,
          starImg:require('../assets/TravelingSlider/star.png')
        },
        {
          id:2,
          img:require('../assets/TravelingSlider/Slide2.png'),
          name:'Ocean with full of Colors',
          price:'$20.99',
          location:'Maldives',
          rating:4.5,
          starImg:require('../assets/TravelingSlider/star.png')
        },
        {
          id:3,
          img:require('../assets/TravelingSlider/Slide3.png'),
          name:'Mountain View, Above the cloud',
          price:'$150.99',
          location:'United Arab Emeries ',
          rating:5.0,
          starImg:require('../assets/TravelingSlider/star.png')
        },
      ]

    }
  }
}
</script>

<template>
<div class="traveling">
  <div class="traveling_header">
    <div class="traveling_header_title">
      <h3>Top Destination</h3>
      <h1> Explore top destination</h1>
    </div>
    <div class="traveling_header_btn">
        <button><img src="../assets/btn/arrow-left.png" alt="back"> </button>
      <button><img src="../assets/btn/arrow-right.png" alt="back"></button>
    </div>

  </div>
  <div class="traveling_Slider">
    <Carousel :items-to-show="2.5" :wrap-around="true">
      <Slide v-for="slide in dataSlider" :key="slide.id">
        <div class="carousel__items">
          <div class="carousel__items_img">
           <img :src="slide.img" alt="slide">
          </div>
          <div class="carousel__items_descriptions">
            <div class="carousel__items_descriptions-description">
              <div class="carousel__items_descriptions-description_title">
                  <h3>{{slide.name}}</h3>
                <h3>{{slide.price}}</h3>
              </div>
            </div>
            <div class="carousel__items_descriptions_location">
              <span>{{slide.location}}</span>
            </div>
            <div class="carousel__items_descriptions_rating">
              <span>{{slide.rating}}</span> <img src="../assets/TravelingSlider/star.png" alt="star">
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>

  <div class="slides" v-for="slide in dataSlider">

    <div class="slides_slide">
      <div class="slides_slide_img">
        <img :src="slide.img" alt="slide">
      </div>
      <div class="slides_slide_content">
          <div class="slides_slide_content_price">
            <span> {{slide.price}}</span>
          </div>
        <div class="slides_slide_content_name">
            <p>{{slide.name}}</p>
        </div>
        <div class="slides_slide_content_location">
          <span>{{slide.location}}</span>
        </div>
        <div class="slides_slide_content_rating">
          <span>{{slide.rating}}</span><img :src="slide.starImg" alt="star">
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<style>
@import "../style/TravelSlider/traveling.css";
@import "../style/TravelSlider/adaptiveTraveling.css";
</style>