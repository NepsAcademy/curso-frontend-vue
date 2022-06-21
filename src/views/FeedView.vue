<template>
  <div>
    <h1>Mini Feed</h1>
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :author="post.author"
      :created="post.created"
      :id="post.id"
      :text="post.text"
    />
    <PaginationRow v-model="page" :pages="pages" />
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import PaginationRow from "@/components/PaginationRow.vue";
export default {
  components: {
    PostCard,
    PaginationRow,
  },
  data() {
    return {
      posts: [],
      page: 1,
      pages: 1,
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.$axios
        .get("/posts/", {
          params: {
            page: this.page,
            reversed: true,
          },
        })
        .then((response) => {
          this.posts = response.data.posts;
          this.page = response.data.page;
          this.pages = response.data.pages;
        })
        .catch((error) => console.error(error.message));
    },
  },
  watch: {
    page() {
      this.fetchPosts();
    },
  },
};
</script>

<style lang="scss" scoped></style>
