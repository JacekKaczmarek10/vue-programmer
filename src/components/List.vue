<template>
  <div>
    <p v-text="dropdownResult"></p>

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
      this.dropdownResult = value;
      console.log(value)
    }
  },

  data: function (){
    return {
        dropdownResult: '',
    }
  }
}
</script>

<style scoped>

</style>