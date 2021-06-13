<template>
     <section class="skills" id="skills">
        <h2 class="title is-1 has-text-centered">
            Skills
        </h2>
        <div class="container has-text-centered">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div v-for="obj in skills" :key="obj.title">
        <Skill :skill="obj"/>
        </div>
        </div>
        </div>
    </section>
</template>
<script>
import Skill from "./Skill";

export default ({
    components:{
        Skill
    },
   data () {
       return {
            
        skills:[
           {"title":"IoT","desc":"IoT developing \nCustom PCB design \nCustom webserver design","style":"laravel"},
           {"title":"PHP","desc":"... the right way \n \nSOLID; PSR \nComposer \nDrupal","style":"php"},
           {"title":"HTML 5","desc":"","style":"html5"},
           {"title":"JavaScript","desc":"Vue, jQuery \nES6 \nNode / NPM / Yarn \nWebpack, Gulp","style":"css"},
           {"title":"CSS 3","desc":"SCSS / LESS \nBootstrap, Bulma \nAnimations","style":"javascript"},
           {"title":"Git","desc":"Branching \nMerge, Rebase \nGitHub, GitLab","style":"git"},
           {"title":"Linux","desc":"Debian Server \nNginx, Apache2, PHP, MySQL \nMemcached, Redis","style":"linux"},
           {"title":"Security","desc":"OWASP \nAES, RSA, HMAC \nOpenSSL, NaCl","style":"security"}
       ]
   }}
})
</script>
<style>


</style>
