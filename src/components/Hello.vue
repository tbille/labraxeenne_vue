<template>
  <div class="hello">
    hello
    {{ $t('message.hello') }}
    <twitter></twitter>
  </div>
</template>

<script>
import Twitter from './Twitter'

export default {
  name: 'hello',
  components: {
    Twitter
  }
}
</script>

<style scoped>
</style>
