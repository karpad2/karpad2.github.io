<template>
<div class="home">
    <Banner />
    <Welcome />
    <Skills />
    <Projects />
    <Contact />
</div>
</template>

<script>
import Banner from './components/Banner.vue'
import Welcome from './components/Welcome.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'



export default {
  name: 'App',
  components: {
    Banner,
    Welcome,
    Contact,
    Projects,
    Skills,
    
  }
}
</script>
<style >
body {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.428571428571429;
}
</style>

