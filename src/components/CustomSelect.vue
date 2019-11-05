<template>
  <div class="custom-select">
    <div class="custom-select-title">From:</div>
    <div :class="{test1: a}">123</div>
{{getCount}}
    <input class="custom-select-count" />
    <div class="custom-select-button">BTC</div>
    <div :class="{customSelectListShow: a}" class="custom-select-list">
      <ul>
        <li>ETH</li>
        <li>ETC</li>
        <li>ZEC</li>
        <li>XMR</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

@Component({
  computed: {
    ...mapGetters(['getTest', 'getCount'])
  },
  methods: {
    ...mapActions(['setCount'])
  }
})
export default class CustomerSelect extends Vue {
  private getText!: string
  private a = true;
  mounted () {
    (this as any).setCount()
  }
}
</script>

<style scoped>
.test1 {
  color: red;
}
.custom-select-list {
  position: absolute;
  width: 100%;
  display: none;
}
.custom-select-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.custom-select-list ul li {
  margin: 0;
}
.custom-select-list ul li:hover {
  background-color: red;
  width: 100%;
}
.customSelectListShow {
  display: block;
}
</style>
