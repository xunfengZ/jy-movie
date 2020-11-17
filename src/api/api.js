//引入封装头信息和请求域名的axios对象
import http from './http'
//引入请求的url地址
import{
    nowPlayingListUrl,
    comingSoonListUrl,
    // bannerUrl
} from '@/config/url'

//导出现在上映的电影的一页的数量
export const nowPlayingListData=(page=1)=>{
    return http.get(nowPlayingListUrl+page)
}
//首页的大图
// export const banner=()=>{
//     return http.get(bannerUrl)
// }