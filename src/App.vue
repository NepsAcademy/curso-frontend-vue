<template>
  <nav>
    <img src="@/assets/logo.png" alt="" />
    <div>
      <router-link to="/">Feed</router-link>
      <router-link to="/create">Create Post</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
  <router-view class="view" />
</template>

<style lang="scss"></style>
