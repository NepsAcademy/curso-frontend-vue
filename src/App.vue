<template>
  <v-app>
    <v-main>
      <v-row class="mx-0 d-flex justify-center">
        <div class="content-container">
          <v-row class="d-flex justify-center nav-bar">
            <router-link to="/">Mini Feed</router-link> |
            <router-link to="/create-post">Criar Postagem</router-link> |
            <router-link to="/user">Usuário</router-link> |
            <router-link to="/playground">Playground</router-link>
          </v-row>

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

.nav-bar {
  margin-top: 8px;
  margin-bottom: 16px;

  a {
    margin-right: 4px;
    margin-left: 4px;
    font-size: 1.2rem;
    color: black;
  }

  .router-link-active {
    color: #2474bf;
    font-weight: 600;
  }
}

.v-main {
  min-height: 100vh;
}

.v-application {
  background: #f0f0f0;
}
// .v-application {
//   //background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(0, 0, 0, 0.5)),
//   //  url('../assets/background_landing.svg') !important;
//   //background: linear-gradient(rgba(15, 15, 15, 0.6), rgba(0, 0, 0, 0.6)),
//   //  url('../assets/background_landing.svg') no-repeat center center fixed !important;
//   background: linear-gradient(
//       to bottom right,
//       rgba(10, 10, 10, 1),
//       rgba(12, 39, 63, 1)
//     )
//     no-repeat center center fixed !important;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover !important;
//   background-position: center;
// }
</style>
