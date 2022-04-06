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
.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 16px;
  margin-bottom: 20px;
  width: 200px;
}


.card:hover{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}


</style>