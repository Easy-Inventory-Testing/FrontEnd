<template>
  <toolbar/>
  <!--  Div para dividir en 2 a un lado el sidebar y al otro las pages que se seleccionen-->
  <div class="mt-3 flex">
    <sidebar/>

    <!--    Segunda columna donde se desplegaran las pages-->
    <div class="px-5 w-full" >
      <router-view/>
    </div>

  </div>


</template>

<script setup>
import toolbar from "@/shared/components/toolbar.component.vue";
import sidebar from "@/shared/components/sidebar.component.vue";
</script>


<style>
* {
  font-family: 'Roboto', sans-serif;
}



</style>