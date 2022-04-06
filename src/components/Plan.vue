<template>
  <PlanNotepad v-bind:key="plan" v-for="plan in plans" :name="plan"></PlanNotepad>
  <PlanNotepad></PlanNotepad>
</template>

<script>
import PlanNotepad from "@/components/plan-notepad";
export default {
  name: "plan-notepad-parent",
  components: {PlanNotepad},
  data() {
    return {
      plans: ['ANIA','MARYSIA']
    }
  }
}
</script>

<style scoped>

</style>