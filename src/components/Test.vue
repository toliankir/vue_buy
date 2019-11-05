<template>
    <div>Test {{getTest}} compoennt</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      test: '321'
    }
  },
  computed: {
    ...mapGetters(['getTest'])
  }
}
</script>
