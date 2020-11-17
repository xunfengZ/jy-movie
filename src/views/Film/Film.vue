<template>
  <div>
            <!-- 中间nav -->
        <FilmListTopNav></FilmListTopNav>
     <!-- 首页大图 -->
      <div class="top-header">
          <img src="https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70" alt="" class="img-wrap">
          </div>
          
          <router-view></router-view>
    <!-- tabs -->

  </div>
  
</template>


<script>
import FilmListTopNav from "@/components/FilmListTopNav"
import axios from 'axios'
//导入大图的函数
// import {banner} from '../../api/api'
export default {
    //组件名字
  name: "film",
    // vue数据集中管理
  data:function(){
      return {
          list1:[]
      }
  },
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
  components: {FilmListTopNav},

  //方法 函数写这里
  methods: {
      fn(){
          
      }
  },
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
      //添加拦截器  不然获取不到数据 提示跨域


          // axios.interceptors.request.use(function(config){

          //     config.headers={
          //         "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605418550380220569812993"}',
          //         "X-Host": "mall.cfg.film-float.banner",
          //     }
          //   //   console.log(config);
          //     return config
          // },function(err){
          //     if(err){
          //         console.log(err);
          //     }
          // })
          // //发送axios请求
          // axios.get('https://m.maizuo.com/gateway?type=2&cityId=310100&k=7972438').then(res=>{
              
          //     this.list1=res.data.data
          //     // console.log(this.list1);
          // })
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
.top-header{
    width: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        height: 200px;
        
.img-wrap{
    width: 100%;
    height: 100%;
    // position: absolute;
    // top: 50%;
    // fill /contain /cover/ none /scale-down
    object-fit:cover; 
}
}
</style>
