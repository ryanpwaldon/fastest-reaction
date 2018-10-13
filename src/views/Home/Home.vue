<template>
  <div class="home">
    <BaseContainer>
      <div class="content-container">
        <BaseTitle text="FASTEST<br>TAP"/>
        <router-link to="/instructions" class="button-item">
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
.home {
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
</style>
