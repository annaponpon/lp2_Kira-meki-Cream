$('.voices-slick-container').slick({
    autoplay: true, // 自動再生
    dots: true, //ドットのナビ表示
    arrows: true, // 前・次のスライド切り替える矢印表示
    prevArrow: '<img src="/assets/image/voices_arrow_left.svg" class="slick-arrow prev-arrow">', 
    nextArrow: '<img src="/assets/image/voices_arrow_right.svg" class="slick-arrow next-arrow">', 
    slidesToShow: 3, //表示するスライド枚数
    slideToScroll: 1, //1回で動くスライド数
    autoplaySpeed: 3000, // 再生速度（ミリ秒）
    infinite: true, // 無限再生
    cssEase: 'linear', // アニメーションイージング
    responsive: [{
      breakpoint: 768, // ブレイクポイントを指定
      settings: {
        slidesToShow: 2,
        },
      },
    ]
});