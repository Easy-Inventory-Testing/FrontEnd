<template>
<div class="w-full px-5">
  <div class="flex">
    <div class="col-6">
      <pv-card>
        <template #title>
          Last sales
        </template>
        <template #content>
          <pv-card v-for="sale in sales" class="card my-1">
            <template #content>
             <p>Date: {{sale.date}}</p>
             <p>Total Cost: $  {{sale.totalCost }}</p>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
    <div class="col-6">
      <pv-card>
        <template #title>
          Most Selled Product
        </template>
        <template #content>
          <pv-card  class="card my-1">
            <template #content>
              <p>Id: {{this.productmostselled.id}}</p>
              <p>Cantidad: {{this.productmostselled.quantity}}</p>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
  </div>

  <div class="flex">
    <div class="col-4">
      <pv-card>
        <template #title>
          Last Shoppings
        </template>
        <template #content>
          <pv-card v-for="shop in shops" class="card my-2 ">
            <template #content>
              <div class="flex">
                {{ shop.title }}
                <span class="example-spacer"></span>
                {{ shop.totalPrice }}
              </div>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
    <div class="col-4 ">
      <pv-card class="main-card">
        <template #title>
          Providers
        </template>
        <template #content>
          <div class="content">

            <pv-card v-for="provider in providers" class="card my-1 ">
              <template #content>
                {{ provider.name }}
              </template>
            </pv-card>
          </div>

        </template>
      </pv-card>
    </div>
    <div class="col-4">
      <pv-card>
        <template #title>
          Products
        </template>
        <template #content>
          <pv-card v-for="product in products" class="card my-1">
            <template #content>
              <p>ID: {{ product.id }}</p>
              <p>Name: {{ product.name }}</p>
              <p> Stock: {{ product.stock }}</p>
              <p> Price: $ {{ product.unitPrice }}</p>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
  </div>
</div>


</template>

<script>
import ToolbarComponent from "@/shared/components/toolbar.component.vue";

export default {
  name: "home-component",
  components: {ToolbarComponent},
  data() {
    return {
      productmostselled: {quantity: 0},
    }
  },
  created() {
    console.log("Home component created")

    /*//Obtener los datos del local Storage
    this.user = (JSON.parse(localStorage.getItem('user')));
    this.sales = (JSON.parse(localStorage.getItem('sales')));
    this.providers = (JSON.parse(localStorage.getItem('providers')));
    this.products = (JSON.parse(localStorage.getItem('products')));
    this.shops = (JSON.parse(localStorage.getItem('shops')));

    // Hallar el Product mas vendido en sales
    for (const argument of this.sales) {
      for (const argumentElement of argument.listOfProducts) {
        if (argumentElement.quantity > this.productmostselled.quantity) {
          this.productmostselled = argumentElement;
        }
      }
    }

*/

  },
  methods: {}
}
</script>
<style>



</style>