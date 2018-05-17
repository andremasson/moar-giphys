<template>
  <b-container class="row" fluid>
    <div class="column">
      <gifDisplay v-for="(image, index) in imagesColumn1" :key="index" :image="image"/>
    </div>
    <div class="column">
      <gifDisplay v-for="(image, index) in imagesColumn2" :key="index" :image="image"/>
    </div>
    <div class="column">
      <gifDisplay v-for="(image, index) in imagesColumn3" :key="index" :image="image"/>
    </div>
  </b-container>
</template>

<script>
import GifDisplay from '@/components/GifDisplay'
export default {
  data () {
    return {
      msg: 'Giphy element',
      imagesColumn1: [
        'https://media.giphy.com/media/EGny2R0OrE4WQ/giphy.gif',
        'https://media.giphy.com/media/3oeSAz6FqXCKuNFX6o/giphy.gif',
        'https://media.giphy.com/media/UzhN8EmWAhDCU/giphy.gif',
        'https://media.giphy.com/media/96OcHR3Ojz9QI/giphy.gif'
      ],
      imagesColumn2: [
        'https://media.giphy.com/media/sjhsTOB3WVjJm/giphy.gif',
        'https://media.giphy.com/media/96OcHR3Ojz9QI/giphy.gif',
        'https://media.giphy.com/media/3kxO2coE6NY0U/giphy.gif'
      ],
      imagesColumn3: [
        'https://media.giphy.com/media/3oeSAz6FqXCKuNFX6o/giphy.gif',
        'https://media.giphy.com/media/96OcHR3Ojz9QI/giphy.gif',
        'https://media.giphy.com/media/EGny2R0OrE4WQ/giphy.gif'
      ]
    }
  },
  mounted () {
    console.log('Config: ' + process.env.GIPHY_API_KEY)
  },
  components: {
    gifDisplay: GifDisplay
  }
}
</script>
