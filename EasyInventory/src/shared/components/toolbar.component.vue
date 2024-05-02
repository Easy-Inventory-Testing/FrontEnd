<template>
  <header>
    <pv-toolbar class="bg-primary flex-wrap">
      <template #start>
        <router-link  to="/">
          <img alt="logo" src="../../assets/Logo.png" class="h-4rem mr-2">
        </router-link>
        <h3><b>EasyInventory</b></h3>
      </template>

      <template #end>
        <language-switcher-component></language-switcher-component>
        <router-link to="/user">
          <pv-button   class="mx-3"  size="large" severity="secondary" icon="pi pi-user" rounded  aria-label="user"/>
        </router-link>

      </template>
    </pv-toolbar>
  </header>

</template>

<script>
import languageSwitcherComponent from "@/shared/components/language-switcher.component.vue";
export default{
  name:"toolbar",
  components: { languageSwitcherComponent},
  data(){
    return{
      // toggleState:false,
      // visible: false,
    };
  },
  methods:{
    setDrawer(){
      // this.visible=!this.visible;
      // console.log(this.visible);
    }
  }
}
</script>
<style>
</style>