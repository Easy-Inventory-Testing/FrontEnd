<template>
    <h1>New Provider</h1>
    <pv-divider/>

    <!--  Form-->
    <div class="form">
      <form @submit="onSubmit" class="flex flex-column gap-2">


        <label for="input-company">Name Company</label>
        <pv-input-text id="input-company" v-model="nameCompany" type="text" :class="{ 'p-invalid': nameCompanyError }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ nameCompanyError || '&nbsp;' }}</small>


        <label for="input-phone">Phone</label>
        <pv-input-text id="input-phone" v-model="phone" :maxlength="9" type="text" :class="{ 'p-invalid': phoneError }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ phoneError || '&nbsp;' }}</small>


        <label for="input-ruc">RUC</label>
        <pv-input-text id="input-ruc" v-model="ruc" type="text" :maxlength="11" :class="{ 'p-invalid': rucError }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ rucError || '&nbsp;' }}</small>


        <label for="input-email">Email</label>
        <pv-input-text id="input-email" v-model="email" type="text"
                       aria-describedby="text-error"/>
        <small/>

        <label for="input-address">Address</label>
        <pv-input-text id="input-address" v-model="address" type="text" />
        <small/>

        <label for="input-city">City</label>
        <pv-input-text id="input-city" v-model="city" type="text"/>
        <small/>

        <div class="flex justify-content-center">
          <pv-button class="w-8rem" type="submit" label="Create"/>
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

const {value: nameCompany, errorMessage: nameCompanyError} = useField('nameCompany', value => {
  if (!value) {
    return 'El nombre de la empresa es obligatorio.';
  }
  return true;
});

const {value: phone, errorMessage: phoneError} = useField('phone', value => {
  if (!value) {
    return 'phone es obligatorio.';
  }

  if (isNaN(value)) {
    return 'El phone debe ser un numero';
  }

  if (value.length !== 9) {
    return 'El ruc debe tener 9 digitos';
  }

  return true;
});

const {value: ruc, errorMessage: rucError} = useField('ruc', value => {
  if (!value) {
    return 'ruc de la empresa es obligatorio.';
  }

  if (isNaN(value)) {
    return 'El ruc debe ser un numero';
  }

  if (value.length !== 11) {
    return 'El ruc debe tener 11 digitos';
  }



  return true;
});

const {value: email} = useField('email');
const {value: address} = useField('address');
const {value: city} = useField('city');


const onSubmit = handleSubmit((values) => {
    // Values tiene el objeto con los valores de los campos
    toast.add({severity: 'info', summary: 'Form Submitted', detail: `Added Provider: ${values.nameCompany}`  , life: 3000});
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
