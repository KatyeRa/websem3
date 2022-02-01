<template>
  <v-carousel :show-arrows="true">
    <v-carousel-item
      v-for="(item,i) in articles"
      :key="i"
      :src="`/${item.full_image}`"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default{
  data() {
    return {
      items: ["fill.jpeg", "full_2.jpeg", "full_3.jpg"]
    }
  },

  computed: {
    articles(){
      return this.$store.getters["articles/getArticlesSlider"]
    }
  }
}
</script>