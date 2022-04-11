<template>
  <v-card class="mb-4 post-card">
    <v-card-text>
      <p class="author">
        <span v-if="author"
          ><b>{{ author.username }}</b></span
        >
        <span v-else
          ><b>Usuário {{ author_id }}</b></span
        >
        escreveu
      </p>
      <p class="text">{{ text }}</p>
      <p class="time">{{ formatted_time }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";

export default {
  props: {
    author: {
      type: Object,
      default: null,
    },
    author_id: {
      type: Number,
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
  computed: {
    formatted_time() {
      return moment.utc(this.created).local().format("DD/MM/YYYY HH:mm");
    },
  },
};
</script>

<style lang="scss" scoped></style>
