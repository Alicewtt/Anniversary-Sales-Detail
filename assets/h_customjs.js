
$(document).ready(function () {
  AOS.init({
    easing: 'ease-out-back',
    duration: 2000,
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $('.main-header').addClass('headerbg');
    } else {
      $('.main-header').removeClass('headerbg');
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $('header.header_area.header-new').addClass('header2');
    } else {
      $('header.header_area.header-new').removeClass('header2');
    }
  });

  $('#Bestseller-slider').owlCarousel({
    loop: false,
    nav: false,
    autoplay: false,
    dots: true,
    margin: 20,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
    navText: [
      "<i class='fas fa-arrow-left' aria-hidden='true'></i>",
      "<i class='fas fa-arrow-right' aria-hidden='true'></i>",
    ],
  });

  $('.media-new-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $('.customer-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      600: {
        items: 1,
        dots: true,
      },
      1000: {
        items: 1,
        dots: true,
      },
    },
  });

  $('.scenarios-slider').owlCarousel({
    loop: true,
    margin: 60,
    autoplay: true,
    smartSpeed: 1000,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $('.count').prop('disabled', true);
  $(document).on('click', '.plus', function () {
    $('.count').val(parseInt($('.count').val()) + 1);
  });
  $(document).on('click', '.minus', function () {
    $('.count').val(parseInt($('.count').val()) - 1);
    if ($('.count').val() == 0) {
      $('.count').val(1);
    }
  });


  function redimedia() { }

  !(function (n, i, e, a) {
    (n.navigation = function (t, s) {
      var o = {
        responsive: !0,
        mobileBreakpoint: 991,
        showDuration: 200,
        hideDuration: 200,
        showDelayDuration: 0,
        hideDelayDuration: 0,
        submenuTrigger: 'hover',
        effect: 'fadeIn',
        submenuIndicator: !0,
        submenuIndicatorTrigger: !1,
        hideSubWhenGoOut: !0,
        visibleSubmenusOnMobile: !1,
        fixed: !1,
        overlay: !0,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        hidden: !1,
        hiddenOnMobile: !1,
        offCanvasSide: 'left',
        offCanvasCloseButton: !0,
        animationOnShow: '',
        animationOnHide: '',
        onInit: function () { },
        onLandscape: function () { },
        onPortrait: function () { },
        onShowOffCanvas: function () { },
        onHideOffCanvas: function () { },
      },
        r = this,
        u = Number.MAX_VALUE,
        d = 1,
        l = 'click.nav touchstart.nav',
        f = 'mouseenter focusin',
        c = 'mouseleave focusout';
      r.settings = {};
      var t = (n(t), t);
      n(t).find('.nav-search').length > 0 &&
        n(t).find('.nav-search').find('form').prepend("<span class='nav-search-close-button' tabindex='0'>✕</span>"),
        (r.init = function () {
          (r.settings = n.extend({}, o, s)),
            r.settings.offCanvasCloseButton &&
            n(t).find('.nav-menus-wrapper').prepend("<span class='nav-menus-wrapper-close-button'>✕</span>"),
            'right' == r.settings.offCanvasSide && n(t).find('.nav-menus-wrapper').addClass('nav-menus-wrapper-right'),
            r.settings.hidden && (n(t).addClass('navigation-hidden'), (r.settings.mobileBreakpoint = 99999)),
            v(),
            r.settings.fixed && n(t).addClass('navigation-fixed'),
            n(t)
              .find('.nav-toggle')
              .on('click touchstart', function (n) {
                n.stopPropagation(), n.preventDefault(), r.showOffcanvas(), s !== a && r.callback('onShowOffCanvas');
              }),
            n(t)
              .find('.nav-menus-wrapper-close-button')
              .on('click touchstart', function () {
                r.hideOffcanvas(), s !== a && r.callback('onHideOffCanvas');
              }),
            n(t)
              .find('.nav-search-button, .nav-search-close-button')
              .on('click touchstart keydown', function (i) {
                i.stopPropagation(), i.preventDefault();
                var e = i.keyCode || i.which;
                'click' === i.type || 'touchstart' === i.type || ('keydown' === i.type && 13 == e)
                  ? r.toggleSearch()
                  : 9 == e && n(i.target).blur();
              }),
            n(t).find('.megamenu-tabs').length > 0 && y(),
            n(i).resize(function () {
              r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m();
            }),
            r.initNavigationMode(C()),
            r.settings.hiddenOnMobile && m(),
            s !== a && r.callback('onInit');
        });
      var h = function () {
        n(t).find('.nav-submenu').hide(0), n(t).find('li').removeClass('focus');
      },
        v = function () {
          n(t)
            .find('li')
            .each(function () {
              n(this).children('.nav-dropdown,.megamenu-panel').length > 0 &&
                (n(this).children('.nav-dropdown,.megamenu-panel').addClass('nav-submenu'),
                  r.settings.submenuIndicator &&
                  n(this)
                    .children('a')
                    .append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"));
            });
        },
        m = function () {
          n(t).hasClass('navigation-portrait')
            ? n(t).addClass('navigation-hidden')
            : n(t).removeClass('navigation-hidden');
        };
      (r.showSubmenu = function (i, e) {
        C() > r.settings.mobileBreakpoint && n(t).find('.nav-search').find('form').fadeOut(),
          'fade' == e
            ? n(i)
              .children('.nav-submenu')
              .stop(!0, !0)
              .delay(r.settings.showDelayDuration)
              .fadeIn(r.settings.showDuration)
              .removeClass(r.settings.animationOnHide)
              .addClass(r.settings.animationOnShow)
            : n(i)
              .children('.nav-submenu')
              .stop(!0, !0)
              .delay(r.settings.showDelayDuration)
              .slideDown(r.settings.showDuration)
              .removeClass(r.settings.animationOnHide)
              .addClass(r.settings.animationOnShow),
          n(i).addClass('focus');
      }),
        (r.hideSubmenu = function (i, e) {
          'fade' == e
            ? n(i)
              .find('.nav-submenu')
              .stop(!0, !0)
              .delay(r.settings.hideDelayDuration)
              .fadeOut(r.settings.hideDuration)
              .removeClass(r.settings.animationOnShow)
              .addClass(r.settings.animationOnHide)
            : n(i)
              .find('.nav-submenu')
              .stop(!0, !0)
              .delay(r.settings.hideDelayDuration)
              .slideUp(r.settings.hideDuration)
              .removeClass(r.settings.animationOnShow)
              .addClass(r.settings.animationOnHide),
            n(i).removeClass('focus').find('.focus').removeClass('focus');
        });
      var p = function () {
        n('body').addClass('no-scroll'),
          r.settings.overlay &&
          (n(t).append("<div class='nav-overlay-panel'></div>"),
            n(t)
              .find('.nav-overlay-panel')
              .css('background-color', r.settings.overlayColor)
              .fadeIn(300)
              .on('click touchstart', function (n) {
                r.hideOffcanvas();
              }));
      },
        g = function () {
          n('body').removeClass('no-scroll'),
            r.settings.overlay &&
            n(t)
              .find('.nav-overlay-panel')
              .fadeOut(400, function () {
                n(this).remove();
              });
        };
      (r.showOffcanvas = function () {
        p(),
          'left' == r.settings.offCanvasSide
            ? n(t).find('.nav-menus-wrapper').css('transition-property', 'left').addClass('nav-menus-wrapper-open')
            : n(t).find('.nav-menus-wrapper').css('transition-property', 'right').addClass('nav-menus-wrapper-open');
      }),
        (r.hideOffcanvas = function () {
          n(t)
            .find('.nav-menus-wrapper')
            .removeClass('nav-menus-wrapper-open')
            .on('webkitTransitionEnd moztransitionend transitionend oTransitionEnd', function () {
              n(t).find('.nav-menus-wrapper').css('transition-property', 'none').off();
            }),
            g();
        }),
        (r.toggleOffcanvas = function () {
          C() <= r.settings.mobileBreakpoint &&
            (n(t).find('.nav-menus-wrapper').hasClass('nav-menus-wrapper-open')
              ? (r.hideOffcanvas(), s !== a && r.callback('onHideOffCanvas'))
              : (r.showOffcanvas(), s !== a && r.callback('onShowOffCanvas')));
        }),
        (r.toggleSearch = function () {
          'none' == n(t).find('.nav-search').find('form').css('display')
            ? (n(t).find('.nav-search').find('form').fadeIn(200), n(t).find('.nav-search').find('input').focus())
            : (n(t).find('.nav-search').find('form').fadeOut(200), n(t).find('.nav-search').find('input').blur());
        }),
        (r.initNavigationMode = function (i) {
          r.settings.responsive
            ? (i <= r.settings.mobileBreakpoint &&
              u > r.settings.mobileBreakpoint &&
              (n(t).addClass('navigation-portrait').removeClass('navigation-landscape'),
                S(),
                s !== a && r.callback('onPortrait')),
              i > r.settings.mobileBreakpoint &&
              d <= r.settings.mobileBreakpoint &&
              (n(t).addClass('navigation-landscape').removeClass('navigation-portrait'),
                k(),
                g(),
                r.hideOffcanvas(),
                s !== a && r.callback('onLandscape')),
              (u = i),
              (d = i))
            : (n(t).addClass('navigation-landscape'), k(), s !== a && r.callback('onLandscape'));
        });
      var b = function () {
        n('html').on('click.body touchstart.body', function (i) {
          0 === n(i.target).closest('.navigation').length &&
            (n(t).find('.nav-submenu').fadeOut(),
              n(t).find('.focus').removeClass('focus'),
              n(t).find('.nav-search').find('form').fadeOut());
        });
      },
        C = function () {
          return i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth;
        },
        w = function () {
          n(t).find('.nav-menu').find('li, a').off(l).off(f).off(c);
        },
        O = function () {
          if (C() > r.settings.mobileBreakpoint) {
            var i = n(t).outerWidth(!0);
            n(t)
              .find('.nav-menu')
              .children('li')
              .children('.nav-submenu')
              .each(function () {
                n(this).parent().position().left + n(this).outerWidth() > i
                  ? n(this).css('right', 0)
                  : n(this).css('right', 'auto');
              });
          }
        },
        y = function () {
          function i(i) {
            var e = n(i).children('.megamenu-tabs-nav').children('li'),
              a = n(i).children('.megamenu-tabs-pane');
            n(e).on('click.tabs touchstart.tabs', function (i) {
              i.stopPropagation(),
                i.preventDefault(),
                n(e).removeClass('active'),
                n(this).addClass('active'),
                n(a).hide(0).removeClass('active'),
                n(a[n(this).index()]).show(0).addClass('active');
            });
          }
          if (n(t).find('.megamenu-tabs').length > 0)
            for (var e = n(t).find('.megamenu-tabs'), a = 0; a < e.length; a++) i(e[a]);
        },
        k = function () {
          w(),
            h(),
            navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || 'click' == r.settings.submenuTrigger
              ? n(t)
                .find('.nav-menu, .nav-dropdown')
                .children('li')
                .children('a')
                .on(l, function (e) {
                  if (
                    (r.hideSubmenu(n(this).parent('li').siblings('li'), r.settings.effect),
                      n(this)
                        .closest('.nav-menu')
                        .siblings('.nav-menu')
                        .find('.nav-submenu')
                        .fadeOut(r.settings.hideDuration),
                      n(this).siblings('.nav-submenu').length > 0)
                  ) {
                    if (
                      (e.stopPropagation(),
                        e.preventDefault(),
                        'none' == n(this).siblings('.nav-submenu').css('display'))
                    )
                      return r.showSubmenu(n(this).parent('li'), r.settings.effect), O(), !1;
                    if (
                      (r.hideSubmenu(n(this).parent('li'), r.settings.effect),
                        '_blank' === n(this).attr('target') || 'blank' === n(this).attr('target'))
                    )
                      i.open(n(this).attr('href'));
                    else {
                      if (
                        '#' === n(this).attr('href') ||
                        '' === n(this).attr('href') ||
                        'javascript:void(0)' === n(this).attr('href')
                      )
                        return !1;
                      i.location.href = n(this).attr('href');
                    }
                  }
                })
              : n(t)
                .find('.nav-menu')
                .find('li')
                .on(f, function () {
                  r.showSubmenu(this, r.settings.effect), O();
                })
                .on(c, function () {
                  r.hideSubmenu(this, r.settings.effect);
                }),
            r.settings.hideSubWhenGoOut && b();
        },
        S = function () {
          w(),
            h(),
            r.settings.visibleSubmenusOnMobile
              ? n(t).find('.nav-submenu').show(0)
              : (n(t).find('.submenu-indicator').removeClass('submenu-indicator-up'),
                r.settings.submenuIndicator && r.settings.submenuIndicatorTrigger
                  ? n(t)
                    .find('.submenu-indicator')
                    .on(l, function (i) {
                      return (
                        i.stopPropagation(),
                        i.preventDefault(),
                        r.hideSubmenu(n(this).parent('a').parent('li').siblings('li'), 'slide'),
                        r.hideSubmenu(n(this).closest('.nav-menu').siblings('.nav-menu').children('li'), 'slide'),
                        'none' == n(this).parent('a').siblings('.nav-submenu').css('display')
                          ? (n(this).addClass('submenu-indicator-up'),
                            n(this)
                              .parent('a')
                              .parent('li')
                              .siblings('li')
                              .find('.submenu-indicator')
                              .removeClass('submenu-indicator-up'),
                            n(this)
                              .closest('.nav-menu')
                              .siblings('.nav-menu')
                              .find('.submenu-indicator')
                              .removeClass('submenu-indicator-up'),
                            r.showSubmenu(n(this).parent('a').parent('li'), 'slide'),
                            !1)
                          : (n(this)
                            .parent('a')
                            .parent('li')
                            .find('.submenu-indicator')
                            .removeClass('submenu-indicator-up'),
                            void r.hideSubmenu(n(this).parent('a').parent('li'), 'slide'))
                      );
                    })
                  : n(t)
                    .find('.nav-menu, .nav-dropdown')
                    .children('li')
                    .children('a')
                    .on(l, function (e) {
                      if (
                        (e.stopPropagation(),
                          e.preventDefault(),
                          r.hideSubmenu(n(this).parent('li').siblings('li'), r.settings.effect),
                          r.hideSubmenu(n(this).closest('.nav-menu').siblings('.nav-menu').children('li'), 'slide'),
                          'none' == n(this).siblings('.nav-submenu').css('display'))
                      )
                        return (
                          n(this).children('.submenu-indicator').addClass('submenu-indicator-up'),
                          n(this)
                            .parent('li')
                            .siblings('li')
                            .find('.submenu-indicator')
                            .removeClass('submenu-indicator-up'),
                          n(this)
                            .closest('.nav-menu')
                            .siblings('.nav-menu')
                            .find('.submenu-indicator')
                            .removeClass('submenu-indicator-up'),
                          r.showSubmenu(n(this).parent('li'), 'slide'),
                          !1
                        );
                      if (
                        (n(this).parent('li').find('.submenu-indicator').removeClass('submenu-indicator-up'),
                          r.hideSubmenu(n(this).parent('li'), 'slide'),
                          '_blank' === n(this).attr('target') || 'blank' === n(this).attr('target'))
                      )
                        i.open(n(this).attr('href'));
                      else {
                        if (
                          '#' === n(this).attr('href') ||
                          '' === n(this).attr('href') ||
                          'javascript:void(0)' === n(this).attr('href')
                        )
                          return !1;
                        i.location.href = n(this).attr('href');
                      }
                    }));
        };
      (r.callback = function (n) {
        s[n] !== a && s[n].call(t);
      }),
        r.init();
    }),
      (n.fn.navigation = function (i) {
        return this.each(function () {
          if (a === n(this).data('navigation')) {
            var e = new n.navigation(this, i);
            n(this).data('navigation', e);
          }
        });
      });
  })(jQuery, window, document);
  (function ($) {
    'use strict';

    var $window = $(window);

    if ($.fn.navigation) {
      $('.navigation1').navigation();
      $('#always-hidden-nav').navigation({
        hidden: true,
      });
    }

    $window.on('load', function () {
      $('#preloader').fadeOut('slow', function () {
        $(this).remove();
      });
    });
  })(jQuery);

  $('.m_menu').click(function () {
    var geturl = $(this).attr('href');
    window.location.replace(geturl);
  });

  $(document).ready(function () {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');

      var count = parseInt($input.val()) - 1;

      count = count < 1 ? 1 : count;

      $input.val(count);

      $input.change();
      $('.evt_qty').val(count);
      return false;
    });

    $('.plus').click(function () {
      var $input = $(this).parent().find('input');

      $input.val(parseInt($input.val()) + 1);

      $input.change();
      $('.evt_qty').val(parseInt($input.val()));
      return false;
    });
  });
  function instantBuy(productid) {
    var $ = jQuery;
    ///console.log(productid);
    var qty = document.getElementById('quantity').value;
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: {
        quantity: qty,
        id: productid,
      },
      dataType: 'json',
      success: function () {
        window.location.href = '/checkout';
      },
    });
  }

  // {% comment %} 张欢欢解决报错 {% endcomment %}

  $('#myDivbb button').on('click', function () {
    $('.mezor__product-singlecnts').addClass('mazor__pluginin');
    $('.QWButton').addClass('showBtn');
  })
  $('.mezor__prd-back').on('click', function () {
    $(this).parents(".mezor__product-singlecnts").removeClass('mazor__pluginin');
    $(this).parents(".mezor__product-singlecnts").find('.QWButton').removeClass('showBtn');
    $(this).parents(".mezor__product-singlecnts").find('.mezor__product-3dpremium').show();
    $(this).parents(".mezor__product-singlecnts").find('.mezor__product-3dmezor').hide();
  })

  var vidoUrls = $('.mezor__product-3dmezor video source').attr('src');



  $('.premiummajoq__3dclick').on('click', function () {
    $('.majoq__3dclick').removeClass('mezor__activepack');
    $('.special-variant-specification').removeClass('activevari');
    $('.premiummajoq__3dclick').removeClass('mezor__activepack');
    var varNo = $(this).attr("number");
    $('.QWButton').attr('data-variable', varNo);
    if (varNo == 1) {
      $('.mezor__product-3dpremium').show();
      $('.mezor__product-3dmezor').hide();
    } else {
      $('.mezor__product-3dpremium').hide();
      $('.mezor__product-3dmezor').show();
    }
    $(this).addClass('mezor__activepack');
    $(this).parents(".special-variant-specification").addClass('activevari');
    // $('.mezor__product-3dmezor video').get(0).play();
    // $('.mazor-3d-video').show();
    // $('.mazor--video').hide();
    $('.newmz').show();
    $('.rollovano').hide();
  })

  $('body').find('.mezor__product-pluginout ul select#meazor-3d-new + li + li').addClass('majoq__3dclick').removeClass('premiummajoq__3dclick');


  $('.majoq__3dclick').on('click', function () {
    $(this).addClass('mezor__activepack');
    $('.premiummajoq__3dclick').removeClass('mezor__activepack');
    $('.mezor__product-3dmezor').show();
    $('.mezor__product-3dpremium').hide();
    $('.mezor__product-3dmezor video').get(0).play();
    $('.mazor-3d-video').hide();
    $('.mazor--video').show();

  })



  $('.creative_bigimg').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    dots: true,
    URLhashListener: true
  })
  $('.creative_itemsimg').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    items: 3,
    dots: false,
    center: true,
    URLhashListener: true
  })



  $(".slider")
    .on("initialized.owl.carousel changed.owl.carousel", function (e) {
      if (!e.namespace) {
        return;
      }
      $("#counter").text(
        e.relatedTarget.relative(e.item.index) + 1 + " of " + e.item.count
      );
    })
    .owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true
    });

  jQuery('.play-img a').on('click', function (e) {
    $('body').addClass('sectionimg-hide');
    e.preventDefault();
    var vidoe_src = jQuery('.play-img a').attr('href');
    console.log(vidoe_src);
    jQuery(document).find('.play-img a').before('<iframe class="showifm" src="' + vidoe_src + '"   allow="autoplay;"></iframe>');
    jQuery(this).hide();
  });


  $('.core-button-s').click(function () {
    $('.core-show-s').toggleClass('core-add');
  });


  jQuery('.video-button').on('click', function () {
    jQuery('.video-box').addClass('open-video');
  });

  jQuery('.video-button-new').on('click', function () {
    var dataUrl = $(this).data('link');
    setTimeout(function () {
      jQuery('.video-box iframe').attr('src', dataUrl)
    });
    jQuery('.video-box').addClass('open-video');
  });

  jQuery('.video-button3 a').on('click', function () {
    jQuery('.video-box3').addClass('open-video3');
  });
  jQuery('body').on('click', '.video-box-iiners button', function () {
    // $('.video-box iframe').each(function(index) {
    //       $(this).attr('src', $(this).attr('src'));
    //       return false;
    // });
    jQuery('.video-box iframe').attr('src', '')
    jQuery('.video-box').removeClass('open-video');
  });

  jQuery('.hozo-ultra-images a').on('click', function () {
    jQuery('.video-box2').addClass('open-video2');
  });
  jQuery('body').on('click', '.video-box-iiners2 button', function () {
    jQuery('.video-box2').removeClass('open-video2');
  });
  jQuery('body').on('click', '.video-box-iiners3 button', function () {
    jQuery('.video-box3').removeClass('open-video3');
  });

  jQuery(window).scroll(function () {
    var headbatHight = jQuery('.mezor__product-imgs').height();
    var scroll = jQuery(window).scrollTop();
    if (scroll >= headbatHight) {
      jQuery(".popup-add-to-cart").addClass("fixed--hed");
    }
    else {
      jQuery(".popup-add-to-cart").removeClass("fixed--hed");
    }
  });




  $('.cork__banner--slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1
  })

  $('.cork__news--slider').owlCarousel({
    loop: true,
    margin: 60,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })


  $('.meazor-carousel').owlCarousel({
    loop: true,
    margin: 60,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  $('.cork__logo--sliders').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 5.5
      },
      1400: {
        items: 6.5
      }
    }
  })



  // Header Responsive toggle
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $("body").toggleClass("menu-open");
  });

  $(".overlay-close, .cork__menu > ul > li a").click(function () {
    $("#nav-icon").removeClass("open");
    $("body").removeClass("menu-open");
  });


  $(".cork--international .cork__news--item h5").on('click', function () {
    $(this).toggleClass("cork__rdless");
    $(this).siblings(".cork__intmore").toggle();
  });
  $(".deproduct").click(function () {
    var get1 = parseInt($(this).attr('price'));
    var get2 = parseInt($(".mezor__activepack").attr('price'));
    total = get1 + get2;
    $(".totalprice").text("$" + get2);

  })
  $(".variant_meazor_li").click(function () {
    //   var videoID = 'videoclip';
    //  var sourceID = 'mp4video';
    //  var videourl =$(this).attr("videourl");
    // $('#'+videoID).get(0).pause();
    //   $('#'+sourceID).attr('src', videourl);
    //   $('#'+videoID).get(0).load();
    //    //$('#'+videoID).attr('poster', newposter); //Change video poster
    //   $('#'+videoID).get(0).play();

    var inputs = $(".addon");
    var getaddon_price = 0;
    var getall_id = [];

    for (var i = 0; i < inputs.length; i++) {
      getaddon_price += parseInt($(inputs[i]).attr("price"));
      getid = parseInt($(inputs[i]).attr("id"))

    }
    var getdefault = parseInt($(".mezor__activepack").attr('price'));
    total = getdefault + getaddon_price;
    $(".totalprice").text("$" + total);

    // $(".mazor--video").css('display','inline')
  })
  $(".finaladd").click(function () {
    var inputs = $(".addon");

    console.log(inputs.length)

    var getaddon_price = 0;
    var getall_id = [];
    var quantity = 1
    for (var i = 0; i < inputs.length; i++) {
      getaddon_price += parseInt($(inputs[i]).attr("price"));
      getid = parseInt($(inputs[i]).attr("id"))
      getall_id.push({
        id: getid,
        quantity: quantity
      });
    }
    var getdefault = parseInt($(".mezor__activepack").attr('price'));
    total = getdefault + getaddon_price;
    $(".totalprice").text("$" + total);
    getall_i = parseInt($(".mezor__activepack").attr('id'));
    getall_id.push({
      id: getall_i,
      quantity: quantity
    });
    console.log(getall_id);
    let formData = {
      'items': getall_id
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        $(".mx2form").click();

        return response.json();

      })
      .catch((error) => {
        console.error('Error:', error);
        alert(JSON.parse(error.description));
      });
  })
  $(".finaladdnow").click(function () {
    var inputs = $(".addon");
    var getaddon_price = 0;
    var getall_id = [];
    var quantity = 1
    for (var i = 0; i < inputs.length; i++) {
      getaddon_price += parseInt($(inputs[i]).attr("price"));
      getid = parseInt($(inputs[i]).attr("id"))
      getall_id.push({
        id: getid,
        quantity: quantity
      });
    }
    var getdefault = parseInt($(".mezor__activepack").attr('price'));
    total = getdefault + getaddon_price;
    $(".totalprice").text("$" + total);
    // $(".transcy-money").text("$"+total);
    getall_i = parseInt($(".mezor__activepack").attr('id'));
    getall_id.push({
      id: getall_i,
      quantity: quantity
    });
    console.log(getall_id);
    let formData = {
      'items': getall_id
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        window.location.href = "/checkout";

        return response.json();

      })
      .catch((error) => {
        console.error('Error:', error);
        alert(JSON.parse(error.description));
      });
  })


  $(".premiummajoq__3dclick2").click(function () {

    console.log('===》test,', getall_id)

    if ($(this).hasClass("addon")) {
      $(this).removeClass("addon");
    } else {
      $(this).addClass("addon");
    }
    var inputs = $(".addon");
    var getaddon_price = 0;
    var getall_id = [];
    var quantity = 1
    for (var i = 0; i < inputs.length; i++) {
      getaddon_price += parseInt($(inputs[i]).attr("price"));
      getid = parseInt($(inputs[i]).attr("id"))
      getall_id.push({
        id: getid,
        quantity: quantity
      });
    }
    var getdefault = parseInt($(".mezor__activepack").attr('price'));
    total = getdefault + getaddon_price;
    $(".totalprice").text("$" + total);
    // $(".transcy-money").text("$"+total);

    getall_i = parseInt($(".mezor__activepack").attr('id'));
    getall_id.push({
      id: getall_i,
      quantity: quantity
    });
    console.log(getall_id);

  });


  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    console.log($);
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    if (document.getElementById(cityName) == null) {
      console.log(evt, cityName);

      $('.' + cityName).css('display', 'block');
      evt.currentTarget.className += ' active';
    }
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }

  $('.quickcartheader').click(function () {
    var getall_i = $(this).attr('id');
    var getall_id = [];
    var quantity = 1;

    getall_id.push({
      id: getall_i,
      quantity: quantity,
    });
    console.log(getall_id);
    let formData = {
      items: getall_id,
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        $('.mx2form').click();

        window.location.href = '/cart';
      })
      .catch((error) => {
        alert('Something went wrong.Please try again later.');
      });
  });

  $('.creative_itemimg--cnts1').click(function () {
    if ($(this).hasClass('nextaddon')) {
      //$(this).removeClass("addon");
    } else {
      $('.creative_itemimg--cnts1').removeClass('nextaddon');
      $(this).addClass('nextaddon');
    }
  });
  $('.creative_itemimg--cnts2').click(function () {
    if ($(this).hasClass('nextaddon2')) {
      //$(this).removeClass("addon");
    } else {
      $('.creative_itemimg--cnts2').removeClass('nextaddon2');
      $(this).addClass('nextaddon2');
    }
  });
  // {% comment %} 产品页面第二个配件选择模块 {% endcomment %}
  $('.enaddtocart1').click(function () {
    var getall_i = $('.nextaddon').attr('id');
    var getall_id = [];
    var quantity = 1;

    getall_id.push({
      id: getall_i,
      quantity: quantity,
    });
    console.log(getall_id);
    let formData = {
      items: getall_id,
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => { })
      .catch((error) => {
        alert('Something went wrong.Please try again later.');
      });
  });

  $('.enaddtocart2').click(function () {
    var getall_i = $('.nextaddon2').attr('id');
    var getall_id = [];
    var quantity = 1;

    getall_id.push({
      id: getall_i,
      quantity: quantity,
    });
    console.log(getall_id);
    let formData = {
      items: getall_id,
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => { })
      .catch((error) => {
        alert('Something went wrong.Please try again later.');
      });
  });

  $('.backtotop').click(function () {
    if (!$('#myDivbb').length == 0) {
      $('html, body').animate(
        {
          scrollTop: $('.mezor__product-3dpremium').offset().top,
        },
        2000
      );
    }
  });
  $('.bunowtemplate').click(function () {
    var getall_i = $(this).attr('id');

    var getall_id = [];
    var quantity = 1;

    getall_id.push({
      id: getall_i,
      quantity: quantity,
    });

    console.log(getall_id, $(this));
    let formData = {
      items: getall_id,
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => { })
      .catch((error) => {
        alert('Something went wrong.Please try again later.');
      });
  });
  $('.scroll-to-section').click(function () {
    if (!$('#myDivbBuynow').length == 0) {
      $('html, body').animate(
        {
          scrollTop: $('.mezor__product-3dpremium').offset().top,
        },
        2000
      );
    }
  });
  $('.backtotopmobile').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.mezor__product-singleimg').offset().top,
      },
      2000
    );
  });
  $('.backtotopcart').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#atharva_minicart_count').offset().top,
      },
      2000
    );
  });


  function selectThumb() {
    $('#carousel-thumbs .thumb, #QWcarousel-thumbs .thumb').click(function () {
      $('#carousel-thumbs .thumb, #QWcarousel-thumbs .thumb').removeClass('selected');
      $(this).addClass('selected');
    });
  }
  selectThumb();

  $('.CloseQWModel, .QWDropShadow').click(function (event) {
    $('body').removeClass('QWOpen');
  });

  $('.QWButton').click(function () {
    var getProduct = $(this).data('product');
    var proVariant = $(this).data('variable');
    console.log('调试-==》', $(this))
    // var mainTemplate = '<div class="carousel-inner"></div></div>'
    jQuery.getJSON(window.Shopify.routes.root + 'products/' + getProduct + '.js', function (product) {
      var lines = product.description.split('<br>');
      if (product.variants.length > 1) {
        if (proVariant) {
          var prc = product.variants[proVariant - 1].price;
          var title = product.variants[proVariant - 1].title;

          if (title == 'MEAZOR 3D Premium Combo') {
            var img = [
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_Premium_1.png?v=1669294327',
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_Premium_2.png?v=1669294328',
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_Premium_3.png?v=1669294328',
            ];
          } else if (title == 'MEAZOR 3D') {
            var img = [
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_1.png?v=1669363504',
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_2.png?v=1669363504',
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_3.png?v=1669363504',
            ];
            console.log(img);
          } else {
            var img = product.images;
          }

          var description = lines[proVariant - 1];
        } else {
          var prc = product.variants[0].price;
          var description = lines[0];
          var title = product.variants[0].title;
          if (title == 'MEAZOR 3D Premium Combo') {
            var img = [
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_Premium_1.png?v=1669294327',
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_Premium_2.png?v=1669294328',
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_Premium_3.png?v=1669294328',
            ];
          } else if (title == 'MEAZOR 3D') {
            var img = [
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_1.png?v=1669363504',
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_2.png?v=1669363504',
              'https://cdn.shopify.com/s/files/1/0549/7667/6078/files/M3D_3.png?v=1669363504',
            ];
            console.log(img);
          } else {
            var img = product.images;
          }
        }
      } else {
        var prc = product.price;
        var title = product.title;
        var description = product.description;
        var img = product.images;
      }

      var cents = '';
      if (prc % 100 < 10) {
        cents = '0';
      }
      var price = parseInt(prc / 100) + '.' + cents + (prc % 100);

      $(
        '#QWmyCarousel .carousel-inner .carousel-item, #QWcarousel-thumbs .carousel-inner .carousel-item .thumb'
      ).remove();
      $.each(img, function (index, image) {
        if (index == 0) {
          $('#QWmyCarousel .carousel-inner').append(
            '<div class="carousel-item active" data-slide-number="' + index + '"><img src="' + image + '"></div>'
          );
          $('#QWcarousel-thumbs .carousel-inner .carousel-item').append(
            '<div id="carousel-selector-' +
            index +
            '" class="thumb px-1 py-2 selected d-flex justify-content-center" data-target="#QWmyCarousel" data-slide-to="' +
            index +
            '"><img src="' +
            image +
            '"></div>'
          );
        } else {
          $('#QWmyCarousel .carousel-inner ').append(
            '<div class="carousel-item" data-slide-number="' + index + '"><img src="' + image + '"></div>'
          );
          $('#QWcarousel-thumbs .carousel-inner .carousel-item').append(
            '<div id="carousel-selector-' +
            index +
            '" class=" thumb px-1 py-2 d-flex justify-content-center" data-target="#QWmyCarousel" data-slide-to="' +
            index +
            '"><img src="' +
            image +
            '"></div>'
          );
        }
      });

      $('.QWprice').html('$' + price);
      $('.QWtitle').html(title);

      $('.QWcompare').html(product.compare_at_price);
      $('.QWdescription').html(description);
      $('body').addClass('QWOpen');
      selectThumb();
    });
  });
});

