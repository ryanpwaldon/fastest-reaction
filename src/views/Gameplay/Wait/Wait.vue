<template>
  <div class="wait">
    <BaseContainer>
      <div class="content-container">
        <div class="wait-container">
          <div class="wait-inner">
            <BaseTitle class="wait-item" text="WAIT"/>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseTitle from '@/components/BaseTitle/BaseTitle'
export default {
  components: {
    BaseContainer,
    BaseTitle
  },
  mounted () {
    this.timeout = setTimeout(() => {
      console.log('helo')
      this.$router.push('/gameplay/tap')
    }, 1000)
  },
  beforeDestroy () {
    clearTimeout(this.timeout)
  }
}
</script>

<style lang="scss" scoped>
.wait {
  width: 100%;
  height: 100%;
}
.content-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wait-container {
  position: relative;
  width: 50%;
}
.wait-inner {
  position: relative;
  padding-top: 100%;
  background: black;
  color: white;
}
.wait-item {
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
