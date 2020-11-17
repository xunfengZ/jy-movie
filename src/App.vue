<template>
    <div id="app">

        <!-- 底部导航 -->
        <FooterNav></FooterNav>
        <!-- 路由容器 -->
        <router-view></router-view>
    </div>
</template>
<script>

import FooterNav from "@/components/FooterNav";
export default {
  name:'app',
    components: {
        FooterNav,

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