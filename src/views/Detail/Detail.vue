
<template>
  <div class="box">
    <van-loading size="50px" vertical v-if="watchFlag">加载中...</van-loading>
    <div v-else>
      <div class="film-detail">
        <!-- 还没写 -->
        <div class="f-header"></div>
        <div class="img-container">
          <img v-lazy="film.poster" alt="" />
        </div>
        <!-- detail -->
        <div class="detail">
          <div class="f-name">
            <span class="name">{{ film.name }}</span>
            <span class="type" v-if="film.item">{{ film.item.name }}</span>
          </div>
          <!-- 暂无 -->
          <div class="f-grade">
            <span class="grade"></span>
          </div>
          <div class="f-cate">{{ film.category }}</div>
          <div class="f-prem">{{ film.premiereAt | timeparser }}上映</div>
          <div class="f-nation">
            {{ film.nation }} | {{ film.runtime }} 分钟
          </div>
          <div class="f-syno" :class="onOff ? 'hide' : ''">
            {{ film.synopsis }}
          </div>
          <div class="toggle" @click="toggleText">
            <img
              :class="!onOff ? 'upper' : ''"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
       
        <!-- swiper插件 -->
          <div>
            <Swiper :key="'actors'+film.actors.length">
              <div
              v-for="(item,index) in film.actors"
              :key="index"
              class="swiper-slide"
              > 
                  <img v-lazy="item.avatarAddress" alt="" >
              </div>
            </Swiper>
          </div>
      </div>
      <!-- 底部 -->
      <!-- <buytiket></buytiket> -->
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Loading } from "vant";
Vue.use(Loading);
import buytiket from "@/components/BuyTicket";
import { movieDetail } from "@/api/api";
import moment from "moment";
import Swiper from '@/components/Swiper'

export default {
  //组件名字
  name: "detail",
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
    buytiket,
    Swiper

 
  },
  // vue数据集中管理
  data() {
    return {
      film: {
        actors:[]
      },
      filmType: "",
      watchFlag: true,
      onOff: false,
    };
  },
  //方法 函数写这里
  methods: {
    toggleText() {
      if (this.onOff) {
        this.onOff = false;
      } else {
        this.onOff = true;
      }
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {
    film(n, o) {
      
      if (n != 0) {
        this.watchFlag = false;
      }
    },
  },
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : "";
    },
    timeparser(value) {
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },
  //以下是生命周期
  //组件创建之前  new操作符桥梁函数return 之前
  beforeCreate() {},
  //组件创建之后
  created() {
    
  },
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  async mounted() {
    //  console.log(this.$route.params.filmid);
    let res = await movieDetail(this.$route.params.filmid);
    //  console.log(res);
    this.film = res.data.data.film;
    //  this.filmType=this.film.item.name
    // console.log(this.film);
    this.eventBus.$emit('footernav',false)
  },
  //页面销毁之前
  beforeDestroy() {

  },
  //页面销毁之后
  destroyed() {
    this.eventBus.$emit('footernav',true)
  },
  //页面视图数据更新之前
  beforeUpdate() {
  },
  //页面视图数据更新之后
  updated() {
    
  },
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


.box {
  background: #f4f4f4;
}
.film-detail {
  width: 100%;
  .toggle {
    text-align: center;
    display: block;
    height: auto;
    width: 20px;
    margin: auto;
    line-height: normal;
    .upper {
      transform: rotate(180deg);
      text-align: center;
      display: block;
      transition: height 0.5s ease;
    }
  }
  .img-container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
      // position: absolute;
      // top: -50%;
    }
  }
  .detail {
    background-color: #fff;
    // height: 200px;
    padding: 15px;
    padding-top: 12px;
    .f-name {
      width: 250px;
      .name {
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
        vertical-align: middle;
      }
      .type {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }
    }
    .f-cate {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .f-prem {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .f-nation {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .f-syno {
      height: 135px;
      margin-top: 15px;
      font-size: 13px;
      color: #797d82;
      transition: height 0.5s ease;
    }
  }
  // swiper
.swiper-slide {
  img {
    width: 80px;
  }
}
}
.hide {
  height: 38px !important;
  overflow: hidden;
  transition: height 0.5s ease;
}

</style>



