<template>
  <div class="time">
    <BaseContainer>
      <div class="content-container">
        <BaseTitle ref="time-item" class="time-item" :text="$route.params.time.toString()"/>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import SplitText from '@/assets/lib/SplitText'
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseTitle from '@/components/BaseTitle/BaseTitle'
export default {
  components: {
    BaseContainer,
    BaseTitle
  },
  mounted () {
    const splitText = new SplitText(this.$refs['time-item'].$el, {type: 'chars'})
    TweenMax.staggerFrom(splitText.chars, 1, {autoAlpha: 0, y: 10, ease: Expo.easeOut}, 0.1)
  }
}
</script>

<style lang="scss" scoped>
.time {
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
.time-item {
  position: absolute;
  font-size: 5em;
}
</style>
