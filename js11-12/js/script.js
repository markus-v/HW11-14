$(document).ready(function() {
    var html = $('#template').html();
    var tmpl = _.template(html);
    var result = tmpl({count: 19});
    
    $('.jcarousel-wrapper').html(result);
    $('.jcarousel').jcarousel({
        width: '640px', 
        height: '400px'
    });
    
});