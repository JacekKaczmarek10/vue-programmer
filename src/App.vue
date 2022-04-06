<template>
  <div>
    <router-view></router-view>
  </div>

  <Welcome></Welcome>
  <ClickCounter2></ClickCounter2>
  <ClickCounter2></ClickCounter2>
  <ClickCounter2></ClickCounter2>
  <ClickCounter2></ClickCounter2>
  <br>
  <br>
  <PizzaMenu></PizzaMenu>
  <br>
  <br>
  <h1>Notepad</h1>
  <div>
    <PlanNotepad name="Monday"></PlanNotepad>
    <PlanNotepad name="Tuesday"></PlanNotepad>
    <PlanNotepad name="Wednesday"></PlanNotepad>
  </div>
  <PlanNotepad v-bind:key="plan" v-for="plan in plans" :name="plan"></PlanNotepad>
  <PlanNotepad></PlanNotepad>
  <plan-picker></plan-picker>
  <br>
  <br>
  <h1>List</h1>
  <list></list>
</template>

<script>
import ClickCounter2 from "@/components/click-counter-2";
import PizzaMenu from "@/components/pizza-menu";
import PlanNotepad from "@/components/plan-notepad";
import Welcome from "@/components/welcome";
import PlanPicker from "@/components/plan-picker";
import List from "@/components/List";

// var vm = new Vue({
//   el: '#app',
//   components: { 'click-counter': click-counter }
// })

export default {
  name: 'App',
  components: {
    List,
    PlanPicker,
    PlanNotepad,
    PizzaMenu,
    ClickCounter2,
    Welcome,
  },
  data() {
    return {
      plans: [55,67]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
