//引入封装头信息和请求域名的axios对象
import http from './http'
//引入请求的url地址
import{
    nowPlayingListUrl,
    comingSoonListUrl,
    movieDetailUrl
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