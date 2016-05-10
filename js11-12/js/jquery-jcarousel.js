(function ($) {
    $.fn.jcarousel = function (options) {
        
        var defaults = {
            width: '640px',
            height: '400px'   
        };
        
        var settings = $.extend(defaults, options);
        var pos = 0;
        var items = $('.jcarousel__item').length;
        if (pos == 0) {
            $('.jcarousel-prev').animate({opacity: "0.5"}, 500);
        };
        var slideWidth = parseInt(settings.width);
        
        $('.jcarousel-list').css({
            "list-style": "none",
            position: "absolute",
            width: items*slideWidth + 'px',
            left: 0,
            height: settings.height,
            transition: "left 0.5s ease-out 0.2s"
        });
        $('.jcarousel__item').css({
            display: "block",
            float: "left"
            
        });
        $('.jcarousel__img').css({width: settings.width, height: settings.height});
        $('.jcarousel').css({
            position: 'relative',
            width: settings.width,
            height: settings.height,
            overflow: 'hidden',
            margin: 'auto',
            border: "20px wheat solid",
            "border-radius": '20px'
        });
        $('.jcarousel-control').css({
            "text-decoration": "none",
            position: "absolute",
            "font-size": "90px",
            "font-family": "sans-serif",
            top: "50%",
            transform: "translateY(-66%)",
            color: "white",
            "text-shadow": "3px",
            "z-index": 1
        });
        $('.jcarousel-next').css("right", "0");
        $('.jcarousel-prev').css("left", "0");
        
        this.on('click', '.jcarousel-next', function(){
            if (pos > -items * slideWidth + slideWidth) {
                pos -= slideWidth;
                $('.jcarousel-list').css("left", pos + 'px');
                $('.jcarousel-prev').animate({opacity: "1"}, 500);
            }
            if (pos <= -items * slideWidth + slideWidth) {
                $('.jcarousel-next').animate({opacity: "0.5"}, 500);
            };
        });
        
        this.on('click', '.jcarousel-prev', function(){
            if (pos < 0) {
                pos += slideWidth;
                $('.jcarousel-list').css("left", pos + 'px');
                $('.jcarousel-next').animate({opacity: "1"}, 500);
            }
            if (pos >= 0) {
                $('.jcarousel-prev').animate({opacity: "0.5"}, 500);
            };
        });
        
        return this;
    };
})(jQuery);