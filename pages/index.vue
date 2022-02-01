<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="`/${item}`"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default{
  data() {
    return {
      items: ["tigr.jpg", "flower.jpg", "lama.jpg"]
    }
  }
}
</script>