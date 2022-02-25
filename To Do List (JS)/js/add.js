$(document).ready(function(){
    $('#add').click(function(){
        $('.popup').css('opacity', '1').css('visibility', 'visible');

        // 제목 1글자 이상 입력 문장
        $('.title-text').on('input', function(){
            let title = $('.title-text').val().trim();
            if (title.length < 1) {
                $('.title-warning').show();
            } else {
                $('.title-warning').hide();
            }
        });

        // add버튼 제외 header 클릭시 add 닫기
        $('header').click(function(e) { 
            if ($(e.target).hasClass('addBtn')) {

            } else {
                closeAdd();
            }
        });
        // 팝업창 이외 클릭시 add 닫기
        $('section').click(function(e) { 
            let aa = $(e.target).hasClass('popup');
            let bb = $(e.target).hasClass('main-text');
            let cc = $(e.target).hasClass('title-text');
            let dd = $(e.target).hasClass('title-warning');
            let ee = $(e.target).hasClass('popup-start');
            let ff = $(e.target).hasClass('start-text');
            let gg = $(e.target).hasClass('popup-end');
            let hh = $(e.target).hasClass('end-text');
            let ii = $(e.target).hasClass('popup-progress');
            let jj = $(e.target).hasClass('progress-span');
            let kk = $(e.target).hasClass('progress-radioBtn');
            let ll = $(e.target).hasClass('radioBtn');
            let nn = $(e.target).hasClass('btn');
            if (aa || bb || cc || dd || ee || ff || gg || hh || ii || jj || kk || ll || nn) {
                // 통과
            } else {
                closeAdd();
            }
       });
    });
    // 닫기 (js로 구현)
    document.getElementById('close').addEventListener('click', closeAdd);

    // // 닫기 버튼 Jquery로 구현
    // $('#close').click(function(){
    //     closeAdd();
    // });



    $('#save').click(function(){
        // 저장 조건 검사
        var flag = 1;
        let titleCheck = $('.title-text').val();
        let startCheck = $('.start-text').val();
        let endCheck = $('.end-text').val();
        if (titleCheck == '') {
            $(".title-text").effect("bounce");
            flag = 0;
        }
        if (startCheck == '') {
            $(".start-text").effect("bounce");
            flag = 0;
        }
        if (endCheck == '') {
            $(".end-text").effect("bounce");
            flag = 0;
        }

        // 저장 조건에 충족 했는지
        if (flag == 1) {
                // 제목 값 불러오기
            let title = titleValue();

            // 시작 날짜 값 불러오기
            let start = startValue();

            // 종료 날짜 값 불러오기
            let end = endValue();

            // 날짜
            let day = start + ' ~ ' + end;

            // 태그 추가
            add(title, day);
        }


        // 제목 값 불러오기
        function titleValue() {
            let title = $('.title-text').val().trim();
            return title;
        }
    
        // 시작 날짜 값 불러오기
        function startValue() {
            let start = $('.start-text').val().trim();
            return start;
        }
    
        // 종료 날짜 값 불러오기
        function endValue() {
            let end = $('.end-text').val().trim();
            return end;
        }

        function add(title, day) {
            var olArea = document.getElementById('ol');
            // li 태그 추가
            var newLi = document.createElement('li');
            // porogress 값 확인 후 li 색상 지정
            let checkedValue = $('input[name=progress]:checked').val();
            if (checkedValue == 'waiting') {
                newLi.setAttribute('class', 'sequence d-flex waiting-text');  
            } else if (checkedValue == 'ongoing') {
                newLi.setAttribute('class', 'sequence d-flex ongoing-text'); 
            } else if (checkedValue == 'complete') {
                newLi.setAttribute('class', 'sequence d-flex complete-text'); 
            }
            // li 태그 ol태그에 넣기
            olArea.append(newLi);


            // left div와 right div 생성
            var newLeftDiv = document.createElement('div');
            var newRightDiv = document.createElement('div');
            newLeftDiv.setAttribute('class', 'div-left d-flex');
            newRightDiv.setAttribute('class', 'div-right d-flex');
            // newLeftDiv와 newRightDiv 추가
            newLi.append(newLeftDiv);
            newLi.append(newRightDiv);


            // title div와 day div 만들기
            var titleDiv = document.createElement('div');
            titleDiv.setAttribute('class', 'title')
            titleDiv.innerHTML = title;
            var dayDiv = document.createElement('div');
            dayDiv.setAttribute('class', 'day');
            dayDiv.innerHTML = day;
            // day div와 title div 넣기
            newLeftDiv.append(titleDiv);
            newLeftDiv.append(dayDiv);
            

            // situation div와 manage div만들기
            var situationDiv = document.createElement('div');
            situationDiv.setAttribute('class', 'situation');
            var manageDiv = document.createElement('div');
            manageDiv.setAttribute('class', 'manage');
            // situation div와 manage div 넣기
            newRightDiv.append(situationDiv);
            newRightDiv.append(manageDiv);


            // situation 버튼 만들기
            var waitingBtn = document.createElement('button');
            waitingBtn.addEventListener("click", btnWaiting);
            waitingBtn.innerHTML = '대기';
            var ongoingBtn = document.createElement('button');
            ongoingBtn.addEventListener("click", btnOngoing);
            ongoingBtn.innerHTML = '진행중';
            var completeBtn = document.createElement('button');
            completeBtn.addEventListener("click", btnComplete);
            completeBtn.innerHTML = '완료';
            // progress 확인 후 버튼 색깔 지정
            if (checkedValue == 'waiting') {
                waitingBtn.setAttribute('class', 'btn waiting-btn btn-warning');
                ongoingBtn.setAttribute('class', 'btn ongoing-btn btn-dark');
                completeBtn.setAttribute('class', 'btn complete-btn btn-dark');
            } else if (checkedValue == 'ongoing') {
                waitingBtn.setAttribute('class', 'btn waiting-btn btn-dark');
                ongoingBtn.setAttribute('class', 'btn ongoing-btn btn-danger');
                completeBtn.setAttribute('class', 'btn complete-btn btn-dark');
            } else if (checkedValue == 'complete') {
                waitingBtn.setAttribute('class', 'btn waiting-btn btn-dark');
                ongoingBtn.setAttribute('class', 'btn ongoing-btn btn-dark');
                completeBtn.setAttribute('class', 'btn complete-btn btn-success');
            }
            // situation 버튼 situationDiv에 넣기
            situationDiv.append(waitingBtn);
            situationDiv.append(ongoingBtn);
            situationDiv.append(completeBtn);

            
            // manage 버튼 만들기
            var modifyBtn = document.createElement('button');
            modifyBtn.setAttribute('class', 'btn modify-btn');
            modifyBtn.addEventListener("click", btnModify);
            modifyBtn.innerHTML = '수정';
            var deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'btn delete-btn');
            deleteBtn.addEventListener("click", btnDelete);
            deleteBtn.innerHTML = '삭제';
            // manage 버튼 manageDiv에 넣기
            manageDiv.append(modifyBtn);
            manageDiv.append(deleteBtn);
        }

        // 대기 버튼을 눌렀을 때
        function btnWaiting(e) {
            // console.dir(e);
            
            // li 노란색
            let li = e.target.parentElement.parentElement.parentElement;
            li.style.color = "rgb(255, 193, 7)";
            li.style.textDecoration = "none";
            

            // 대기 버튼 노란색
            e.target.style.background = "rgb(255, 193, 7)";

            // 나머지 버튼 검정색
            e.target.parentElement.children[1].style.background = "rgb(52, 58, 64)";
            e.target.parentElement.children[2].style.background = "rgb(52, 58, 64)";
        }

        // 진행중 버튼을 눌렀을 때
        function btnOngoing(e) {
            // console.dir(e);

            // li 빨간색
            let li = e.target.parentElement.parentElement.parentElement;
            li.style.color = "rgb(220, 53, 69)";
            li.style.textDecoration = "none";
            

            // 대기 버튼 빨간색
            e.target.style.background = "rgb(220, 53, 69)";

            // 나머지 버튼 검정색
            e.target.parentElement.children[0].style.background = "rgb(52, 58, 64)";
            e.target.parentElement.children[2].style.background = "rgb(52, 58, 64)";
            

        }

        // 완료 버튼을 눌렀을 때
        function btnComplete(e) {
            // console.dir(e);

            // li 초록색
            let li = e.target.parentElement.parentElement.parentElement;
            li.style.color = "rgb(40, 167, 69)";
            li.style.textDecoration = "line-through double black";
            

            // 대기 버튼 초록색
            e.target.style.background = "rgb(40, 167, 69)";

            // 나머지 버튼 검정색
            e.target.parentElement.children[0].style.background = "rgb(52, 58, 64)";
            e.target.parentElement.children[1].style.background = "rgb(52, 58, 64)";

        }

        // 수정 버튼을 눌렀을 때
        function btnModify(e) {
            console.dir(e);
            $('.popup2').css('opacity', '1').css('visibility', 'visible');

            let titleDiv = e.target.parentElement.parentElement.parentElement.children[0].children[0]
            let dayDiv = e.target.parentElement.parentElement.parentElement.children[0].children[1]

            // 원본 값 표시
            let titleValue = e.target.parentElement.parentElement.parentElement.children[0].children[0].innerHTML;
            let startDayValue = e.target.parentElement.parentElement.parentElement.children[0].children[1].innerHTML.slice(0, 10);
            let endDayValue = e.target.parentElement.parentElement.parentElement.children[0].children[1].innerHTML.slice(13, 24);
            $('.title-text2').val(titleValue);
            $('.start-text2').val(startDayValue);
            $('.end-text2').val(endDayValue);

            $('#save2').click(function(){
                $('.title-text2').innerHTML = '';
                $('.start-text2').innerHTML = '';
                $('.end-text2').innerHTML = '';
                let title = $('.title-text2').val();
                let start = $('.start-text2').val();
                let end = $('.end-text2').val();
                titleDiv.innerHTML = title;
                dayDiv.innerHTML = start + " ~ " + end;

                titleDiv = 'null';
                dayDiv = 'null';
                $('.popup2').css('opacity', '0').css('visibility', 'hidden');
                $('.title-text2').innerHTML = '';
                $('.start-text2').innerHTML = '';
                $('.end-text2').innerHTML = '';
            })

            $('#cancel2').click(function(){
                $('.popup2').css('opacity', '0').css('visibility', 'hidden');
                $('.title-text2').val('');
                $('.start-text2').val('');
                $('.end-text2').val('');
            });
        }

        // 삭제 버튼을 눌렀을 때
        function btnDelete(e) {
            // console.dir(e);

            let li = e.target.parentElement.parentElement.parentElement;
            li.remove();
        }
    });

    // 팝업창(ADD) 닫기
    function closeAdd() {
        $('.popup').css('opacity', '0').css('visibility', 'hidden');
        $('.title-text').val('');
        $('.start-text').val('');
        $('.end-text').val('');
        $('input[name="progress"]').removeAttr('checked');
        $('input[name="progress"]')[0].checked = true;
    }
});
