export default{
    path:'/film',
    component:()=>import('@/views/Film/Film.vue'),
    children:[
        {
            path:'nowplaying',
            component:()=>import('@/views/Film/NowPlaying')
        },
        {
            path:'comingsoon',
            component:()=>import('@/views/Film/ComingSoon')
        },
        {
            path:'/film',
            redirect:'nowplaying'
        }
    ]
}