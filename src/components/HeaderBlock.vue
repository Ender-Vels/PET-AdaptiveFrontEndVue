<script setup>

</script>

<template>
<div class="header">
  <div class="header_burger">
    <button><img src="../assets/header/burger.png" alt="burger"></button>
  </div>
  <div class="header_logo">
      <RouterLink class="header_logo_logo" to="/"><img src="../assets/header/logo.svg" alt="logo"> </RouterLink>
      <RouterLink class="header_logo_title" to="/"><h2>Travlog</h2></RouterLink>
  </div>
  <div class="header_nav">
    <ul class="header_nav_navigation">
      <li>
        <RouterLink  to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink  to="/">Discover</RouterLink>
      </li>
      <li>
        <RouterLink  to="/">Special Deals</RouterLink>
      </li>
      <li>
        <RouterLink  to="/">Contact</RouterLink>
      </li>
    </ul>
  </div>
  <div class="header_authorize">
    <RouterLink to="/">Login in</RouterLink>
    <RouterLink to="/">Sign Up</RouterLink>
  </div>
</div>

</template>

<style>
@import "../style/header/header.css";
@import "../style/header/adptiveHeader.css";
</style>