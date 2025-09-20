/* Copyright (C) arrowthemes, https://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(function($) {

    "use strict";

    var config = $('html').data('config') || {};

    // Social buttons
    $('article[data-permalink]').socialButtons(config);

    // add modal data attribute
    $(".tm-modal-link").attr("data-uk-modal", "{center:true}");

    // initialize plyr
    plyr.setup();

    // tab switcher
    var tk_switcher = $("[id^=tk-]"),
        tk_container = tk_switcher.parent();

    if (tk_container.is('.uk-panel')) {
        $.UIkit.$win.on('load resize', UIkit.Utils.debounce((function() {
            var fn = function() {
                UIkit.Utils.matchHeights([tk_switcher[0], tk_container[0]]);
                return fn;
            }
            return fn();
        })(), 50));
    }

    // Dropdown flip
    $(document).ready(function() {
        var browser_width = $(window).width(),
            navbar = $(".uk-navbar-nav");
        
        navbar.find("li.uk-parent > .uk-dropdown").each(function(index){
            var xwidth_d = $(this).offset().left + $(this).width();
            if(xwidth_d >= browser_width){
                $(this).addClass("uk-dropdown-flip");
            }
        });

        navbar.find("li.uk-parent > ul").each(function(index){
            var xwidth_f = $(this).offset().left + $(this).width();
            if(xwidth_f >= browser_width){
                $(this).addClass("uk-dropdown-flip");
            }
        });        
    })

    $(window).resize(function() {
        var browser_width = $(window).width(),
            navbar = $(".uk-navbar-nav");

        navbar.find("li.uk-parent > ul").removeClass("uk-dropdown-flip");
        navbar.find("li.uk-parent > ul").each(function(index){
            var xwidth = $(this).offset().left + $(this).width();       
            if(xwidth >= browser_width){
                $(this).addClass("uk-dropdown-flip");
            }
        });
    });

    // jQuery.appear
    // source: https://github.com/bas2k/jquery.appear/
    !function(e){e.fn.appear=function(a,r){var n=e.extend({data:void 0,one:!0,accX:0,accY:0},r);return this.each(function(){var r=e(this);if(r.appeared=!1,!a)return void r.trigger("appear",n.data);var p=e(window),t=function(){if(!r.is(":visible"))return void(r.appeared=!1);var e=p.scrollLeft(),a=p.scrollTop(),t=r.offset(),c=t.left,i=t.top,o=n.accX,f=n.accY,s=r.height(),u=p.height(),d=r.width(),l=p.width();i+s+f>=a&&a+u+f>=i&&c+d+o>=e&&e+l+o>=c?r.appeared||r.trigger("appear",n.data):r.appeared=!1},c=function(){if(r.appeared=!0,n.one){p.unbind("scroll",t);var c=e.inArray(t,e.fn.appear.checks);c>=0&&e.fn.appear.checks.splice(c,1)}a.apply(this,arguments)};n.one?r.one("appear",n.data,c):r.bind("appear",n.data,c),p.scroll(t),e.fn.appear.checks.push(t),t()})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,r){var n=e.fn[r];n&&(e.fn[r]=function(){var a=n.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);

    // Animated counter
    // source: http://codepen.io/jakubtursky/pen/vEwZop
    $.fn.jQuerySimpleCounter=function(t){var n=$.extend({start:0,end:100,easing:"swing",duration:400,complete:""},t),e=$(this);$({count:n.start}).animate({count:n.end},{duration:n.duration,easing:n.easing,step:function(){var t=Math.ceil(this.count);e.text(t)},complete:n.complete})},$(".tm-counter-number").each(function(t){$(this).appear(function(){$(this).jQuerySimpleCounter({end:$(this).data().end,duration:$(this).data().duration})})});

});