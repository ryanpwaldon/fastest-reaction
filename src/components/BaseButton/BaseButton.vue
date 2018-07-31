<template>
  <div class="base-button">
    <div class="button-text">{{ text }}</div>
  </div>
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
.base-button {
  width: 100%;
  height: 100%;
}
.button-text {
  display: inline-block;
  padding: 5px 10px;
  font-size: 2em;
  border: solid 5px var(--color-black);
}

</style>
