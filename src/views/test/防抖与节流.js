//节流


// var q=function(){
//     console.log('龙刃出鞘了');
// }
// function heroSkill(fn,delay){
//     let cd=true;
//     return function(){
//         if(cd){
//             q();
//             cd=false
//             setTimeout(() => {
//                 cd=true
//             }, delay);
//         }else{
//             console.log('技能冷却中');
//         }
//     }
// }
// var use=heroSkill(q,5000)
// // console.log(use);
// use()
// use()
// use()
// use()




//防抖


var last=function(){
    console.log('最后一个已经上了');
}

function getIn(fn,delay){
    timer=null;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        console.log(timer);
        timer=setTimeout(() => {
            last()
            timer=null
        }, delay);
    }
}


var use=getIn(last,5000)

use()












// function getIn(){
//     console.log('车开了');
// }
// function shuaka(fn,delay) {
//     let timer=null;
//     return function(){
//         if(timer){
//             window.clearTimeout(timer)
//         }
//             timer=setTimeout(() => {
//                 fn();
//                 timer=null;
//             }, delay);
        
        
//     }

// }
// var startshuaka=shuaka(getIn,3000)
// startshuaka()
