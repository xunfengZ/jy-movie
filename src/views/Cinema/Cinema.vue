<template>
  <div>
    <div ref="xx">
    {{msg}}
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
    //组件名字
  name: "cinema",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    color:{
        type: String,
        default:'#000'
    }
  },
  //组件注册
  components: {},
  // vue数据集中管理
  data() {
    return {
      value: "1",
      msg:1111
    };
  },
  //方法 函数写这里
  methods: {},
//计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
      toUpcase(value) {
          return value ? value.toUpperCase():''
      },
  },
//以下是生命周期
//组件创建之前  new操作符桥梁函数return 之前
  beforeCreate() {
    console.log(1);
  },
  //组件创建之后
  created() {
    this.$nextTick(()=>{
      console.log(2);
    })
  },
  //页面渲染之前
  beforeMount() {

  },
  //页面渲染之后
  mounted() {
    //改变数据之后需要diff和patch算法比对（这里是异步操作），需要一定的时间。这时候异步任务就会挂起
    this.msg=22222
    // console.log('first',this.$refs.xx.innerHTML);
    //nextTick会在diff和patch之后 重新渲染时 找时间再插入
    // this.$nextTick(()=>{
    //   console.log('second',this.$refs.xx.innerHTML);
    // })
    // setTimeout(() => {
    //    console.log('second',this.$refs.xx.innerHTML);
    // }, 100);
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
    console.log(3);
  },
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next(vm => {});
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
  }
};
</script>





<style scoped lang="scss">
</style>
