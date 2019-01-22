<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}

let htmlWidth =
  document.documentElement.clientWidth || document.body.clientWidth
if (htmlWidth > 750) {
  htmlWidth = 750
} else if (htmlWidth < 320) {
  htmlWidth = 320
}
let htmlDom = document.getElementsByTagName('html')[0]
htmlDom.style.fontSize = htmlWidth / 20 + 'px'
</script>

<style></style>
