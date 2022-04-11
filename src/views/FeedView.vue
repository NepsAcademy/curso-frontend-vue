<template>
  <div class="blog">
    <h1>Mini Feed</h1>
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :author="post.author_id in authors ? authors[post.author_id] : null"
      :author_id="post.author_id"
      :text="post.text"
      :created="post.created"
      class="mb-4 post-card"
    />
    <v-pagination v-model="page" :length="total_pages"></v-pagination>
  </div>

  <v-snackbar v-model="not_logged_in_snackbar">
    <p>Você precisa estar logado para ver quem mandou cada mensagem.</p>
  </v-snackbar>
</template>

<script>
import { defineComponent } from "vue";
import PostCard from "@/components/PostCard.vue";

export default defineComponent({
  name: "FeedView",
  components: {
    PostCard,
  },
  data() {
    return {
      not_logged_in_snackbar: false,
      page: 1,
      total_pages: 1,
      authors: {},
      posts: [],
    };
  },

  created() {
    this.fetch_posts();
  },
  methods: {
    async fetch_posts() {
      try {
        const response = await this.$axios.get("/posts/", {
          params: {
            reversed: true,
            page: this.page,
          },
        });

        console.log(response);

        this.posts = response.data.posts;
        this.total_pages = response.data.pages;

        for (let post of this.posts) {
          try {
            console.log(post.author_id);
            const user_response = await this.$axios.get(
              `/users/${post.author_id}`
            );

            let author_tmp = user_response.data;

            if (!(author_tmp.id in this.authors)) {
              this.authors[author_tmp.id] = author_tmp;
            }
          } catch (error) {
            console.error(error);
            if (error.response && error.response.status == 401) {
              this.not_logged_in_snackbar = true;
            }
            break;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    page() {
      this.fetch_posts();
    },
  },
});
</script>

<style scoped lang="scss">
.blog {
  h1 {
    margin-bottom: 16px;
  }

  .author {
    margin-bottom: 8px;
    color: black;
  }

  .text {
    margin-bottom: 8px;
    color: black;
  }

  .time {
    color: grey;
  }
}
</style>
