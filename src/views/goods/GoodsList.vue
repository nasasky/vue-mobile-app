<template>
  <div class="goods-list">
    <!-- 头部nav -->
    <van-nav-bar
      title="新闻资讯"
      left-text="返回"
      right-text="刷新"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="initPage()"
    />
    <ul>
      <li v-for="good of goodsList" :key="good.id" class="goods-body">
        <div class="goods-item" @click="jumpToNewsDetail(good.id)">
          <img :src="good.img_url" alt="">
          <h4 class="goods-title">{{good.title}}</h4>
          <h4 class="goods-zhaiyao">{{good.zhaiyao}}</h4>
          <div class="price-info">
            <span class="price-new">￥{{good.sell_price}}</span>
            <span class="price-old">￥{{good.market_price}}</span>
          </div>
          <div class="sell-info">
            <span class="sell-status">热卖中</span>
            <span class="sell-leftcount">剩下{{good.stock_quantity}}件</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getGoodsList } from '@/api'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  created () {
    this.initPage()
  },
  methods: {
    // 初始化列表
    initPage () {
      getGoodsList().then(res => {
        // console.log(res)
        this.goodsList = res.data.message
      }).catch(err => {
        console.log(err)
      })
    },
    // 跳转到商品详情
    jumpToNewsDetail (id) {
      this.$router.push({ name: 'goodsdetail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  background-color: #f4f4f4;
  h4 {
    font-size: 12px;
    font-weight: bold;
    height: 32px;
    // 多行文本超出省略号
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .goods-body {
    background-color: #eee;
    .goods-item {
      float: left;
      width: 50%;
      box-sizing: border-box;
      padding: 10px;
      position: relative;
      background-color: white;
      &:nth-child(2n+1) {
          padding-left: 10px;
          padding-right: 10px;
      }
      &:nth-child(2n) {
          padding-right: 10px;
          padding-left: 10px;
      }
      img {
        width: 165.5px;
        height: 165.5px;
      }
      .goods-title {
        box-sizing: border-box;
        height: 31px;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        color: #232326;
        margin-top: 5px;
        line-height: 16px;
        margin-bottom: 3px;
        padding: 0 4px;
      }
      .price-info {
        position: relative;
        height: 26px;
        font-size: 13px;
        overflow: hidden;
        .price-new {
          color: #f23030;
          position: relative;
          top: 1px;
          height: 25px;
          line-height: 25px;
        }
        .price-old {
          position: absolute;
          top: 1px;
          right: 0px;
          color: #686868;
          width: 49px;
          height: 25px;
          line-height: 25px;
          text-decoration: line-through;
        }
      }
      .sell-info {
        display: flex;
        font-size: 16px;
        justify-content: space-between;
        .sell-status {
          color: #ff4444;
          font-weight: bold;
        }
        .sell-leftcount {
          
        }
      }
    }
  }
}
</style>
