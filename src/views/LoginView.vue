<template>
  <div v-if="user == null">
    <h1>Login</h1>

    <form @submit.prevent="login">
      <input type="text" placeholder="Usuário" v-model="username" />
      <input type="password" placeholder="Senha" v-model="password" />

      <button type="submit">Enter</button>
    </form>
  </div>
  <div v-else>
    <h1>User</h1>
    <div class="user-info">
      <p><b>ID:</b> {{ user.id }}</p>
      <p><b>Username:</b> {{ user.username }}</p>
      <p><b>Email:</b> {{ user.email }}</p>
      <p><b>Created at:</b> {{ user.created_at }}</p>
      <p><b>Birthdate:</b> {{ user.birthdate }}</p>
      <p><b>Role:</b> {{ user.role.name }}</p>

      <button class="logout-button" @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      user: null,
    };
  },
  mounted() {
    if (localStorage.getItem("authToken")) {
      this.fetchUser();
    }
  },
  methods: {
    login() {
      // console.log(this.$user);
      this.$axios
        .post("/auth/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.$axios.storeToken(response.data.access_token);
          this.fetchUser();
        })
        .catch((response) => {
          console.error(response.message);
        });
    },
    fetchUser() {
      this.$axios
        .get("/users/me")
        .then((response) => {
          this.user = response.data;
        })
        .catch((response) => {
          console.error(response.message);
        });
    },
    logout() {
      this.user = null;
      localStorage.removeItem("authToken");
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  height: 25px;
  width: 300px;
  border-radius: 4px;
  border-width: 1px;
  padding: 10px;
}

input::placeholder {
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

.logout-button {
  background: #f44;
}

.user-info {
  text-align: left;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
}
</style>
