<template>
  <h1>New Shopping</h1>
  <pv-divider/>

  <!--  Form-->
  <div class="form">
    <form @submit="onSubmit" class="flex flex-column gap-2">

      <label for="date">Date of Purchase</label>
      <pv-calendar showIcon  showButtonBar id="date" v-model="date" :class="{ 'p-invalid': dateError }"
                   aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ dateError || '&nbsp;' }}</small>


      <label for="name">Name Product</label>
      <pv-input-text id="name" v-model="name" :class="{ 'p-invalid': nameError }"
                     aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ nameError || '&nbsp;' }}</small>

      <label for="stock">Current Stock</label>
      <pv-input-number disabled id="stock" v-model="currentStock"/>


      <label for="name-provider">Name Provider</label>
      <pv-input-text id="name-provider" v-model="nameProvider" :class="{ 'p-invalid': nameProviderError }"
                     aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ nameProviderError || '&nbsp;' }}</small>

      <label for="amount">Amount</label>
      <pv-input-number :min="1" id="amount" v-model="amount"
                       aria-describedby="text-error"/>

      <label for="unit-price">Unit Price</label>
      <pv-input-number inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25"
                       decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success"
                       incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="USD"
                       locale="en-US" id="unit-price" v-model="unitPrice"
                       aria-describedby="text-error"/>

      <!--      <label for="amount">Amount</label>-->
      <!--      <pv-input-number id="amount" v-model="amount" :class="{ 'p-invalid': amountError }"-->
      <!--                       aria-describedby="text-error"/>-->
      <!--      <small class="p-error" id="text-error">{{ amountError || '&nbsp;' }}</small>-->

      <!--      <label for="unit-price">Unit Price</label>-->
      <!--      <pv-input-number id="unit-price" v-model="unitPrice" :class="{ 'p-invalid': unitPriceError }"-->
      <!--                       aria-describedby="text-error"/>-->
      <!--      <small class="p-error" id="text-error">{{ unitPriceError || '&nbsp;' }}</small>-->

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

// Creacion de campos con su validacion
const {value: date, errorMessage: dateError} = useField('date', value => {
  if (!value) {
    return 'Date is required';
  }
  return true;
});

const {value: name, errorMessage: nameError} = useField('name', value => {
  if (!value) {
    return 'Name is required';
  }
  return true;
});

let {value: currentStock} = useField('currentStock');

const {value: nameProvider, errorMessage: nameProviderError} = useField('nameProvider', value => {
  if (!value) {
    return 'The name of provider is required';
  }
  return true;
});
//
// const {value: amount, errorMessage: amountError} = useField('amount', value => {
//   if (!value) {
//     return 'Amount is required';
//   }
//   return true;
// });
//
// const {value: unitPrice, errorMessage: unitPriceError} = useField('unitPrice', value => {
//   if (!value) {
//     return 'Unit Price is required';
//   }
//   return true;
// });
//
// let {value: totalCost} = useField('totalCost');

const amount = ref(0);
const unitPrice = ref(0);

// Create a computed property for totalCost
const totalCost = computed(() => amount.value * unitPrice.value);

const onSubmit = handleSubmit((values) => {
  // Values tiene el objeto con los valores de los campos
  values.amount = amount.value;
  values.unitPrice = unitPrice.value;
  values.totalCost = totalCost.value;
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
