$( document ).ready(function(){
  var $logo = $(".header__logo");
  var $menu = $(".header__menu");
  var $close = $(".close");


  $logo.click(function(){
    $menu.css({'display' : 'flex'});
  });
  $close.click(function(){
    $menu.css({'display': 'none'});
  });



  $(function(){
    var tabContainers = $('.prev__list > div'); //массив самих закладок
    tabContainers.hide().filter(':first').show();//прячем все кроме первой. если отключены скрипты, все будет видно
    //обрабатываем клики по табам
    $('.our-works__list .our-works__link').mouseenter(function(){
      tabContainers.hide(); //прячем все табы
      tabContainers.filter(this.name).show(); //показываем содержимое текущего
      $('.our-works__list > .our-works__link').removeClass('active');
      $(this).addClass('active');
      return false;
    });

  })

  $(function(){
    var $mainFig = $('.our-works__figuration'); //массив самих закладок
    $mainFig.hide();
    var $links =  $('.our-works__list .our-works__link');
    //обрабатываем клики по табам
    $links.mouseenter(function(){
      $mainFig.hide(); //прячем все табы

      this.children().show(); //показываем содержимое текущего
      return false;
    });

  })

});


