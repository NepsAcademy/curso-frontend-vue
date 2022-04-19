<template>
  <div class="login-form pt-6" v-if="user == null">
    <v-text-field
      v-model="form.username"
      label="Username"
      variant="contained"
    ></v-text-field>
    <v-text-field
      v-model="form.password"
      label="Password"
      variant="contained"
      type="password"
    ></v-text-field>
    <v-btn @click="login()">Entrar</v-btn>
  </div>
  <div class="user-details" v-else>
    <h4>Usuário: {{ user.username }}</h4>
    <h4>Email: {{ user.email }}</h4>
    <h4>Criado em: {{ user.created_at }}</h4>
    <h4>Aniversário: {{ user.birthdate }}</h4>

    <v-btn @click="logout()">Logout</v-btn>
  </div>

  <v-snackbar v-model="could_not_login_snackbar">
    <p>Não conseguimos logar usando essas credenciais.</p>
  </v-snackbar>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      user: null,
      could_not_login_snackbar: false,
      form: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    this.fetch_user();
  },
  methods: {
    login() {
      this.$axios
        .post("/auth/login", this.form)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("authToken", response.data.access_token);
          this.$axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.access_token}`;

          this.fetch_user();
        })
        .catch((error) => {
          console.log(error);
          if (error.response && error.response.status == 401) {
            this.could_not_login_snackbar = true;
          }
        });
    },
    logout() {
      localStorage.removeItem("authToken");
      this.$axios.defaults.headers.common["Authorization"] = null;
      this.user = null;
    },
    fetch_user() {
      this.$axios.get("/users/me").then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>

<style lang="scss">
.login-form {
  .v-btn {
    color: white;
    background: #2474bf;
  }
}

.user-details {
  .v-btn {
    margin-top: 16px;
    color: white;
    background: #2474bf;
  }
}
</style>
