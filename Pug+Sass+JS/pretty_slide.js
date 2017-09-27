/**
 * Created by chenxiangdong on 2017.9.27.
 */
var works = [
    {
        title:'新村绿野',
        description:'翻身群众把歌唱',
        cover:'https://unsplash.it/800/600?image=1083'
    },
    {
        title:'花团锦簇',
        description:'歌唱我们繁荣昌盛的祖国',
        cover:'https://unsplash.it/800/600?image=1082'
    },
    {
        title:'柳暗花明',
        description:'胜利的号角声已经吹响',
        cover:'https://unsplash.it/800/600?image=1081'
    }
];

var vm = new Vue({
    el:"#app",
    data:{
        now_index: 0,
        works: works,
        span: 930
    },
    computed:{
        computed_left(){
            var result={"left":(-this.now_index*this.span)+"px"};
            console.log(result);
            return result;
        }
    },
    methods:{
        delta(d){
            this.now_index = (this.now_index+d+this.works.length)%(this.works.length);
        },
        bg_css(url){
            return "background-image:url("+url+")";
        }
    }
});