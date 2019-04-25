<template>
  <div class="index">
    <!-- swipe轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item" alt="img">
      </van-swipe-item>
    </van-swipe>

    <!-- 首页导航 -->
    <div class="home">
      <div>
        <ul class="nav-box">
          <li class="nav-item" @click="jump('newslist')">
            <i><img src="../assets/imgs/menu01.png" alt=""></i>
            <p>新闻资讯</p>
          </li>
          <li class="nav-item">
            <i><img src="../assets/imgs/menu02.png" alt=""></i>
            <p>图片分享</p>
          </li>
          <li class="nav-item" @click="jump('goodslist')">
            <i><img src="../assets/imgs/menu03.png" alt=""></i>
            <p>商品购买</p>
          </li>
          <li class="nav-item">
            <i><img src="../assets/imgs/menu04.png" alt=""></i>
            <p>留言反馈</p>
          </li>
          <li class="nav-item">
            <i><img src="../assets/imgs/menu05.png" alt=""></i>
            <p>视频专区</p>
          </li>
          <li class="nav-item">
            <i><img src="../assets/imgs/menu06.png" alt=""></i>
            <p>联系我们</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">会员</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">搜索</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
// @ is an alias to /src
// 局部引入组件
// import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
// Vue.use(Swipe).use(SwipeItem)
export default {
  name: 'home',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data () {
    return {
      active: 0,
      imgList: [
        'http://m.itcast.cn/images/newslide/homepageandphone/20181528141522828.jpg',
        'http://m.itcast.cn/images/newslide/homepageandphone/20180918170957294.jpg',
        'http://m.itcast.cn/images/newslide/homepageandphone/20184827134845878.jpg'
      ]
    }
  },
  methods: {
    jump (to) {
      this.$router.push(to)
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  .van-swipe {
    height: 205px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .nav-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-top: 5px;
    .nav-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
      margin: 5px 0;
      cursor: pointer;
      p {
        line-height: 24px;
        font-size: 14px;
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
