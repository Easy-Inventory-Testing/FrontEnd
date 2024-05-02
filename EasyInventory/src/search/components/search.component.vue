<template>
  <div>
    <h1>Buscar Datos</h1>

    <span class="p-input-icon-left">
      <i class="pi pi-search"/>
      <pv-input-text v-model="filters['global'].value" placeholder="Keyword Search"/>
    </span>


    <div class="mt-4 p-grid">
      <div class="p-col">
        <pv-data-table v-model:filters="filters" :value="products">
          <pv-column field="id" header="Id"></pv-column>
          <pv-column field="name" header="Name"></pv-column>
          <pv-column field="unitPrice" header="Price"></pv-column>
        </pv-data-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {FilterMatchMode} from "primevue/api";

let user = JSON.parse(localStorage.getItem('user'));
let products = ref(JSON.parse(localStorage.getItem('products')))


const filters = ref({
  global: {value: null, matchMode: FilterMatchMode.CONTAINS},
  name: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
  'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
  representative: {value: null, matchMode: FilterMatchMode.IN},
  status: {value: null, matchMode: FilterMatchMode.EQUALS},
  verified: {value: null, matchMode: FilterMatchMode.EQUALS}
});

</script>

<style scoped>

</style>