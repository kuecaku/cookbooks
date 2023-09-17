<template>
  <div class="cook_card_main">
    <div class="photo">
      <div class="cover">
        <img :src="item.img" />
      </div>
      <div class="title">
        {{ item.title }}
      </div>
    </div>

    <div class="desc">
      <slot name="desc" :desc="item.desc"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  item: {
    type: Object,
    default() {
      return {
        img: '',
        title: '水煮肉片',
        desc: {
          title: '水煮肉片的做法',
          textlist: ['1. ', '2. ',],
        },
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.cook_card_main {
  box-sizing: border-box;
  width: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  padding-bottom: 10px;

  box-shadow: 0px 0px 10px #f6f6f6;
  .photo{
    transition: all 0.3s;
    transition-delay: 0.3s;
    .cover {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
  
      img {
        width: 98%;
        border-radius: 8px;
        object-fit: fill;
      }
      
    }

    .title {
      padding: 3px 5px;
      font-size: 16px;
    }
  }

  .desc {
    display: block;
    text-align: left;
    color: #fff;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #666, $alpha: 0.5);
    transform: rotateY(90deg);
    transition: all 0.3s;
    
    p {
      margin: 0;
    }
  }

  &:hover {
    box-shadow: 5px 25px 30px -35px #c7000b;
    .photo{
      transition-delay: 0s;
      transform: rotateY(-90deg);
    }
    .desc {
      transition-delay: 0.3s;
      transform: rotateY(0deg);
      padding: 5px;
    }
  }
}
</style>
