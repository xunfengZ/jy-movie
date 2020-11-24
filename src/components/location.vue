
<template>
  <div>
    <div class="up">
      <div class="up2">
        <div class="filmtext">电影</div>
      </div>
      <div class="search">
          <span class="iconfont icon-sousuo"></span>
      </div>
      <div @click="cityswitch" class="citytext">
        {{ this.$store.state.city}}
        <span class="iconfont icon-jiantou9"></span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  //组件名字
  name: "location",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  //组件注册
  components: {},
  // vue数据集中管理
  data() {
    return {
      value: "1",
    };
  },
  //方法 函数写这里
  methods: {
      //切换城市
          cityswitch(){
      console.log('我进来cityswitch了')
      this.$router.push('/city')
       
    }
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : "";
    },
  },
  //以下是生命周期
  //组件创建之前  new操作符桥梁函数return 之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {},
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next((vm) => {});
    // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  },
  //组件路由守卫update更新
  beforeRouteUpdate(to, from, next) {
    // 同一页面，刷新不同数据时调用，
    next();
  },
  //组件路由守卫离开
  beforeRouteLeave(to, from, next) {
    // 离开当前路由页面时调用
    next();
  },
};
</script>





<style scoped lang="scss">

.up {
  height: 50px;
  border-bottom: 1px solid #eee;
  position: relative;

  .up2 {
    text-align: center;
    line-height: 50px;
    .filmtext {
      font-size: 20px;
    }
  }
  .search{
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 10px;
      margin-right: 10px;
      span{
          font-size: 25px;
          
      }
  }
}
.citytext {
  position: absolute;
  left: 10px;
  top: 15px;
  font-size: 15px;
}
.icon-jiantou9{
    font-size: 11px;
}
</style>



