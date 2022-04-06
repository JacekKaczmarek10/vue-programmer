<template>
  <h1>Pizza menu</h1>
  <p>Number of peperoni (20$)</p>
  <button @click="peperoni++,sum+=20">{{peperoni}}</button>
  <p>Number of margherita (15$)</p>
  <button @click="margherita++,sum+=15">{{margherita}}</button>
  <p>Number of cola (3$)</p>
  <button @click="cola++,sum+=3">{{cola}}</button>
  <p>Number of water (2$)</p>
  <button @click="water++,sum+=2">{{water}}</button>
  <h1>Total value {{sum}} $</h1>
</template>

<script>
export default {
  name: "pizza-menu",
  data(){
    return {
      peperoni :0,
      margherita: 0,
      cola: 0,
      water : 0,
      sum: 0
    }
  }
}
</script>

<style scoped>

</style>