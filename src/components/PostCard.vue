<template>
  <div class="post-card">
    <p class="author">
      <span
        ><b>{{ author.username }}</b></span
      >
      escreveu
    </p>
    <p class="text">{{ text }}</p>
    <p class="time">{{ created }}</p>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      default: null,
      required: true,
    },
    created: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-card {
  border: 1px solid #ccc;
  width: 800px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;

  padding: 12px;

  text-align: left;
}
</style>
