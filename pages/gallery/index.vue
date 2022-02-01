<template>
  <v-row>
    <v-col
      v-for="(item, i) in articles"
      :key="i"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`/${item.full_image}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.getters["articles/getArticlesSlider"];
    },
  },
};
</script>
