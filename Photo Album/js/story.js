$(document).ready(function(){
    var currentIdx = 0;
    var storyLineCount = 9;
    var storyLineWidth = 83;
    var storyLineMargin = 60;
    
    // 스토리 최대 width 값 구하고 적용
    var storyLineWidth = (storyLineWidth + storyLineMargin)*storyLineCount - storyLineMargin + 'px';
    $('.story-line').css('width', storyLineWidth);

    // ▷(next) 버튼을 눌렀을 때
    $('#next').click(function(){
        moveSlide(currentIdx + 1);
        // next 버튼 숨기기
        $('#next').css('transition-delay','none');
        $('#next').css('opacity', '0');
        // prev 버튼 보이기
        $('#prev').css('transition-delay', '0.7s');
        $('#prev').css('opacity', '0.6');
        
    });
    // ◁(prev) 버튼을 눌렀을 때
    $('#prev').click(function(){
        moveSlide(currentIdx - 1);
        // prev 버튼 숨기기
        $('#prev').css('transition-delay-delay', 'none');
        $('#prev').css('opacity', '0');
        // next 버튼 보이기
        $('#next').css('transition-delay', '0.7s');
        $('#next').css('opacity', '0.6');
    });

    // 팔로우 했을 때
    $('.button').click(function(){
        $('.button').hide();
        $('.button-cancel').show();
        $('#follower').text('팔로워 1');
    });
    // 언팔로우 했을 때
    $('.button-cancel').click(function(){
        $('.button-cancel').hide();
        $('.button').show();
        $('#follower').text('팔로워 0');
    });

    // 슬라이드 넣기
    function moveSlide(num) {
        let moveLeft = -num * 280 + 'px';
        $('.story-line').css('left', moveLeft);
        currentIdx = num;
    }
});