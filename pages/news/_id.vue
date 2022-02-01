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
<div class="wrapper ma-5">
			<h3 class="title">Оставить комментарий</h3>

			<form @submit.prevent="handleForm" class="mb-5">
				<v-text-field
					v-model="name"
					:counter="10"
					label="Имя"
					required
				></v-text-field>

				<v-text-field
					v-model="comment"
					:counter="100"
					label="Комментарий"
					required
				></v-text-field>

				<v-btn class="mr-4" type="submit" :disabled="validateForm">Отправить</v-btn>
			</form>

    </div>

    <div class="comments">
      <div class="comment"
      v-for="comment in activeComments"
      :key="comment.id">
        <p class="name"><strong>Имя:</strong><br>{{comment.user_name}}</p>
        <p class="text"><strong>Комментарий:</strong><br>{{comment.comment}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeArticle() {
      return this.$store.getters["articles/getActiveArticle"];
    },
    activeComments() {
        return this.$store.getters["articles/getActiveComments"]
    },
    validateForm() {
			return this.name.length == 0 || this.comment.length == 0 || this.name.length > 10 || this.comment.length > 100
		},
  },
  mounted() {
    this.$store.dispatch("articles/fetchActiveArticle", this.$route.params.id);
    this.$store.dispatch("articles/fetchActiveComments", this.$route.params.id);
  },
  methods: {
		async handleForm() {
			try {
				const user_name = this.name,
					comment = this.comment
				await fetch(
					`http://demo-api.vsdev.space/api/articles/${this.activeArticle.id}/comments`, 
					{
						method: 'POST',
						body: JSON.stringify({ user_name, comment })
					}
				)
				this.$store.dispatch('articles/fetchActiveComments', this.activeArticle.id)
				this.name = ''
				this.comment = ''
			} catch (e) {
				console.log(e)
			}
		}
	},
  data() {
    return {name:"", comment:""}
  }
};
</script>