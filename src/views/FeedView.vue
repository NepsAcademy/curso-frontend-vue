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
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [
        {
          author: {
            id: 1,
            username: "tiagobpires",
          },
          created: "2022-06-05T20:53:48.886111",
          id: 1,
          text: "Hello guys, first post here!",
        },
        {
          author: {
            id: 1,
            username: "tiagobpires",
          },
          created: "2022-06-05T20:53:48.890641",
          id: 2,
          text: "Neps is an awesome plataform :)",
        },
      ],
    };
  },
  mounted() {
    this.$axios.get("/posts/").then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<style lang="scss" scoped></style>
