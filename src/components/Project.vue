<template>
  <article :class="'tile is-child '+project.style">
    <h2 class="title">{{project.title}}</h2>
    <p>
        {{project.desc}}
    </p>

    <div v-if="project.link!==null">
    <span class="separator">·</span> <i class="fa fa-fw fa-link"></i> <a :href="project.link" target="_blank">Visit the site</a>
    </div>
    
</article>
</template>

<script>
export default ({
    props: {
            project:{"title":"Test","desc":"test","style":"job1","link":null}
        },
})
</script>