<template>
<div>
  <div class="gradient" />
  <Header class="container" />
  <Content class="container" />
  <Test />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Test from '@/components/Test.vue'

@Component({
  components: {
    Header,
    Content,
    Test
  }
})
export default class App extends Vue {}
</script>

<style scoped>
div {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 70%;
}

.gradient {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background: #0b8793;
  background: -moz-linear-gradient(45deg, #0b8793 0%, #360033 100%);
  background: -webkit-linear-gradient(45deg, #0b8793 0%, #360033 100%);
  background: linear-gradient(45deg, #0b8793 0%, #360033 100%);
}

</style>
