<template>
  <div>
    <!-- 首页大图 -->
    <div class="top-header">
      <img
        src="https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70"
        alt=""
        class="img-wrap"
      />
    </div>
    <!-- 定位的城市 -->
    <div class="fix" @click="cityswitch">
      <span>{{ this.$store.state.city }}</span>
      <span class="iconfont icon-jiantou9"></span>
    </div>
    <!-- 城市 -->
    <!-- <location></location> -->
    <!-- 中间nav -->
    <FilmListTopNav :class="fixed ? 'fixed' : ''"></FilmListTopNav>
    <router-view></router-view>
    <!-- tabs -->
  </div>
</template>


<script>
import location from "@/components/location";
import FilmListTopNav from "@/components/FilmListTopNav";
import axios from "axios";
//导入大图的函数
// import {banner} from '../../api/api'
export default {
  //组件名字
  name: "film",
  // vue数据集中管理
  data: function () {
    return {
      fixed: false,
    };
  },
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
  components: {
    FilmListTopNav,
    location,
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
  beforeMount() {},
  //页面渲染之后 此时dom产生
  mounted() {
    //添加滚动条监听事件
    window.addEventListener("scroll", (e) => {
      let top = document.documentElement.scrollTop;
      if (top > 300) {
        // console.log(1);
        // console.log(this);  //使用匿名函数 this指向window   使用箭头函数 this指向VueComponent
        this.fixed = true;
        // console.log(this.fixed);
      } else {
        this.fixed = false;
      }
    });
  },
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
.fix {
  position: absolute;
  top: 15px;
  left: 8px;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
.fixed {
  position: fixed;
  top: 0;
  background: #fff;
}
.top-header {
  width: 100%;
  overflow: hidden;

  //这里的图不能加定位，不然会影响中间的导航条
  // position: absolute;
  // top: 0;
  height: 200px;

  .img-wrap {
    width: 100%;
    height: 100%;
    // position: absolute;
    // top: 50%;
    // fill /contain /cover/ none /scale-down
    object-fit: cover;
  }
}
</style>
