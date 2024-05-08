<script>

import BrandBlock from "./BrandBlock.vue";
import ServiceBlock from "./ServiceBlock.vue";
import TravelSlider from "./TravelSlider.vue";
import TravelPointBlock from "./TravelPointBlock.vue";
import KeyFeatures from "./KeyFeatures.vue";
import TestinSlider from "./TestinSlider.vue";
import SubscribeBlock from "./SubscribeBlock.vue";
import FooterBlock from "./FooterBlock.vue";
export default {
  components:{
    FooterBlock,
    SubscribeBlock,
    ServiceBlock,
    BrandBlock,
    TravelSlider,
    TravelPointBlock,
    KeyFeatures,
    TestinSlider,

  },
  data(){
    return{
      dataSlide:[
        {
          id:1,
          img:require('../assets/TestinSlider/icon.png'),
          name:'Mark',
          surname:'Smith',
          role:'Travel Enthusiast',
          rating:5,
          content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots\n' +
              'in a piece of classical Latin literature from 45 BC.'
        },
        {
          id:2,
          img:require('../assets/TestinSlider/icon.png'),
          name:'Ender',
          surname:'Vels',
          role:'Travel Enthusiast',
          rating:3,
          content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots\n' +
              'in a piece of classical Latin literature from 45 BC.'
        },
        {
          id:3,
          img:require('../assets/TestinSlider/icon.png'),
          name:'Ruslan',
          surname:'Malinin',
          role:'Travel Enthusiast',
          rating:4,
          content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots\n' +
              'in a piece of classical Latin literature from 45 BC.'
        },
      ]
    }
  }

}
</script>

<template>
  <div class="home">
    <div class="home_title">
      <!--Upper Button-->
      <div class="home_title_explore">
        <h3>Explore the world</h3>
        <img src="../assets/homeBlock/work%201.svg" alt="">
      </div>
        <!--TitleWord-->
        <div class="home_title_title">
          <h1>Travel <span>top destination</span><br>
              of the world</h1>
        </div>
      <div class="home_title_title_two">
        <p>
          We always make our customer happy by<br> providing <br>
          as many choices as possible
        </p>
      </div>
      <div class="home_title_btn">
        <button>Get Started</button>
        <div class="home_title_btn_link">
          <img src="../assets/homeBlock/play-circle.5%201.svg" alt="play">
          <RouterLink to="/">Watch demo</RouterLink>
        </div>
      </div>
    </div>

    <div class="homePages">
      <div class="homePages_map">
        <img src="../assets/homeBlock/homePages/map.svg" alt="map">
      </div>
      <div class="homePages_photo">
        <div class="homePages_photo_in">
          <img src="../assets/homeBlock/homePages/Rectangle%201.png" alt="Photo1">
          <img src="../assets/homeBlock/homePages/Rectangle%202.png" alt="Photo2">
        </div>
        <img src="../assets/homeBlock/homePages/Rectangle%203.png" alt="Photo3">
      </div>
      <div class="homePages_telegram_icon">
        <img src="../assets/homeBlock/homePages/Frame%2016.svg" alt="">
      </div>
    </div>

  </div>
  <BrandBlock/>
  <ServiceBlock/>
  <TravelSlider/>
  <TravelPointBlock/>
  <KeyFeatures/>
  <TestinSlider :dataSlide="dataSlide" />
  <SubscribeBlock/>
  <FooterBlock/>s

</template>

<style>
@import "../style/homeBlocck/home.css";
</style>