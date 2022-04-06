<template>
  <button @click="count++">{{count}}</button>
</template>

<script>
export default {
  name: "click-counter-2",
  data(){
    return {
      count :50
    }
  }
}
</script>

<style scoped>

</style>