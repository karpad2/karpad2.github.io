<template>
<NavBar />
    <section class="banner" id="welcome">
        <div id="header" class="parallax-window">
            <div class="title-container has-text-centered">
                <h2 class="title is-4">Hi, I'm</h2>
                <h1 class="title is-1">karpad2</h1>
            </div>
        </div>
    </section>
</template>
<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
      NavBar
      },
      computed:
      {
          age()
          {
              let date = new Date();
              return " "+date.getFullYear()-1997+" ";
          },
          
      }
}
</script>
<style>
.banner-image
{
    background-image: url("../assets/heading.jpg")
}
#id{
    background-color: #c7583c
}
h1, h2 {
    color: white;
}
</style>