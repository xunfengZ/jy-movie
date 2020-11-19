<template>
    <div id="app">

        <!-- 底部导航 -->
        <FooterNav v-if="isShow"></FooterNav>
        <!-- 路由容器 -->
        <router-view></router-view>
    </div>
</template>
<script>

import FooterNav from "@/components/FooterNav";
export default {
  name:'app',
    data() {
    return {
      isShow:true
    };
  },
    components: {
        FooterNav,

    },
    //组件创建之前  new操作符桥梁函数return 之前
  beforeCreate() {
    
  },
  //组件创建之后
  created() {
      this.eventBus.$on('footernav',(flag)=>{
          this.isShow=flag
      })

  },
  //页面渲染之前
  beforeMount() {

  },
  //页面渲染之后
  mounted() {

  },
  //页面销毁之前
  beforeDestroy() {

  },
  //页面销毁之后
  destroyed() {

  },
  //页面视图数据更新之前
  beforeUpdate() {

  },
  //页面视图数据更新之后
  updated() {

  },
    
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
// html{
//   font: 12px/1.5;
// }
html,
body {
  // 不能缩放
    touch-action: none;
    height: 100%;
    
    ul,
    li {
        list-style: none;
    }
}
</style>