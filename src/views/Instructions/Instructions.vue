<template>
  <div class="instructions">
    <BaseContainer>
      <div class="content-container">
        <BaseTitle text="GOAL"/>
        <div class="instructions-item">
          Lorem ipsum amet<br>consectetur elit<br>sed do eiusmod.
        </div>
        <router-link to="/countdown" class="button-item">
          <BaseButton text="Start"/>
        </router-link>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseButton from '@/components/BaseButton/BaseButton'
export default {
  components: {
    BaseContainer,
    BaseTitle,
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.instructions {
  width: 100%;
  height: 100%;
}
.content-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.instructions-item {
  font-size: 1.9em;
  line-height: 140%;
}
</style>
