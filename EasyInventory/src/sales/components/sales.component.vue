<template>
  <h1>New Sale</h1>
  <pv-divider/>

  <!--  Form-->
  <div class="form">
    <form @submit="onSubmit" class="flex flex-column gap-2">

      <label for="name">Name Product</label>
      <pv-input-text id="name" v-model="name" :class="{ 'p-invalid': nameError }"
                     aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ nameError || '&nbsp;' }}</small>

      <label for="name-provider">Name Customer</label>
      <pv-input-text id="name-provider" v-model="nameCustomer" :class="{ 'p-invalid': nameCustomerError }"
                     aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ nameCustomerError || '&nbsp;' }}</small>

      <label for="date">Date of Purchase</label>
      <pv-calendar showButtonBar show-icon id="date" v-model="date" :class="{ 'p-invalid': dateError }"
                   aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ dateError || '&nbsp;' }}</small>

      <label for="stock">Stock</label>
      <pv-input-number id="stock" v-model="currentStock" disabled
                       aria-describedby="text-error"/>

      <label for="amount">Discount</label>
      <pv-input-number :max="100" :min="0" id="amount" inputId="percent" suffix="%" v-model="discount"
                       aria-describedby="text-error"/>

      <label for="amount">Amount</label>
      <pv-input-number :min="1" id="amount" v-model="amount"
                       aria-describedby="text-error"/>

      <label for="unit-price">Unit Price</label>
      <pv-input-number inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25"
                       decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success"
                       incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="USD"
                       locale="en-US" id="unit-price" v-model="unitPrice"
                       aria-describedby="text-error"/>

      <label for="total-cost">Total Cost</label>
      <pv-input-number mode="currency" currency="USD" locale="en-US" id="total-cost" v-model="totalCost" disabled
                       aria-describedby="text-error"/>


      <div class="flex justify-content-center">
        <pv-button type="submit" label="Create"/>
      </div>

    </form>
    <pv-toast/>

  </div>
</template>

<script setup>
import {useToast} from 'primevue/usetoast';
import {useField, useForm} from 'vee-validate';
import {computed, ref} from "vue";

const {handleSubmit, resetForm} = useForm();

const toast = useToast();

const {value: name, errorMessage: nameError} = useField('name', value => {
  if (!value) {
    return 'Name is required';
  }
  return true;
});

// Creacion de campos con su validacion

const {value: nameCustomer, errorMessage: nameCustomerError} = useField('nameCustomer', value => {
  if (!value) {
    return 'Name of Customer is required';
  }
  return true;
});

const {value: date, errorMessage: dateError} = useField('date', value => {
  if (!value) {
    return 'Date is required';
  }
  return true;
});


let {value: currentStock} = useField('currentStock');

const discount = ref(0);
const amount = ref(0);
const unitPrice = ref(0);

// Create a computed property for totalCost
const totalCost = computed(() => amount.value * unitPrice.value * (1 - discount.value / 100));

const onSubmit = handleSubmit((values) => {
  // Values tiene el objeto con los valores de los campos
  values.amount = amount.value;
  values.unitPrice = unitPrice.value;
  values.totalCost = totalCost.value;
  values.discount = discount.value;
  toast.add({severity: 'info', summary: 'Form Submitted', detail: `Added Product: ${values.name}`, life: 3000});
  console.log(values)
  resetForm();
});
</script>


<style scoped>
.form {
  width: 50%;
  margin: 0 auto;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  border-radius: 10px;
  padding: 3rem;
}

</style>
