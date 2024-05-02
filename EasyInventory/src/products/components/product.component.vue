<template>
  <h1>New Product</h1>
  <pv-divider/>

  <!--  Form-->
  <div class="form">
    <form @submit="onSubmit" class="flex flex-column gap-2">


      <label for="name">Name of Product</label>
      <pv-input-text id="name" v-model="name" type="text" :class="{ 'p-invalid': nameError }"
                     aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ nameError || '&nbsp;' }}</small>


      <label for="date">Date of Purchase</label>
      <pv-calendar showButtonBar  showIcon  id="date" v-model="date" :maxlength="9" type="text" :class="{ 'p-invalid': dateError }"
                   aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ dateError || '&nbsp;' }}</small>


      <label for="discount">Discount</label>
      <pv-input-number id="discount" v-model="discount" type="text"/>
      <small></small>


      <label for="amount">Amount</label>
      <pv-input-number id="amount" v-model="amount" :class="{ 'p-invalid': amountError }"
                       aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ amountError || '&nbsp;' }}</small>


      <label for="price">Unit Price</label>
      <pv-input-number mode="currency" currency="USD" locale="en-US" id="price" v-model="unitPrice"
                       :class="{ 'p-invalid': unitPriceError }"
                       aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ unitPriceError || '&nbsp;' }}</small>

      <label for="stock">Stock</label>
      <pv-input-number id="stock" v-model="stock" :class="{ 'p-invalid': stockError }"
                       aria-describedby="text-error"/>
      <small class="p-error" id="text-error">{{ stockError || '&nbsp;' }}</small>


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

const {handleSubmit, resetForm} = useForm();

const toast = useToast();

// Creacion de campos con su validacion

const {value: name, errorMessage: nameError} = useField('name', value => {
  if (!value) {
    return 'Name is required';
  }
  return true;
});

const {value: date, errorMessage: dateError} = useField('date', value => {
  if (!value) {
    return 'Date is required';
  }
  return true;
});

const {value: discount} = useField('discount');


const {value: amount, errorMessage: amountError} = useField('amount', value => {
  if (!value) {
    return 'Amount is required';
  }
  return true;
});

const {value: unitPrice, errorMessage: unitPriceError} = useField('unitPrice', value => {
  if (!value) {
    return 'Unit Price is required';
  }
  return true;
});

const {value: stock, errorMessage: stockError} = useField('stock', value => {
  if (!value) {
    return 'Stock is required';
  }
  return true;
});


const onSubmit = handleSubmit((values) => {
  // Values tiene el objeto con los valores de los campos
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
