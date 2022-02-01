<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
      v-for="article in articles"
      :key="article.id"
    >
    <nuxt-link :to="`news/`+article.id">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="article.preview_image"
      >
        <v-card-title> {{article.name}} </v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{article.shortDesc}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{article.date}}</div>
      </v-card-text>
    </nuxt-link>
    </v-card>
    
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.getters["articles/getArticles"];
    },
  },
};
</script>
