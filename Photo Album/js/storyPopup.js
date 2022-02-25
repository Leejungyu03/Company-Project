$(document).ready(function(){
    var currentIdx = 0;
    var progressBar = 20; 
    var story;
    var cakeImages = ['images/cake/cake1.jpg', 'images/cake/cake2.jpg', 'images/cake/cake3.jpg', 'images/cake/cake4.jpg', 'images/cake/cake5.jpg'];
    var beachImages = ['images/beach/beach1.jpg', 'images/beach/beach2.jpg', 'images/beach/beach3.jpg', 'images/beach/beach4.jpg', 'images/beach/beach5.jpg'];
    var carImages = ['images/car/car1.jpg', 'images/car/car2.jpg', 'images/car/car3.jpg', 'images/car/car4.jpg', 'images/car/car5.jpg'];
    var tripImages = ['images/trip/trip1.jpg', 'images/trip/trip2.jpg', 'images/trip/trip3.jpg', 'images/trip/trip4.jpg', 'images/trip/trip5.jpg'];
    var dogImages = ['images/dog/dog1.jpg', 'images/dog/dog2.jpg', 'images/dog/dog3.jpg', 'images/dog/dog4.jpg', 'images/dog/dog5.jpg'];
    var catImages = ['images/cat/cat1.jpg', 'images/cat/cat2.jpg', 'images/cat/cat3.jpg', 'images/cat/cat4.jpg', 'images/cat/cat5.jpg'];
    var meatImages = ['images/meat/meat1.jpg', 'images/meat/meat2.jpg', 'images/meat/meat3.jpg', 'images/meat/meat4.jpg', 'images/meat/meat5.jpg'];
    var fruitImages = ['images/fruit/fruit1.jpg', 'images/fruit/fruit2.jpg', 'images/fruit/fruit3.jpg', 'images/fruit/fruit4.jpg', 'images/fruit/fruit5.jpg'];
    var dressImages = ['images/dress/dress1.jpg', 'images/dress/dress2.jpg', 'images/dress/dress3.jpg', 'images/dress/dress4.jpg', 'images/dress/dress5.jpg'];
    
    // 스토리 다음 사진
    $('.story-popup-next').click(function(){
        // 해당 스토리 끝 보다 작으면 +1 (최대 길이 넘김 방지)
        if (currentIdx <= story.length) {
            currentIdx += 1
        }
        // 0 보다 크기만 하면 이전버튼 보이기
        if (currentIdx > 0) {
            $('.story-popup-prev').show();
        }
        // 스토리 끝까지 가면 다음버튼 숨기기
        if (currentIdx > story.length - 2) {
            $('.story-popup-next').hide();
        }
        progressBar = 100/story.length * currentIdx + 20;
        $('.progress').css('width', progressBar + '%'); // 진행바 변경
        $('.main-img img').attr('src', story[currentIdx]); // 사진 변경
    });

    // 스토리 이전 사진
    $('.story-popup-prev').click(function(){
        // 해당 스토리 0보다 클때만 -1 (0이하로 가는 거 방지)
        if (currentIdx > 0) {
            currentIdx -= 1
        }
        // 스토리 처음이 되면 이전 버튼 숨기기
        if (currentIdx < 1) {
            $('.story-popup-prev').hide();
        }
        // 스토리 끝이 아니면 다음 버튼 보이기
        if (currentIdx < story.length) {
            $('.story-popup-next').show();
        }
        progressBar = 100/story.length * currentIdx + 20;
        $('.progress').css('width', progressBar + '%'); // 진행바 변경
        $('.main-img img').attr('src', story[currentIdx]); // 사진 변경
    });


    // 케익크 스토리 보기
    $('.story-cake').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = cakeImages;
        slide();
        $('.main-img img').attr('src', cakeImages[currentIdx]);
    });
    // 해변 스토리 보기
    $('.story-beach').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = beachImages;
        slide();
        $('.main-img img').attr('src', beachImages[currentIdx]);
    });
    // 자동차 스토리 보기
    $('.story-car').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = carImages;
        slide();
        $('.main-img img').attr('src', carImages[currentIdx]);
    });
    // 여행 스토리 보기
    $('.story-trip').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = tripImages;
        slide();
        $('.main-img img').attr('src', tripImages[currentIdx]);
    });
    // 강아지 스토리 보기
    $('.story-dog').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = dogImages;
        slide();
        $('.main-img img').attr('src', dogImages[currentIdx]);
    });
    // 고양이 스토리 보기
    $('.story-cat').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = catImages;
        slide();
        $('.main-img img').attr('src', catImages[currentIdx]);
    });
    // 고기 스토리 보기
    $('.story-meat').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = meatImages;
        slide();
        $('.main-img img').attr('src', meatImages[currentIdx]);
    });
    // 과일 스토리 보기
    $('.story-fruit').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = fruitImages;
        slide();
        $('.main-img img').attr('src', fruitImages[currentIdx]);
    });
    // 옷 스토리 보기
    $('.story-dress').click(function(){
        $('.story-popup-prev').hide();
        open();
        story = dressImages;
        slide();
        $('.main-img img').attr('src', dressImages[currentIdx]);
    });

    // 스토리 창 닫기
    $('.story-popup-close').click(function(){
        close();
    });
    

    // 스토리창 열기
    function open () {
        $('.story-bg').css('visibility', 'visible');
        $('.story-popup').css('transition', 'all 1.5s');
        $('.story-popup').css('visibility', 'visible');
        $('.story-popup').css('opacity', '1');
    }
    // 스토리창 닫기
    function close () {
        currentIdx = 0;
        progressBar = 20;
        $('.story-bg').css('visibility', 'hidden');
        $('.story-popup').css('visibility', 'hidden');
        $('.story-popup').css('opacity', '0');
        $('.story-popup').css('transition', 'all 0s');
        $('.story-popup-prev').show();
        $('.story-popup-next').show();
        $('.progress').css('width', progressBar + '%');
        clearInterval(interval); // 반복 멈춤
    }

    // 슬라이드
    function slide () {
        // next 버튼 눌렀을 때 정지
        $('.story-popup-next').click(function(){
            clearInterval(interval);
            $('.progress').css('transition','all 0.5s');
        });
        // prev 버튼 눌렀을 때 정지
        $('.story-popup-prev').click(function(){
            clearInterval(interval);
            $('.progress').css('transition','all 0.5s');
        });
        // 상태바 느리게
        $('.progress').css('transition','all 3.5s');

        // 자동 넘김
        let interval = setInterval(function(){
            currentIdx++;
            $('.main-img img').attr('src', story[currentIdx]);
            progressBar = 100/story.length * currentIdx + 20;
            $('.progress').css('width', progressBar + '%');
            if (currentIdx > story.length - 2) {
                clearInterval(interval);
            }
            if (currentIdx > 1) {
                $('.story-popup-prev').show();
            }
            if (currentIdx > story.length - 2) {
                $('.story-popup-next').hide();
            }
            if (currentIdx > 0) {
                $('.story-popup-prev').show();
            }
        }, 3000);
    }
});