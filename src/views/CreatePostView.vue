<template>
  <div class="create-post">
    <v-textarea
      label="Label"
      auto-grow
      variant="outlined"
      v-model="form.text"
    ></v-textarea>
    <v-btn @click="create_post()"> Enviar </v-btn>

    <v-snackbar v-model="not_logged_in_snackbar">
      <p>Você precisa estar logado para criar uma postagem.</p>
    </v-snackbar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CreatePostView",
  data() {
    return {
      not_logged_in_snackbar: false,
      form: {
        text: "",
      },
    };
  },
  methods: {
    async create_post() {
      try {
        const response = await this.$axios.post("/posts/", this.form);
        console.log(response);
        this.form.text = "";
      } catch (error) {
        console.error(error.response.status);
        if (error.response && error.response.status == 401) {
          this.not_logged_in_snackbar = true;
        }
      }
    },
  },
});
</script>

<style lang="scss">
.create-post {
  .v-btn {
    color: white;
    background: #2474bf;
  }
}
</style>
