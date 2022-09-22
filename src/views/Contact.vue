<template>
  <div class="contact">
    <div class="content">
      <h1
        v-if="title"
        v-html="title">
      </h1>
      <div
        v-if="content"
        v-html="content">
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const title = ref(null);
    const content = ref(null);

    onMounted(async () => {
      const response = await axios.get('http://homies.local/wp-json/wp/v2/pages/971');
      title.value = response.title.rendered;
      content.value = response.content.rendered;
    });

    return {
      title,
      content,
    };
  },
};
</script>
