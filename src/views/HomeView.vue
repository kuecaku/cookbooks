<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="content" v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
      <CookCard v-for="(cook, i) in cookBook" :key="i" :item="cook" v-masonry-tile class="item">
        <template #desc="{desc}">
          <div class="desc">
            <p class="cook_title"> {{ desc.title }}</p>
            <p v-for="(item,index) in desc.textlist" :key="index" class="cook_step">{{ item }}</p>
          </div>
        </template>
      </CookCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import CookCard from '@/components/CookCard.vue';
import { cookBook } from '@/util/types';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CookCard,
  },
  data() {
    return {
      cookBook,
    };
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.content {
  margin: auto;
  max-width: 1600px;

  .item { 
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .cook_title{
    margin-top: 0;
  }
  .cook_step{
    margin: 0;
  }
}
</style>
