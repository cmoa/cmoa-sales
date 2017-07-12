require('waypoints/lib/jquery.waypoints');

var SiteNavigation = (function($) {

  // main navigation
  ////////////////////////////////////////////////////////////////////////////////
  var quickviewState = false;
  var quickviewBtn;
  var quickviewTarget

  function closeQuickview() {
    $('.quickview-container, .quickview-btn').removeClass('is-active');
    if(quickviewBtn && quickviewState) {
      quickviewBtn.addClass('is-deactivated');
      $('.quickview-btn').attr("aria-expanded","false");
      setTimeout(function () {
        $('.quickview').removeClass('is-active');
      }, 600);
      quickviewState = false;
      ga('send', 'event', quickviewTarget, 'close', 'navigation');
      ga('unified.send', 'event', quickviewTarget, 'close', 'navigation');
    }
  }

  function openQuickview() {
    window.scrollTo(0,0);
    $('.quickview-container').addClass('is-active');
    $('.quickview-btn').removeClass('is-deactivated');
    quickviewBtn.attr("aria-expanded","true");
    $('.quickview').not( $(quickviewTarget) ).removeClass('is-active');
    $(quickviewTarget).addClass('is-active');
    quickviewState = quickviewTarget;
    ga('send', 'event', quickviewTarget, 'open', 'navigation');
    ga('unified.send', 'event', quickviewTarget, 'open', 'navigation');

  }

  return {
    init: function() {
      // $(".nav-global").attr("tabindex", "0")

      // toggle quickview
      $('.quickview-btn').click(function(e) {
        quickviewBtn = $(this);
        quickviewTarget = $(this).attr('href');
        e.preventDefault();
        $('.quickview-btn').not(quickviewBtn).removeClass('is-active');
        quickviewBtn.toggleClass('is-active');
        // open:
        if (quickviewState == false || quickviewState != quickviewTarget ) {
          openQuickview();
        }
        // close:
        else {
          closeQuickview();
        }
      });

      // close when clicking away
      $('.quickview-overlay').click(function() {
        closeQuickview();
      });

      // mobile menu functions
      $('#quickview-nav .sub-menu, #quickview-sidebar-nav .sub-menu:first').before('<div class="quickview-nav__expand"></div>');
      $('.quickview-nav__expand').click(function() {
        var menuBtn = $(this);
        var menuTree = $(this).next();
        $('.quickview-nav__expand').not(menuBtn).removeClass('is-active');
        menuBtn.toggleClass('is-active');
      });

      // scroll functions
      ////////////////////////////////////////////////////////////////////////////////
      var headerHeight = $('.header-main').outerHeight();

      var fixNav = new Waypoint({
        element: $('.nav-container'),
        handler: function(direction) {
          if (direction == 'down' && quickviewState == false){
            $('.header-main').addClass('is-fixed');
            $('.quickview-container + *').css({'padding-top':headerHeight});
          }
          else {
            $('.header-main').removeClass('is-fixed');
            $('.quickview-container + *').css({'padding-top':'0'});

          }
        },
        offset: '-220px'
      })

      var animateNav = new Waypoint({
        element: $('.nav-container'),
        handler: function(direction) {
          if (direction == 'up'){
            $('.header-main').removeClass('is-visible');
          }
          else {
            $('.header-main').addClass('is-visible');
          }
        },
        offset: '-250px'
      })
    }
  }

})(jQuery);

export default SiteNavigation;
