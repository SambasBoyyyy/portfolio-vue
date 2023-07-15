<template>
    <main>

        <section class="firstsection">
            <div class="leftsection">Hey There,I'm <span class="namecolor">Sam</span>
                <div>And I'm a <div><span class="typed-text" ref="typedText"></span></div>
                </div>
            </div>
            <div class="rightsection">
                <img :src="require('@/assets/dev_img.png')" alt="Image" />
            </div>
        </section>



    </main>
</template>     

<script>
import Typed from 'typed.js';

export default {
    name: 'BodyComp',
    mounted() {
        this.initializeTyped();
    },
    methods: {
        initializeTyped() {
            const options = {
                strings: ['Web Developer', 'Problem Solver', 'Flutter Developer'],
                typeSpeed: 180,
                onComplete: () => {
                    this.typed.destroy();
                    setTimeout(3000);
                    this.initializeTyped(); 
                },
            };

            this.typed = new Typed(this.$refs.typedText, options);
        },
    },

    
};
</script>


<style scoped>
.firstsection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 23px 0;
}

.firstsection>div {
    width: 30%;
}

.leftsection {

    font-size: 3rem;
}

.rightsection img {

    width: 100%;
    margin: 60px 0;
    margin-top: 100px;

}

.namecolor {

    color: rgb(154, 144, 248);
}

.typed-text{
    display: inline-block;
    color: aqua;
}


@media(max-width: 820px) {


    .rightsection img {
    width: 138px;
    margin: 60px 0;
    margin-top: 100px;
    
}

.leftsection {
    font-size: 1.1rem;
}
.typed-text{
    display: inline;
    
}

}




</style>
