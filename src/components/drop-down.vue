<template>
  <select name="dropdown" id="dropdown" v-model="selectedOption" v-on:change="optionChanged" @change="optionChanged">
    <option value="null" disabled>Select number of pizza</option>
    <option value="0">1 stock</option>
    <option value="1">2 stock</option>
    <option value="2">3 stock</option>
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