<template>
  <div class="body">
    <h1 class="flex flex-column justify-content-center align-items-center "> Hi {{ user.name }}</h1>
    <div class="flex flex-column align-items-center justify-content-center">
      <pv-card class="w-10 bg-primary" >
        <template #content>
          <div class="flex flex-row align-content-center ">
            <div class="flex  justify-content-center align-items-center">
              <img class="w-3 mr-8" src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
                   alt="user">

              <div class="flex flex-column">
                <h1 id="user-name">{{ user.name }}</h1>
                <p><i class="pi pi-id-card"></i> {{ user.birthday }}</p>
                <p><i class="pi pi-phone"></i> {{ user.phone }}</p>
                <p><i class="pi pi-envelope"></i> {{ user.email }}</p>
              </div>
            </div>

            <div>
            </div>
          </div>
        </template>

      </pv-card>


      <pv-card class="w-10 mt-6">
        <template #content>
          <div class="flex justify-content-evenly w-50rem">
            <div class="flex align-items-center ">
              <h2><i class="pi pi-credit-card"></i> {{user.subscription}}</h2>
            </div>
            <div class="flex align-items-center">
              <pv-button severity="" >Change</pv-button>
            </div>
          </div>

        </template>
      </pv-card>

    </div>
  </div>


</template>
<script>
import ToolbarComponent from "@/shared/components/toolbar.component.vue";
export default {
  name:"user-profile",
  components:{ToolbarComponent},
  data(){
    return{
      user:{},
    }
  },
  created() {
    this.user =JSON.parse(localStorage.getItem('user'));
  }
}
</script>

<style >
.body{
  width:100%;
}
</style>