<template>
    <nav>
    <router-link class="title" to="/"> <div class="left">Sam' <div class="sp">Space</div></div></router-link>
        <div class="right" >
            <ul :class="{ active: isActive }">
                <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
                <li><router-link to="/about" @click="toggleMenu">About</router-link></li>
                <li><router-link to="/service" @click="toggleMenu">Services</router-link></li>
                <li><router-link to="/projects" @click="toggleMenu">Projects</router-link></li>
                <li><router-link to="/contact" @click="toggleMenu">Contact Me</router-link></li>
            </ul>
        </div>
        <div class="hamburger"  @click="toggleMenu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>


    </nav>
</template>
  
<script>
export default {
    name: 'NavbarComp',
    data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
    background: rgb(11, 11, 61);
    text-decoration: none;
    font-size: 1.7rem;
    display: flex;
    justify-content: space-between;
}

.title{
    text-decoration: none;
}

.sp {
    color: aqua;
    background: rgb(11, 11, 61);
}

nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    height: 80px;
    background: rgb(11, 11, 61);
    color: aliceblue;

}

nav ul {
    display: flex;
    justify-content: center;
    background: rgb(11, 11, 61)
}

nav ul li {
    list-style: none;
    margin: 0 40px;
    /* color: azure; */

}

nav ul li a {
    text-decoration: none;
    color: aliceblue;
}

nav ul li a:hover {
    text-decoration: none;
    color: rgb(87, 123, 154);
}

a {
    background: rgb(11, 11, 61)
}

li {
    background: rgb(11, 11, 61)
}

.hamburger{
    display: none;
    /* flex-direction: column; */
    cursor: pointer;
}

.bar{
    display: block;
    width:25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: aliceblue;
}


@media(max-width: 820px) {
     .hamburger{
        display: block;
        background:rgb(11, 11, 61);
     }

     .hamburger.active .bar:nth-child(2){
        opacity: 0;
     }
     .hamburger.active .bar:nth-child(1){
        transform: translate(8px) rotate(45deg);
     }

     .hamburger.active .bar:nth-child(3){
        transform: translate(-8px) rotate(-45deg);
     }

     nav ul{
        
        position: fixed;
        left: -100%;
        top: 70px;
        gap: 0;
        flex-direction: column;
        background:rgb(11, 11, 61);
        width: 100%;
        text-align: center;
        transition: 0,3s;

     }

     nav ul li{
        margin: 16px 0;
     }

     nav ul.active{
        left:0;
     }

}
</style>