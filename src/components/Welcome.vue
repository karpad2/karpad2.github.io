<template>
<section class="intro" id="welcome">
        <div class="container">
            <div class="columns">
                <div class="column has-text-right avatar-column">
<span class="avatar"><img src="../assets/profile.png" alt="karpad2"></span>
                </div>
                <div class="column is-1 filler-column">&nbsp;</div>
                <div class="column is-7 has-text-left intro-text-column">
                    <h2 class="title is-1">Welcome</h2>
                    <p>
                        I'm karpad2, short for Árpád Kovács.<br>
                        I am a <span id="old">{{age}}</span> years old backend-focused full-stack web & IoT developer.<br>
                        I love clean code.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>


export default {
 
      computed:
      {
          age()
          {
              let date = new Date();
              return " "+date.getFullYear()-1997+" ";
          }
          
      }
}
</script>