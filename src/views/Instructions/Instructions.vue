<template>
  <div class="instructions">
    <div class="content-container">
      <div class="title-item">GOAL</div>
      <div class="instructions-item">
        Wait for the signal.<br>
        Click the button.<br>
        Be the fastest.
      </div>
      <router-link to="/gameplay" class="button-item">
        <BaseButton text="Start"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton/BaseButton'
export default {
  components: { BaseButton }
}
</script>

<style lang="scss" scoped>
.instructions {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-container {
  display: grid;
  height: 60%;
  align-content: space-between;
}
.title-item {
  font-size: 4em;
}
.instructions-item {
  font-size: 2em;
  line-height: 140%;
}
.button-item {
  justify-self: flex-start;
}

</style>
