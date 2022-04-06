<template>
  <div>
    <h1> Chose pizza number</h1>
    <p v-text="dropdownResult.value"></p>
    <Dropdown @update:option="optionUpdate"></Dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/drop-down";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",

  components: {
    Dropdown,
  },

  methods:{
    optionUpdate: function (value){
      this.dropdownResult.value = value;
      console.log(value)
    }
  },

  data: function (){
    return {
        dropdownResult: {
          type: Number,
          required: true,
          defaultValue: 0,
          value : 0
        }
    }
  }
}
</script>

<style scoped>

</style>