<template>
  <div>
    <h1>Create Post</h1>
    <form @submit.prevent="createPost">
      <textarea rows="15" placeholder="Text" v-model="text" />

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    createPost() {
      this.$axios
        .post("/posts/", { text: this.text })
        .then((response) => {
          console.log(response.data);
          this.text = "";
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  display: block;
  width: 100%;
  min-width: 300px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  border-radius: 8px;
  padding: 10px;

  font-size: 1rem;
}

textarea::placeholder {
  font-size: 1rem;
}

button {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 10px;
  width: 325px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
}
</style>
