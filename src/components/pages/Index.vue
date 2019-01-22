<template>
  <div class="container">
    <div class="header">
      <div class="search">
        <router-link
          :src="iconClassify"
          alt="分类"
          class="iconClassify"
          to="/category"
          tag="img"
        ></router-link>
        <router-link class="searchBar" to="/search" tag="div">
          <span class="dj">DJ</span>
          <img :src="iconSearch" alt="搜索" class="iconSearch" />
          <input
            type="text"
            class="searchInput"
            placeholder="良品铺子限时买一送一"
          />
        </router-link>
        <router-link to="/login" class="login">登录</router-link>
      </div>
      <!--引入组件以后，会出现z-index的问题，所以要根据情况修改z-index-->
      <div class="swipe">
        <van-swipe :autoplay="1000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image.imageUrl" class="imageUrl" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      iconClassify: require('../../assets/icons/classify.png'),
      iconSearch: require('../../assets/icons/search.png'),
      images: [
        {
          imageUrl:
            '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/19007/38/5728/154326/5c41aadfE6ad6c471/293a3cd2744eb3df.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },
        {
          imageUrl:
            '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/24589/24/3938/111181/5c2d8b75E9e2e4d38/d323576586ee28c1.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },
        {
          imageUrl:
            '//m.360buyimg.com/mobilecms/s750x366_jfs/t23554/196/252614617/149239/73b66270/5b2a6ecdNc10d686b.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/stylus.styl"
@media screen and (max-width: 374px) {
  .van-swipe {
    max-height 156px
  }
}
@media screen and (min-width: 375px) and (max-width: 413px) {
  .van-swipe {
    max-height 183px
  }
}
@media screen and (min-width: 414px){
  .van-swipe {
    max-height 202px
  }
}
.container
  .header
    position relative
    .search
      padding 0 r(15)
      box-sizing border-box
      width 100%
      position absolute
      top r(10)
      left 0
      z-index 2
      display flex
      justify-content space-between
      align-items center
      .iconClassify
        width 1rem
      .searchBar
        width 70%
        position relative
        .dj
          position absolute
          top 50%
          left r(12)
          transform translateY(-50%)
          color orange
          font-size r(18)
          line-height r(18)
          font-weight 550
          padding-right r(5)
          border-right 1px solid #ddd
        .iconSearch
          position absolute
          top 50%
          left r(45)
          transform translateY(-50%)
          width 1rem
        .searchInput
          padding r(6)
          box-sizing border-box
          width 100%
          border 1px solid transparent
          border-radius 50px
          font-size 12px
          padding-left  r(70)
          overflow hidden
      .login
        color white
        font-size 14px
    .swipe
      position relative
      z-index -1
      .van-swipe
        margin 0
        padding 0
        .van-swipe__track
          .van-swipe-item
            img
              display block
              margin 0
              padding 0
              width 100%
</style>
