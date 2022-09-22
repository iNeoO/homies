<template>
  <div class="history">
    <div class="columns has-text-centered is-vcentered">
      <div
        class="column is-half"
        v-if="article[60]"
      >
        <div v-html="article[60].content.rendered" />
      </div>
      <div
        class="column is-half"
        v-if="article['57']">

        <h2 class="title is-size-6" v-html="article[57].title.rendered"/>
        <div v-html="article[57].content.rendered"/>

        <h2 class="title is-size-6" v-html="article[64].title.rendered"/>
        <div v-html="article[64].content.rendered"/>

      </div>
    </div>

    <div class="columns has-text-centered is-vcentered">
      <div
        class="column is-half"
        v-if="article[60]"
      >
        <div v-html="article[60].content.rendered"/>
      </div>
      <div
        class="column is-half "
        v-if="article[66]"
      >
        <h2 class="title is-size-6" v-html="article[66].title.rendered"/>
        <div v-html="article[66].content.rendered"/>
      </div>
    </div>

    <div class="columns has-text-centered is-vcentered">
      <div
        class="column"
        v-if="article[68]"
      >
        <h2 class="title is-size-6" v-html="article[68].title.rendered"/>
        <div v-html="article[68].content.rendered"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const articles = ref({});
    const articlesSorted = computed(() => [...articles.value].sort((articleA, articleB) => {
      if (articleA.id < articleB.id) {
        return -1;
      }
      if (articleA.id > articleB.id) {
        return 1;
      }
      return 0;
    }));

    const getArticle = async (id) => {
      const response = await axios.get(`https://homies.v-info.info/wp-json/wp/v2/posts/${id}`);
      articles.value = {
        ...articles.value,
        [id]: response,
      };
    };

    onMounted(async () => {
      Promise.all([getArticle(57), getArticle(60), getArticle(64), getArticle(66), getArticle(68)]);
    });

    return {
      articles,
      articlesSorted,
    };
  },
};
</script>
