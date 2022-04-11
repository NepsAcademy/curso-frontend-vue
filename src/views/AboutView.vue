<template>
  <div class="about">
    <p>
      Algumas coisas que aprendemos durante o desenvolvimento desse projeto foi:
    </p>

    <p>
      <b>Attribute Binding</b>
    </p>

    <p>
      Esse projeto foi criado como parte do curso
      <a :href="course_info.link">{{ course_info.title }}</a
      >.
    </p>

    <p>
      <b>Class e Styling Binding</b>
    </p>
    <ul>
      <li
        v-for="item in [0, 1, 2, 3, 4]"
        :key="item"
        :class="{ 'red-text': item % 2 == 0 }"
        :style="{ 'font-size': (item + 5) * 3 + 'px' }"
      >
        Item {{ item }}
      </li>
    </ul>

    <p>
      <b>Computed</b>
    </p>
    <p>Neps Academy existe há {{ n_years }} anos.</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutView",
  data() {
    return {
      info: {
        created_at: 2016,
      },
      course_info: {
        link: "https://neps.academy/br/course/desenvolvimento-web:-frontend",
        title: "Desenvolvimento Web: Frontend",
      },
    };
  },
  computed: {
    n_years() {
      return new Date().getFullYear() - this.info.created_at;
    },
  },
});
</script>

<style lang="scss" scoped>
.about {
  ul {
    margin-left: 16px;
  }

  .red-text {
    color: red;
  }
}
</style>
