<template>
  <div class="base-container">
    <div class="base-container-inner">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.base-container {
  width: 100%;
  height: 100%;
  padding: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.base-container-inner {
  height: 80%;
  width: 100%;
}
</style>
