<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang='less' scoped>
.hello {
  h1, h2 {
    font-size: 3rem;
    font-weight: normal;
  }
}
</style>
