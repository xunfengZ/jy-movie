<template>
  <div>
    <FilmList :films='films' :key="'film'+films.length" :type="type"></FilmList>
  </div>
  
</template>


<script>
import FilmList from '@/components/FilmList'
import {comingSoonListData} from '@/api/api.js'
export default {
    //组件名字
  name: "comingsoon",
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
  components: {
    FilmList
  },
  // vue数据集中管理
  data() {
    return {
      page:1,
      films:[],
      type:2
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
    
  },
  //组件创建之后
  created() {

  },
  //页面渲染之前
  beforeMount() {

  },
  //页面渲染之后
  async mounted() {
   let res=await comingSoonListData(this.page);
   this.films=res.data.data.films
   console.log(this.films);
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
