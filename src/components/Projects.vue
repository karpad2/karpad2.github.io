<template>
    <section class="projects" id="projects">
        <div class="container">
        <h2 class="title is-1 has-text-centered">
            Projects
        </h2>
      <div class="container">
            <div class="tile-container">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                           <div class="tile is-parent" v-for="project in projects" :key="project.title">
                               
                               <Project :project="project"/>                                
                            
                            </div>
                        </div>

                    </div>
                    <div class="tile is-parent is-vertical">
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Project from "./Project.vue"
export default ({
    components: {
        Project
    },
    data(){
        return {
          projects: [
            {"title":"My Job","desc":"I currently work freelancer jobs. I'm designing ER systems for companies in Vue and Laravel based system.","style":"job1","link":null},
            {"title":"Older Projects","desc":"You can check my reference jobs on my GITHUB page.","style":"job2","link":"https://github.com/karpad2/"},
            {"title":"GRBL interface for CNC","desc":"It is an interface for GRBL CNC controller program, written in Node.JS.","style":"job3","link":"https://github.com/karpad2/grblinterface"}
            ]
        }}
})


/*
<div class="tile-container">
<div class="tile is-ancestor">
<div class="tile is-vertical is-8">
<div class="tile">
<div class="tile is-parent is-vertical">
<article class="tile is-child laravel-barion"><p class="title">Laravel-Barion</p> <p>
This is my first Composer package published on Packagist.
</p> <p>
It is a basic wrapper around the API of the Barion payment provider.
</p> <p><i class="fa fa-fw fa-github"></i> <a href="https://github.com/laravelhungary/laravel-barion" target="_blank">
See on GitHub
</a></p></article> <article class="tile is-child menetrend"><p class="title">Menetrend.org</p> <p>
The official bus schedule site of Hungary used to suck (it is a lot better now).
</p> <p>
 I made an attempt to create a minimalistic, responsive alternative.
</p> <p><i class="fa fa-fw fa-github"></i> <a href="https://github.com/nXu/nxu-menetrend" target="_blank">
See on GitHub
</a> <span class="separator">·</span> <i class="fa fa-fw fa-link"></i> <a href="https://menetrend.org" target="_blank">
Visit the site
</a></p></article></div> <div class="tile is-parent"><article class="tile is-child feki"><p class="title">My Job</p> <p>
I currently work at a fantastic company called Feki Webstudio.
I am mainly responsible for the upgrade of our legacy back-end
to a modern, Laravel based system.
</p> <p>
We create a lot of amazing websites:
</p> <ul><li>Smaller business sites</li> <li>Webshops</li> <li>News portals</li> <li>Larger scale web applications</li> <li>And a lot more</li></ul> <p><i class="fa fa-fw fa-link"></i> <a href="http://www.fekiwebstudio.hu/hu/referenciak.html" target="_blank">
Check out our projects
</a></p></article></div></div> <div class="tile is-parent"><article class="tile is-child flk"><p class="title">Fertorakosi-Loveszklub.hu</p> <p>
A Laravel based website for our local shooting club with responsive front-end.
</p> <p><i class="fa fa-fw fa-github"></i> <a href="https://github.com/fertorakosi-loveszklub/flk-honlap-3" target="_blank">
See on GitHub
</a> <span class="separator">·</span> <i class="fa fa-fw fa-link"></i> <a href="https://www.fertorakosi-loveszklub.hu" target="_blank">
Visit the site
</a></p></article></div></div> <div class="tile is-parent is-vertical"><article class="tile is-child indavideo"><p class="title">Indavideo Downloader</p> <p>
Indavideo.hu is Hungary's biggest video streaming site.
</p> <p>
This is a service that lets users download mp4 videos directly.
It has an old, legacy codebase and is to be updated soon.
</p> <p><i class="fa fa-fw fa-github"></i> <a href="https://github.com/nXu/indadl" target="_blank">
See on GitHub
</a> <span class="separator">·</span> <i class="fa fa-fw fa-link"></i> <a href="https://indavideo.nxu.hu" target="_blank">
Visit the site
</a></p></article> <article class="tile is-child nbf"><p class="title">nbrainfuck</p> <p>
This is an IDE (written in C#, using WPF) for brainfuck development.
</p> <p>
No, seriously. This is really a brainfuck IDE with step-by-step debugging,
multiple I/O management and Brainloller import / export.
</p> <p><i class="fa fa-fw fa-github"></i> <a href="https://github.com/nXu/nbrainfuck" target="_blank">
See on GitHub
</a></p></article></div></div></div>
*/
</script>

<style>
#projects
{
    background-color:#9ab087;
}
</style>