$(function () {


  /* ===========================================================tab 메뉴=-===================================== */
  const tabMenu = $('.tab-menu a')
  tabMenu.on('click',function (e) {
    e.preventDefault()
    let activeTabCon = $(this).attr('data-tab')

  
    $('.tab-con').hide()
    $( '#'+ activeTabCon).show()
    
    tabMenu.removeClass('on')
    $(this).addClass('on')

    tabMenu.attr('title','')
    $(this).attr('title','선택됨')
  })

  /* ======================================================gnb 메뉴 ================================================== */


    const gnb = $('#gnb'),
    mainHeader = $('.main-header'),
    gnbLi = gnb.children('li'),
    dep1 = gnbLi.children('a'),
    dep2 = gnbLi.children('ul.depth2')
    console.log(dep2);
    gnbLi.on('mouseenter',function () {
      $(this).addClass('on')
    })  
    gnbLi.on('mouseleave',function () {
        $(this).removeClass('on')

    })  
    /* 슬라이스 */
    let swiper = new Swiper("#main-slide", {
      loop : true,

       autoplay: {
        delay: 4200,
        disableOnInteraction: false,
       },

        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
      });
})