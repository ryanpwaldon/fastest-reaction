<template>
  <div class="tap" @click="tapHandler">
    <BaseContainer>
      <div class="content-container">
        <div class="tap-container">
          <div class="tap-inner">
            <BaseTitle class="tap-item" text="TAP!"/>
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
  data () {
    return {
      startTime: null,
      timeTaken: null
    }
  },
  mounted () {
    this.startTime = Date.now()
  },
  methods: {
    tapHandler () {
      this.timeTaken = Date.now() - this.startTime
      this.$router.push({name: 'time', params: {time: this.timeTaken}})
    }
  }
}
</script>

<style lang="scss" scoped>
.tap {
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
.tap-container {
  position: relative;
  width: 50%;
}
.tap-inner {
  position: relative;
  padding-top: 100%;
  background: black;
  color: white;
}
.tap-item {
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
