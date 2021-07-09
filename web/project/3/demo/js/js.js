// 头部导航栏
// 暂时重复的写法
// DOM载入方式：非简写形式（见下一函数）
$(document).ready(function() {
    $('.h-nav-Menu1').hover(
        function() {
            $('.topDown1').show();
        },
        function() {
            $('.topDown1').hide();
        }
    );
    $('.h-nav-Menu2').hover(
        function() {
            $('.topDown2').show();
        },
        function() {
            $('.topDown2').hide();
        }
    );
    $('.h-nav-Menu3').hover(
        function() {
            $('.topDown3').show();
        },
        function() {
            $('.topDown3').hide();
        }
    );
    $('.h-nav-Menu4').hover(
        function() {
            $('.topDown4').show();
        },
        function() {
            $('.topDown4').hide();
        }
    );
    $('.h-nav-Menu5').hover(
        function() {
            $('.topDown5').show();
        },
        function() {
            $('.topDown5').hide();
        }
    );

    // 获取当前窗口的宽度,用于H5页面下(700px↓),  .h-nav  的初始为隐藏状态
    var width = $(window).width();
    if (width <= 700) {
        $(".h-nav").hide();
    };


    // $('.h-nav-main>div:first-of-type>img').hover(function() {
    //         $(".h-nav").show();
    //     },
    //     function() {
    //         $(".h-nav").hide();
    //     });



    // toggle的方式显隐元素》》》》》》jQuery 3.x 版本中已经被移除了
    $(".h-nav-main>div:first-of-type").click(function() {
        $(".h-nav").toggle();
    });

});


// 顶部走马灯
// 注册使用vue
// DOM载入方式：简写形式（见上一函数）
$(function($) {
    var Vue = window.Vue;
    new Vue({
        el: '#slideShow',
        data() {
            return {
                imgList: [{
                    id: 0,
                    idView: 'images/background.png'
                }, {
                    id: 1,
                    idView: 'images/topBackgound2.png'
                }, {
                    id: 2,
                    idView: 'images/topBackgound3.png'
                }, {
                    id: 3,
                    idView: 'images/topBackgound4.png'
                }],
                // 动态设置走马灯容器的高度
                bannerHeight: "",
            }
        },
        mounted() {
            this.imgLoad();
            window.addEventListener('resize', () => {
                this.bannerHeight = this.$refs.bannerHeight[0].height;
                this.imgLoad();
            }, false)
        },
        methods: {
            imgLoad() {
                this.$nextTick(() => {
                    this.bannerHeight = this.$refs.bannerHeight[0].height;
                    console.log(this.$refs.bannerHeight[0].height);
                })
            }
        }
    })
});


// 图片放缩-----------zooming图片放缩库
$(function($) {
    var width = $(window).width();

    if (width > 700) { // PC(701px↑)，图片放大0.5倍
        var zooming = new Zooming({
            scaleBase: 0.5
        });
    } else { // H5(700px↓)，图片放大到屏幕的最大宽度
        var zooming = new Zooming();
    }
    // 定义class名字，加在img标签上即可调用
    zooming.listen('.zooming');
});




// 返回顶部
// 当网页向下滑动 400px 出现"返回顶部" 按钮
$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
        $('#backTop').show();
    } else {
        $('#backTop').hide();
    }
});

function top_function() {
    window.scrollTo(0, 0);
};