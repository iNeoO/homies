<template>
  <div class="home">
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

    <YouTube
      v-if="videoId"
      class="youtubeVideoHomeView"
      :src="`https://www.youtube.com/watch?v=${videoId}`"
      @ready="onReady"
      ref="youtube"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const title = ref(null);
    const content = ref(null);
    const videoId = ref(null);

    const youtube = ref(null);

    const onReady = () => {
      youtube.value.playVideo();
    };

    onMounted(async () => {
      const response = await axios.get('http://homies.v-info.info/wp-json/wp/v2/pages/8');
      title.value = response.title.rendered;
      content.value = response.content.rendered;
      videoId.value = response.acf.videoyoutube;
    });

    return {
      title,
      content,
      videoId,
      youtube,
      onReady,
    };
  },
};
</script>
