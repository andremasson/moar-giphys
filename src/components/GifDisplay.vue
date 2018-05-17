<template>
  <div>
    <img :src="imagePath">
  </div>
</template>

<script>
export default {
  props: ['image'],
  data () {
    return {
      msg: 'apenas uma imagem'
    }
  },
  computed: {
    imagePath () {
      return this.image
    }
  }
}
</script>

<style>
img {
  width: 100%;
}
</style>
