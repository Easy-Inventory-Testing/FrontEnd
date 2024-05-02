<template>
  <pv-select-button v-model="$i18n.locale" :options="languages" class="uppercase "></pv-select-button>

</template>
<script>
export default{
  name: "language-switcher.component",
  data(){
    return {
      languages:['en','es'],
      language:'en'
    }
  }
}
</script>