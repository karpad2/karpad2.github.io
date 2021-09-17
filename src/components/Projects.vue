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
            {"title":"GRBL interface for CNC","desc":"It is an interface for GRBL CNC controller program, written in Node.JS.","style":"job3","link":"https://github.com/karpad2/grblinterface"},
            {"title":"Rebol VS Code Extension","desc":"It is an Visual Studio Code extension, snippets and syntax highlighting for Rebol language in TypeScript.","style":"job4","link":"https://github.com/karpad2/vscode_rebol"},
            ]
        }}
})

</script>

<style>
#projects
{
    background-color:#9ab087;
}
</style>