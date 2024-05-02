<template>

  <div class="flex justify-content-center ">
  <pv-card  class="w-8">
    <template #title>New Customer</template>
    <template #content>
      <form class="form">

        <div class="form grid grid">
          <div class="field col">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="Name">Name</label>
                <pv-input-text type="text" class=" border-color-700 border-solid p-3 border-round w-full" id="name" v-model="customer.name" required/>
              </div>
            </div>
          </div>

          <div class="field col">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="id">id</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="id" v-model="customer.id" required/>
              </div>
            </div>
          </div>

          <div class="field col">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="lastName">lastName</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="lastName" v-model="customer.lastName" required/>
              </div>
            </div>

          </div>

        </div>

        <div class="form grid grid">

          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="birthday">Birthday</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="birthday" v-model="customer.birthday" required/>
              </div>
            </div>
          </div>
        </div>

        <div class="form grid grid">
          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="email">Email</label>
                <pv-input-text type="text" class="b border-solid p-3 border-round w-full" id="email" v-model="customer.email" required/>
              </div>
            </div>
          </div>

          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="phone">Phone</label>
                <pv-input-text type="text" class="border-solid p-3 border-round w-full" id="phone" v-model="customer.phone" required/>
              </div>
            </div>
          </div>

          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="address">Address</label>
                <pv-input-text type="text" class="border-solid p-3 border-round w-full" id="address" v-model="customer.address" required/>
              </div>
            </div>
          </div>
        </div>

        <div class="form grid grid ">
          <div class="field col">
            <pv-button @click="handleClick">Submit</pv-button>
          </div>

          <div class="field col">
            <router-link to="/">
              <pv-button type="button" class="text-white text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Cancel</pv-button>
            </router-link>
          </div>
        </div>

      </form>
    </template>

  </pv-card>
  </div>


</template>

<script>
export default {
  name: "register-customer",
  data(){
    return{
      customer:{
        id: null,
        name:"",
        lastName:"",
        birthdate: null,
        email:"",
        phone:"",
        address:"",
      }
    }
  },
  computed:{
    isForEmpty(){
      return (
          this.id===''||
          this.name===''||
          this.lastName===''||
          this.birthdate===''||
          this.email===''||
          this.phone===''||
          this.address===''
      );
    },
  },
  methods:{
    submitForm(){
      console.log("Registering customer");
      this.$emit("customer-registered",{
        id: this.id,
        name: this.name,
        lastName: this.lastName,
        birthdate: this.birthdate,
        email: this.email,
        phone: this.phone,
        address: this.address,
      })
    },
    onCustomerRegistered(customer){
      this.id=customer.id;
      this.name=customer.name;
      this.lastName=customer.lastName;
      this.birthdate=customer.birthdate;
      this.email=customer.email;
      this.phone=customer.phone;
      this.address=customer.address;
      console.log("Customer registered: ", customer);
    },
    handleClick(){
      this.submitForm();
      this.onCustomerRegistered(this.customer);
    }
  }
}
</script>


<style>
.container{
  height: 60vh;
}
</style>