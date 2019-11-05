<template>
  <div class="content">
    <div class="promo-title">test</div>
    <div class="promo-exchange">
      <CustomeSelect :test="123" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CustomeSelect from '@/components/CustomSelect.vue'

@Component({
  components: {
    CustomeSelect
  }
})
export default class Content extends Vue {}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  align-items: flex-start;
}

.promo-title {
  width: 65%;
  background-color: red;
  margin-right: 1rem;
}

.promo-exchange {
  width: 35%;
  background-color: green;
  position: relative;
}
</style>
