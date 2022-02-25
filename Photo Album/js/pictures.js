$(document).ready(function(){
    var count = 0;
    var total = 0;
    var albums = new Array();
    // 파일 선택
    $('.fileBtn').click(function(){
        $('.uploadBtn').click(function(){
            let leng =  $('#file')[0].files.length;
            total = total + leng;
            // 최대 8개
            if (total > 8) {
                total = total - leng;
            } else {
                for (var i = 0; i <= leng; i++) {
                    let selectFile = $('#file')[0].files[i];
                    var file = URL.createObjectURL(selectFile);
                    $('#imgs').append('<img src="' + file + '">');
                    albums.push(file);
                }
            }
        });
    });

    // 게시물 만들기 창 열기
    $('.pictures-popup-open').click(function(){
        $('.pictures-popup').css('opacity', '1').css('visibility', 'visible').css('transition', 'all 1.5s');
        $('.story-bg').css('visibility', 'visible');
    });

    // 게시물 내용 설정으로 전환
    $('.post-next').click(function(){
        $('.post-menu').css('right', '800px');
        $('.post-make').css('right', '800px');
    });
    // 게시물 사진 설정으로 전환
    $('.post-prev').click(function(){
        $('.post-menu').css('right', '0');
        $('.post-make').css('right', '0');
    });
    // 배경 클릭시 게시글 만들기 창 닫기
    $('.story-bg').click(function(){
        close();
    });

    // 다음 버튼을 눌렀을 때 
    $('.post-create').click(function(){
        let title = $('.title').val();
        let explain = $('.explain').val();
        let tag = $('.tag').val();

        // 생성할 곳 => pictures
        let pictures = $('.pictures');
        // 앨범 전체
        let divAll = $('<div></div>');
        $(divAll).addClass('all');
        // 앨범 텍스트
        let divText = $('<div></div>');
        $(divText).addClass('text');
        $(divText).on('click', textClick);
        // 앨범
        let divAlbum = $('<div></div>');
        $(divAlbum).addClass('album');
        // 앨범 내 이미지
        let divAlbumImg = $('<div></div>');
        $(divAlbumImg).addClass('album-img d-flex');

        // 앨범 텍스트 내부 제목
        let divAlbumTitle = $('<span></span>');
        $(divAlbumTitle).addClass('album-title');
        $(divAlbumTitle).text(title);
        // 앨범 텍스트 내부 태그
        let divAlbumTag = $('<span></span>');
        divAlbumTag.addClass('album-tag');
        $(divAlbumTag).text(tag);
        // 앨범 텍스트 내부 설명
        let divAlbumExplain = $('<span></span>');
        divAlbumExplain.addClass('album-explain');
        $(divAlbumExplain).text(explain);

        // 앨범 내부 next 버튼
        let divAlbumNext = $('<span></span>');
        divAlbumNext.addClass('album-next');
        divAlbumNext.on('click', nextClick);
        $(divAlbumNext).text('▷');
        // 앨범 내부 prev 버튼
        let divAlbumPrev = $('<span></span>');
        divAlbumPrev.addClass('album-prev');
        divAlbumPrev.on('click', prevClick);
        $(divAlbumPrev).text('◁');

        // 앨범 내부 delete 버튼
        let divAlbumDelete = $('<button></button>');
        divAlbumDelete.addClass('album-delete btn');
        divAlbumDelete.on('click', deleteClick);
        $(divAlbumDelete).text('Delete');

        // 앨범 내부 이미지 추가
        for (var i = 0; i < albums.length; i++) {
            let albumImg = $('<img></img>');
            $(albumImg).attr('src', albums[i]);
            $(divAlbumImg).append(albumImg);
        }

        $(divText).append(divAlbumTitle);
        $(divText).append(divAlbumDelete);
        $(divText).append(divAlbumTag);
        $(divText).append(divAlbumExplain);

        $(divAlbum).append(divAlbumNext);
        $(divAlbum).append(divAlbumPrev);
        $(divAlbum).append(divAlbumImg);
        
        $(divAll).append(divText);
        $(divAll).append(divAlbum);

        $(pictures).append(divAll);
        
        close ();
    });

    // 새 게시물 만들기 창 닫기
    function close () {
        $('.pictures-popup').css('opacity', '0').css('visibility', 'hidden').css('transition', 'all 0s');
        $('.story-bg').css('visibility', 'hidden');
        $('.post-menu').css('right', '0');
        $('.post-make').css('right', '0');
        $('#imgs img').remove();
        $('.title').val('');
        $('.explain').val('');
        $('.tag').val('');
        total = 0;
        albums.splice(0);
    }

    // 앨범 내 텍스트 클릭 했을때
    function textClick (e) {
        $('.album-img').css('left', '310px');
        
        let target = e.target.parentElement.children[1]; // 이미지가 나타나는 곳 
        let title = e.target.parentElement.children[0].children[0] // 제목
        let deleteBtn = e.target.parentElement.children[0].children[1] // 삭제 버튼
        let tag = e.target.parentElement.children[0].children[2] // 태그
        let explain = e.target.parentElement.children[0].children[3] // 설명

        // 맨 처음 그림 확대
        let spotlightPrev = e.target.parentElement.children[1].children[2].children[0];
        $(spotlightPrev).css('width', '300px').css('height', '216px');

        if ($(target).css('display') == 'none') {
            $('.album').hide();
            count = -1;
            $(title).hide();
            $(tag).hide();
            $(deleteBtn).hide();
            $(target).show();
            $(explain).show();
        } else {
            $(title).show();
            $(tag).show();
            $(deleteBtn).show();
            $(target).hide();
            $(explain).hide();
        }
    }

    // next 버튼 클릭
    function nextClick (e) {
        slide(e, count + 1);
    }
    // prev 버튼 클릭       
    function prevClick (e) {
        slide(e, count - 1);
    }
    // 슬라이드 모션
    function slide (e, num) {
        let move = e.target.parentElement.children[2];
        let moveLeft = -num * 300 + 'px';
        $(move).css('left', moveLeft)
        count = num;
        // 가운데 사진 확대 또는 축소
        let spotlight = e.target.parentElement.children[2].children[count + 1];
        let spotlightDrop = e.target.parentElement.children[2].children[count];
        $(spotlightDrop).css('width', '250px').css('height', '166px');
        $(spotlight).css('width', '300px').css('height', '216px');
    }
    // 삭제 버튼
    function deleteClick (e) {
        let deleteTarget = e.target.parentElement.parentElement;
        $(deleteTarget).remove();
    }
});