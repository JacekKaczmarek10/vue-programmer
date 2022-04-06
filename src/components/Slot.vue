<template>

  <h1> Slots</h1>
  <Card></Card>
  <Card>Card content</Card>
  <Card>
    <h2>Card content</h2>
  </Card>
  <Card>
    <img src="https://picsum.photos/200"/>
  </Card>
</template>

<script>
import Card from "@/components/Card";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slot",
  components: {Card}
}
</script>

<style scoped>



</style>