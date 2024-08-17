$('.voices__slick').slick({
    dots: true, //ドットのナビ表示
    arrows: true, // 前・次のスライド切り替える矢印表示
    prevArrow: '<img src="/assets/image/voices_arrow_left_pc.png" class="slick-arrow prev-arrow">', 
    nextArrow: '<img src="/assets/image/voices_arrow_right_pc.png" class="slick-arrow next-arrow">', 
    slidesToShow: 3, //表示するスライド枚数
    slidesToScroll: 3, //1回で動くスライド数
    infinite: true, // 無限再生
    responsive: [{
      breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<img src="/assets/image/voices_arrow_left_sp.png" class="slick-arrow prev-arrow">', 
          nextArrow: '<img src="/assets/image/voices_arrow_right_sp.png" class="slick-arrow next-arrow">', 
      }
    }
    ]
});