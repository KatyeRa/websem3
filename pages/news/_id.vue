<template>
<div>
  <v-card class="mx-auto" max-width="100%">
      <v-img :src="`/` + activeArticle.full_image" height="500px"></v-img>

      <v-card-title>
        {{ activeArticle.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ activeArticle.desc }}
      </v-card-subtitle>

      <v-card-subtitle>
        {{ activeArticle.date }}
      </v-card-subtitle>
    </v-card>

</div>
</template>

<script>
export default {
  computed: {
    activeArticle() {
      return this.$store.getters["articles/getActiveArticle"];
    },
  },

  mounted() {
      this.$store.dispatch("articles/fetchActiveArticle", this.$route.params.id)
  }
};
</script>