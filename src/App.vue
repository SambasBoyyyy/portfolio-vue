<template>
  <Navbar/>
  <router-view v-slot="{Component}">
    <transition name="router" mode="out-in">
    <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Navbar from '@/components/Navbar.vue';


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  background: rgb(0, 0, 47);
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Rubik+Bubbles&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  margin-top: 60px; */
  color: whitesmoke;
}

.router-enter-from{
  opacity: 0;
  transform: translateY(100px);
}

.router-enter-active{
  transition: all 0.4s ease-out;
}

.router-leave-to{
  opacity: 0;
  transform: translateY(-100px);
}

.router-enter-active{
  transition: all 0.4s ease-in;
}

</style>
