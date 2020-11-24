<template>

  <div>
    <!-- 头 -->
    <location class="fixed">
    </location>
    <!-- 电影院列表 -->
  <div class="cinemas">
    <ul>
      <template v-for="(item,index) in cinemas">
          <router-link 
          :key="index"
          tag="a"
          to="/"
          >
          <div class="left">
            <p class="name">{{item.name}}</p>
            <span class="address">{{item.address}}</span>
          </div>
          <div class="right">
            <p class="up">
              <i>￥</i>
              <span class="lowprice">{{item.lowPrice/100}}</span>
              <span>&nbsp;起</span>
            </p>
            <p class="down">
              {{item.Distance.toFixed(2)}}km
            </p>
          </div>
          </router-link >
      </template>
    </ul>
  </div>
  </div>
</template>


<script>
import { cinemaList } from "@/api/api";
import axios from 'axios'
import location from '@/components/location'
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
  components: {
    location
    },
  // vue数据集中管理
  data() {
    return {
      cinemas:[]
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
    // console.log(document.documentElement.clientHeight-100);
    // this.height=document.documentElement.clientHeight-100+'px';
  },
  //页面渲染之前
  beforeMount() {

  },
  //页面渲染之后
 async mounted() {
   let res=await cinemaList(this.$store.state.cityId)
  //  console.log(this.$store.state.cityId);
  //  console.log(res);
   this.cinemas=res.data.data.cinemas

   //解决进入城市后，滚动条不从头开始的bug
   window.scroll(0,0)
  //  console.log(this.cinemas);
  // console.log(this.$store.state.cityId);
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
// .cinemas{
//   overflow: hidden;
// }
.fixed{
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;

}
ul{
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;

  a{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    border-bottom: 1px solid #ededed;
    .left{
      width:calc(100% - 65px);
      text-align: left;
      .name{
        margin-bottom: 10px;
        font-size: 15px;
        color: #18191a;
      }
      .address{
            font-size: 13px;
            color: #797d82;
            display: block;
            max-width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
      }
    }
    .right{
      width: 70px;
      text-align: center;
      .up{
            font-size: 15px;
            color: #ff5f16;
            display: block;
            span{
              font-size: 14px;
            }
      }
      .down{
       display: block;
       font-size: 11px;
      //  font-weight: bold;
      margin-top: 10px;
      }
    }
  }
}
</style>
