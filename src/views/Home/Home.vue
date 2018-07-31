<template>
  <div class="home">
    <div class="content-container">
      <div class="title-item">FASTEST<br>REACTION</div>
      <router-link to="/instructions" class="button-item">
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
.home {
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
.button-item {
  justify-self: flex-start;
}

</style>
