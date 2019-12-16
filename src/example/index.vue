<template>
    <div id="app">
        <img
            v-for="(img, index) in images"
            :key="index"
            v-lazy-load
            alt="Vue logo"
            :data-src="`${img.lazySrc}?s=${+200 + index}&v=4`"
            :src="img.src"
        >
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            images: Array.from({ length: 100 }).fill({
                src: 'https://via.placeholder.com/200x200',
                lazySrc: 'https://avatars0.githubusercontent.com/u/7531539',
            }),
        }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-top: 100px;
}
img {
    display: block;
    margin: 80px;
}
</style>
