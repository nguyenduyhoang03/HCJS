var request;
var $current;
var cache ={};
var $frame = $('#photo-viewer');
var $thumbs = $('.thumb');

function crossfade($img){
    if($current){
        $current.stop().fadeOut('slow');
    }
    $img.css({
        marginLeft: -$img.width() / 2,
        marginTop: -$img.height() / 2
    });
    $img.stop().fadeTo('slow', 1);
    $current = $img;
}
$(document).on('click', '.thumb', function(e){
    var $img,
        src = this.href;
        request =src;
    e.preventDefault();

    $thumbs.removeClass('active');
    $(this).addClass('active');
    
    if(cache.hasOwnProperty(src)){
        if(cache[src].isLoading === false){
            crossfade(cache[src].$img);
        }
    }else{
        $img = $('<img/>');
        cache[src] = {
            $img: $img,
            isLoading: true
        };
        $img.on('load', function(){
            $img.hide();
            //remove is-Loading class from frame & appedn new img to it
            $frame.removeClass('is-Loading').append($img);
            cache[src].isLoading = false;
            //if still most recently requested image then
            if(request === src){
                crossfade($img);
            }
        });
        $frame.addClass('is-Loading');
        $img.attr({
            'src':src,
            'alt': this.title || ''
        });
    }
});
//final line runs once when rese of script has loaded to show the first image 
$('.thumb').eq(0).click();    //simulate click on first thumb