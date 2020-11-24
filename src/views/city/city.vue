
<template>
  <div>
   <van-index-bar :index-list="indexList" highlight-color="green">
    <template v-for="(item,index) in dataList">
        
          <van-index-anchor :index="item.index" :key="index" style="background:#ccc" />
                <van-cell 
                v-for="(v,k) in item.data"
                :key="k"
                :title="v.name"
                @click='changeCity(v.name,v.cityId)'
                 />
    </template>
</van-index-bar>
  </div>
</template>
<script>
import { cityListData } from "@/api/api";
import Vue from 'vue';
import { IndexBar, IndexAnchor,Cell } from 'vant';
import "vant/lib/index.css";
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell)
export default {
    //组件名字
  name: "city",
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
      indexList:[],//索引列表 
      dataList:[]  //索引对应的城市列表
    };
  },
  //方法 函数写这里
  methods: {
      changeCity(name,id){
          this.$store.commit('changeCity',name)
          this.$store.commit('changeId',id)
          //跳转
          this.$router.push('/cinema')
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
      this.eventBus.$emit('footernav',false)
  },
  //页面渲染之前
  beforeMount() {

  },
  //页面渲染之后
 async mounted() {
     /*想要的形式  需要剔除无效的字母
    {
        a:{
            cityId: 110100
            isHot: 1
            name: "北京"
            pinyin: "beijing"
        },
         b:{
            cityId: 120100
            isHot: 0
            name: "天津"
            pinyin: "tianjin"
        }
    }

        */
     var data=await cityListData();


    //  let cities=data.data.data.cities
    // //  console.log('进入了mouted');
    // //  console.log(cities);
    //  //声明一个26字母的列表
    //  let codeList=[]
    //  for(var i=65;i<=90;i++){
    //      //通过ascii转换
    //      codeList.push(String.fromCharCode(i))
    //  }
    // //  console.log(codeList);
    // //剔除不符合的字母
    // codeList.forEach(letter=>{
    //     //letter为26个中的每个字母
    //     // console.log(letter);
    //     //和所有城市的首字母比对,并筛选  挑选出和字母相同的一系列城市
    //     let tempArr=cities.filter(city=>{
    //         return letter.toLowerCase()==city.pinyin.substr(0,1)
    //     })
    //     // console.log(tempArr);
    //     //去除为空的数组
    //     if(tempArr.length>0){
    //         //符合条件的字母表
    //         this.indexList.push(letter)
    //         this.dataList.push({
    //             index:letter,
    //             city:tempArr
    //         })
    //     }
    // })
    // console.log(this.indexList,this.dataList);
  this.dataList = data[0];
    this.indexList = data[1];
    console.log(this.dataList);

  },
  //页面销毁之前
  beforeDestroy() {
this.eventBus.$emit('footernav',true)
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



