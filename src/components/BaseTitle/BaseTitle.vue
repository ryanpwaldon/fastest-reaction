<template>
  <div class="base-title" v-html="text"/>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-title {
  font-size: 3em;
}
</style>
