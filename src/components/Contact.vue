<template>
 <section class="contact" id="contact">
        <h2 class="title is-1 has-text-centered">Contact</h2>
        <div class="container has-text-centered">
            <a href="mailto:info@kasoft.co.uk">
                info@kasoft.co.uk
            </a>
        </div>
    </section>
    <footer class="has-text-centered">
        <p id="copyright">{{copyright}} karpad2</p>
    </footer>
  
</template>
<script>


export default {
 
      computed:
      {
          copyright()
          {
              let date = new Date();
              return "© "+date.getFullYear()+" ";
          }
          
      }
}
</script>