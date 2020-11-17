<template>
  <div class="box">
      <div class="out-box"></div>
      <div class="inner-box"></div>
      <div class="text-box">loading</div>
  </div>
</template>


// <script>
// export default {
//     //组件名字
//   name: "loading",
//   //接收父组件给的东西 type是接收什么东西  default 默认值
//   props: {
//     list: {
//       type: Array,
//       default() {
//         return [];
//       }
//     },
//     color:{
//         type: String,
//         default:'#000'
//     }
//   },
//   //组件注册
//   components: {},
//   // vue数据集中管理
//   data() {
//     return {
//       value: "1"
//     };
//   },
//   //方法 函数写这里
//   methods: {},
// //计算属性
//   computed: {},
//   //侦听器
//   watch: {},
//   //过滤器
//   filters: {
//       toUpcase(value) {
//           return value ? value.toUpperCase():''
//       },
//   },
// //以下是生命周期
// //组件创建之前  new操作符桥梁函数return 之前
//   beforeCreate() {
    
//   },
//   //组件创建之后
//   created() {

//   },
//   //页面渲染之前
//   beforeMount() {

//   },
//   //页面渲染之后
//   mounted() {

//   },
//   //页面销毁之前
//   beforeDestroy() {

//   },
//   //页面销毁之后
//   destroyed() {

//   },
//   //页面视图数据更新之前
//   beforeUpdate() {

//   },
//   //页面视图数据更新之后
//   updated() {

//   },
//   //组件路由守卫enter
//   beforeRouteEnter(to, from, next) {
//     next(vm => {});
//     // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
//   },
//    //组件路由守卫update更新
//   beforeRouteUpdate(to, from, next) {
//     // 同一页面，刷新不同数据时调用，
//     next();
//   },
// //组件路由守卫离开
//   beforeRouteLeave(to, from, next) {
//     // 离开当前路由页面时调用
//     next();
//   }
// };
// </script>





<style scoped lang="scss">
.box {
    width: 100%;
    position: fixed;
    top: 200px;
    left: 0;
    bottom: 50px;
    background-color: #fdfaf5;
}

.out-box {
    width: 150px;
    height: 150px;
    border-top: 4px solid #e0787f;
    border-right: 4px solid #e0787f;
    border-bottom: 4px solid #f0f0f0;
    border-left: 4px solid #f0f0f0;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -75px;
    animation: 2.5s ease-in-out 0s normal none infinite rotateTwo;
    -webkit-animation: 2.5s ease-in-out 0s normal none infinite rotateTwo;
}

.inner-box {
    width: 130px;
    height: 130px;
    border-bottom: 2px solid #99749d;
    border-top: 2px solid #f0f0f0;
    border-right: 2px solid #f0f0f0;
    border-left: 2px solid #99749d;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -65px;
    margin-top: -65px;
    animation: 2.5s linear 0s normal none infinite rotate;
    -webkit-animation: 2.5s linear 0s normal none infinite rotate;
}

.text-box {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -60px;
    margin-top: -60px;
    color: #cccccc;
    font-size: 24px;
    line-height: 120px;
    text-align: center;
    animation: 4s linear 0s normal none infinite flash;
    -webkit-animation: 4s linear 0s normal none infinite flash;
}

@-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes rotateTwo {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(-360deg);
    }
}

@keyframes rotateTwo {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-360deg);
    }
}

@-webkit-keyframes flash {
    from,
    50%,
    to {
        opacity: 1;
    }

    25%,
    75% {
        opacity: 0;
    }
}

@keyframes flash {
    from,
    50%,
    to {
        opacity: 1;
    }

    25%,
    75% {
        opacity: 0;
    }
}
</style>
