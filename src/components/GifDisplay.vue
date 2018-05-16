<template>
  <div>
    <div style="width: 248px; position: relative; top: 0px; left: 0px;">
      <img :src="imagePath">
    </div>
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
