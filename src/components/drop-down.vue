<template>
  <select name="dropdown" id="dropdown" v-model="selectedOption" v-on:change="optionChanged" @change="optionChanged">
    <option value="null" disabled>Please select option</option>
    <option value="0">Option 2</option>
    <option value="1">Option 2</option>
    <option value="2">Option 3</option>
  </select>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dropdown",

  data: function (){
    return {
      selectedOption: null,
    }
  },

  methods: {
    optionChanged: function (){
      this.$emit('update:option', this.selectedOption);
    }
  }


}
</script>

<style scoped>

</style>