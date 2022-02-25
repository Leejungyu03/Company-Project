$(document).ready(function(){
    // 기본 게시물 설정
    $('.post').css('color', 'black').css('border-top', '1px solid black');

    // 게시물 눌렀을 때
    $('.post').click(function(){
        $('.post').css('color', 'black').css('border-top', '1px solid black');

        $('.reels').css('color', 'gainsboro').css('border-top', 'none');
        $('.video').css('color', 'gainsboro').css('border-top', 'none');
    });
    // 릴스 눌렀을 때
    $('.reels').click(function(){
        $('.reels').css('color', 'black').css('border-top', '1px solid black');

        $('.post').css('color', 'gainsboro').css('border-top', 'none');
        $('.video').css('color', 'gainsboro').css('border-top', 'none');
    });
    // 동영상
    $('.video').click(function(){
        $('.video').css('color', 'black').css('border-top', '1px solid black');
        
        $('.post').css('color', 'gainsboro').css('border-top', 'none');
        $('.reels').css('color', 'gainsboro').css('border-top', 'none');
    });
});