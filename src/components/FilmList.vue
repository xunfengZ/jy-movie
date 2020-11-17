
<template>
  <div class="list">
    <!-- <Loading v-if="loading"></Loading> -->
    <van-loading size="50px"  vertical v-if="!isFlag">加载中...</van-loading>
    <!-- <Loading v-if="!isFlag"></Loading> -->
       
    <div class="item" 
    v-else
    v-for="(item,index) in films"
    :key='index'
    @click="goDetail(item.filmId)"
    >
      <div class="left">
        <img
          :src="item.poster"
          alt=""
        />
      </div>
      <div class="middle">
        <div>{{item.name}}
          <span class="filmType">{{item.filmType.name}}</span>
        </div>
        
        <div>
          <span v-if="type==1">观众评分</span>
          <span class="grade">{{item.grade}}</span>
        </div>
        <div >主演：
           <span v-for="(actor,index) in item.actors" :key='index'>{{actor.name}} &nbsp;</span> 
            </div>
        <div v-if="type==1">{{item.nation}}|{{item.runtime}}分钟</div>
      </div>
      <div class="right">
        <span v-if="type==1">购票</span>
        <span v-else>预约</span>
      </div>
    </div>
  </div>
</template>


<script>
//ui库导入的
import Vue from 'vue';
import { Loading } from 'vant';
Vue.use(Loading);

//自定义的
// import Loading from "@/components/Loading";

export default {
  //组件名字
  name: "filmlist",
  //接收父组件给的东西 type是接收什么东西  default 默认值
//   props: ["films", "type"],  //以前的写法 不推荐

    props: {

      films: {
        type: Array,
        default() {
          return [];
        }
      },
      type: {
        type: Number,
        default() {
          return [];
        }
      },

    },

  //组件注册
  components: { Loading },
  // vue数据集中管理
  data() {
    return {
      loading: true,
      
    };
  },
  //方法 函数写这里
  methods: {
    goDetail(filmid){
      console.log(this.$router.push({name:'detail',params:{filmid}}));
    }
  },
  //计算属性
  computed: {
      isFlag(){
        //   console.log('我在computed');
        //   console.log(this.films);
        //   console.log(Boolean(this.films));
        //   console.log(Boolean(this.films[0]));
        
        //因为this.film默认带有 __ob__:Oberserver 所以他转换为布尔值时一直为true 
        //只能通过下标0来确认是否传值进来
          // console.log(this.films);
          return this.films[0]
      }
  },
  //侦听器
  watch: {
    //    isFlag(){
    //     //   console.log('我在computed');
    //       console.log(this.films);
    //       return this.films[0]
    //   }
  },
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
    //   console.log('我在created');
    //       console.log(this.films[0]);
    //       console.log(Boolean(this.films));
        //   console.log(Boolean(this.films[0]));  
        //   console.log('我在created 结束');
  },

  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {
          //判断是否有数据
    // console.log(this.films.length);
    // console.log(this.type);


    // if (this.films.length > 0) {
    //   this.loading = false;
    // }
    //   console.log(this.films);
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
.list{
    margin-bottom: 50px;
}
.item {
  margin-top: 15px;
  padding-bottom: 15px;
  display: flex;
  color: #797d82;
  font-size: 13px;
  border-bottom: 1px solid #ededed;
}
.left {
  width: 77px;
  height: 100px;
  margin-left: 20px;
  margin-right: 10px;
  img {
    width: 66px;
    height: 100%;
  }
}
.middle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  div:nth-of-type(1) {
    color: #191a1b;
    font-size: 16px;
  }
  div:nth-of-type(3) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .filmType{
     
    display: inline-block;
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    vertical-align: middle;
  }

}
.right {
  width: 15%;
  display: flex;
  align-items: center;
  margin-right: 20px;
  span {
    border: 1px solid #ff5f16;
    background: white;
    color: #ff5f16;
    border-radius: 2px;
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    width: 50px;
    text-align: center;
  }
}
</style>



