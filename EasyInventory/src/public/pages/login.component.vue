<template>
  <div class="flex justify-content-center container mt-7 w-full ">
    <pv-card class=" justify-content-start border-round-3xl w-26rem align-items-center  h-fit ">
      <template #title>
        <div class="pl-5 pt-5 pb-3 text-4xl">
          Log in
        </div>
      </template>
      <template #content>
        <div class="formgrid text-2xl pl-5">
          <div class="field col">

            <div class="field row">
              Username
            </div>
            <div class="field row">
              <pv-input-text class="w-18rem" type="text" v-model="username" placeholder="username"></pv-input-text>
            </div>
            <div class="field row ">
              <div class="field row">
                Password
              </div>
              <div class="field row">
                <pv-input-text type="password" class="w-18rem" v-model="password" placeholder="password"/>
              </div>

            </div>
          </div>
        </div>
        <pv-message :style="{
          border:'solid #696cff',
          borderWidth:' 0 0 0 6px',
        }" :closable="false" severity="error" v-if="visible">User or password invalid
        </pv-message>
        <div class=" flex justify-content-center my-6">
          <pv-button @click.prevent="onSubmit()" class="w-15rem" label="Login">
          </pv-button>
        </div>
        <pv-divider/>

        <div class=" flex justify-content-center mt-5">
          <pv-button severity="secondary" label="Login with Google Account">
          </pv-button>
        </div>

        <div class=" flex justify-content-center">
          <p>Forgot the password
          </p>

        </div>
        <div class=" flex justify-content-center">
          <p>Do not have account an account?
            <router-link to="/sign-up">
              <a>Register</a>
            </router-link>
          </p>
        </div>
      </template>
    </pv-card>

    <pv-dialog></pv-dialog>

  </div>
</template>

<script>
import {AuthServiceApi} from "@/shared/services/auth-service.api";
import {SalesApiService} from "@/sales/services/sales-api.service";
import {ShopApiService} from "@/shops/services/shop-api.service";
import {CustomerApiService} from "@/customers/services/customer-api.service";
import {ProviderApiService} from "@/providers/services/provider-api.service";
import {ProductApiService} from "@/products/services/product-api.service";


export default {
  name: "login.component.vue",
  components: {},
  data() {
    return {
      visible: false,
      username: "Polbored",
      password: "Pass1234",
      authApi: new AuthServiceApi(),
      saleApi: new SalesApiService(),
      shopApi: new ShopApiService(),
      customerApi: new CustomerApiService(),
      providerApi: new ProviderApiService(),
      productApi: new ProductApiService(),
    };
  },
  methods: {
    async onSubmit() {
      const body = {
        username: this.username,
        password: this.password,
      };
      this.response = await this.authApi.logIn(body);
      this.users = this.response.data;

      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].username === this.username && this.users[i].password === this.password) {
          this.user = this.users[i];
          // Agrega user al localStorage de manera sincrónica
          localStorage.setItem('user', JSON.stringify(this.user));

          // Obtiene todos los datos del usuario de manera sincrónica
          await this.getAllData();

          // Redirige al usuario a la página de inicio
          this.$router.push('/home');
        } else {
          this.visible = true;
          break;
        }
      }
    },
    async getAllData() {
      const promises = [];

      // Agrega todas las operaciones de lectura del localStorage a un array de promesas
      promises.push(this.saleApi.getSalesById(this.user.idListSales)
          .then((response) => {
            this.sales = response.data.sales;
            localStorage.setItem('sales', JSON.stringify(this.sales));
          }));

      promises.push(this.shopApi.getById(this.user.idListShops)
          .then((response) => {
            this.shops = response.data.shops;
            localStorage.setItem('shops', JSON.stringify(this.shops));
          }));

      promises.push(this.providerApi.getProviderById(this.user.idListProviders)
          .then((response) => {
            this.providers = response.data.providers;
            localStorage.setItem('providers', JSON.stringify(this.providers));
          }));

      promises.push(this.productApi.getProductById(this.user.idListProducts)
          .then((response) => {
            this.products = response.data.products;
            localStorage.setItem('products', JSON.stringify(this.products));
          }));

      // Espera a que todas las operaciones se completen antes de continuar
      await Promise.all(promises);
    },
  },
};
</script>

<style>
.container {
  height: 80vh;
}
</style>