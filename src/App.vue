<template>
  <v-app>
    <v-main>
      <v-row class="mx-0 d-flex justify-center">
        <div class="content-container">
          <router-link to="/">Feed</router-link> |
          <router-link to="/create-post">Criar Postagem</router-link> |
          <router-link to="/user">Usuário</router-link> |
          <router-link to="/playground">Playground</router-link>

          <router-view class="pt-6" />
        </div>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.content-container {
  padding-top: 32px;
  width: 800px;
  max-width: 1000px;

  p {
    margin-bottom: 8px;
  }
}
</style>
