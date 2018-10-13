<template>
  <div class="countdown">
    <BaseContainer>
      <div ref="content-container" class="content-container">
        <BaseTitle class="countdown-item" v-for="i in 3" :key="i" :text="i.toString()"/>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import { TimelineMax, Expo } from 'gsap'
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseTitle from '@/components/BaseTitle/BaseTitle'
export default {
  components: {
    BaseContainer,
    BaseTitle
  },
  mounted () {
    const tl = new TimelineMax({onComplete: () => {
      this.$router.push('/gameplay/wait')
    }})
    tl.staggerFrom(this.$refs['content-container'].children, 1, {autoAlpha: 0, scale: 2, ease: Expo.easeOut}, -1, 0)
    tl.staggerTo(this.$refs['content-container'].children, 1, {autoAlpha: 0, ease: Expo.easeOut}, -1, 1)
  }
}
</script>

<style lang="scss" scoped>
.countdown {
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
.countdown-item {
  position: absolute;
  font-size: 5em;
}
</style>
