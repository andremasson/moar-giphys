<template>
  <b-container fluid>
      <gifDisplay v-for="(image, index) in images" :key="index" :image="image"/>
  </b-container>
</template>

<script>
import GifDisplay from '@/components/GifDisplay'

export default {
  data () {
    return {
      msg: 'Giphy element',
      images: [
        'https://media.giphy.com/media/3oeSAz6FqXCKuNFX6o/giphy.gif',
        'https://media.giphy.com/media/UzhN8EmWAhDCU/giphy.gif',
        'https://media.giphy.com/media/sjhsTOB3WVjJm/giphy.gif'
      ]
    }
  },
  components: {
    gifDisplay: GifDisplay
  }
}
</script>
