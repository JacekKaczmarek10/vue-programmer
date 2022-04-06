<template>
  <p>{{ name }}</p>
</template>

<script>
export default {
  props: {
    name : {
      type : String,
      default: 'Julka',
      required: true
    }
  }
}
</script>

<style scoped>

</style>