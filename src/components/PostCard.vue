<template>
  <div class="post-card">
    <p class="author">
      <span
        ><b>{{ author.username }}</b></span
      >
      wrote
    </p>
    <!-- <p class="text">{{ text }}</p> -->
    <Markdown class="text" :source="text" />
    <p class="time">{{ created }}</p>
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
import "highlight.js/styles/monokai.css";
export default {
  components: {
    Markdown,
  },
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

<style lang="scss">
.post-card {
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: black !important;
  }
}
</style>

<style lang="scss" scoped>
.post-card {
  background: #f4f5f6;
  width: 100%;

  border-radius: 8px;
  margin-top: 24px;
  padding: 12px;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.11);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.11);

  // Fix based on https://stackoverflow.com/questions/271067/how-can-i-make-a-textarea-100-width-without-overflowing-when-padding-is-present
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  .text {
    font-size: 1.1rem;
  }

  .time {
    color: #aaa !important;
  }
}
</style>
