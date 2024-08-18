
// ヘッダー背景色スクロールで変更
$(function () {
  $(window).on('load scroll', function () {
    if ($(window).scrollTop() > 700) {
      $('.header').addClass('header-fixed');
    } else {
      $('.header').removeClass('header-fixed');
    }

  });
});





// スリック
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



// アコーディオンメニュー
$(function () {
  $('.qa__accordion-box--q').click(function () {
    $(this).next().slideToggle(400);
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないac-parentのopenクラスを取る
    $('.qa__accordion-box--q').not(this).removeClass('open');
  });
});



// ページトップへ戻るボタン
var buttonToTop = $('#button-to-top');
var position = 0;
var speed = 600;

// ページトップへ戻るボタンをクリックしたら
buttonToTop.on('click', function () {
  // console.log('click');
  console.log(position);

  // アニメーションをしながらページトップに移動
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;

});
