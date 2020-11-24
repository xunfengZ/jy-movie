//引入封装头信息和请求域名的axios对象
import http from './http'
//引入请求的url地址
import{
    nowPlayingListUrl,
    comingSoonListUrl,
    movieDetailUrl,
    cityListUrl,
    cinemaListUrl
    // bannerUrl
} from '@/config/url'

//导出现在上映的电影的一页的数量
//nowplaying
export const nowPlayingListData=(page=1)=>{
    http.defaults.headers.info='';
    //必须用return  不然引入的时候会自动调用
    return http.get(nowPlayingListUrl+page)
}

//comingsoon
export const comingSoonListData=(page=1)=>{
    http.defaults.headers.info='';
    return http.get(comingSoonListUrl+page)
}
//detail
export const movieDetail=(filmid)=>{
    http.defaults.headers.info='info';
    return http.get(movieDetailUrl+filmid)
}
/*上面有一个headers.info的相关bug：当先点击detail页面后，
再后退到前一个页面会加载不出数据，原因是获取detail数据时header.info被感染了，
退回到上一个页面时，对应的headers.info被改变了，所以请求不到数据*/ 


//请求城市列表数据
export const cityListData=async ()=>{
    http.defaults.headers.info='city';
    // return http.get(cityListUrl)


    let ret =await http.get(cityListUrl);
    console.log(ret)
    let cities = ret.data.data.cities
    var codeList = [] //A B C D EFG HIJKLMN 全部的26个英文字母
    var dataList = [] //城市信息
    var indexList = []  //经过筛选的abcd 字母没有的城市的字母剔除
    for (let i = 65 ;i<= 90; i++) {
        codeList.push(String.fromCharCode(i))
    }
    codeList.forEach((element)=>{
         let temArr = cities.filter((item)=>element.toLowerCase()==item.pinyin.substr(0,1))
         if(temArr.length >0) {
             indexList.push(element)
             dataList.push(
                 {
                     index:element,
                     data:temArr
                 }
             )
         }
    })
    // Promise.resolve 是一个promise 封装过 成功后带出的数据 可以配合async await 使用
return Promise.resolve([dataList,indexList])
//即便是第二种方法 也会变成promise pending 被async感染成promise 
//   return  [dataList,indexList] 
    
}


//请求电影院列表数据
export const cinemaList=async (id=110100)=>{
    http.defaults.headers.info='cinema';
    let ret=await http.get(cinemaListUrl+id)
    return ret
}