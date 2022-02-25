$(document).ready(function(){
    $.datepicker.setDefaults({
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], // 요일을 한글로 변경
        dateFormat: 'yy-mm-dd',
        minDate: 0, // 오늘과 그 이후만 선택 가능
    });

    $('.start-text').datepicker({
        showButtonPanel: true, // '오늘' 버튼 노출
        currentText: "오늘",
        closeText: "Done",

        // 시작일이 선택되는 순간 종료일의 minDate 변경
        onSelect: function(selectedDate) {    
            $(".end-text").datepicker("option", "minDate", selectedDate);
        }
    });
    
    $('.end-text').datepicker({

    });

    // 오늘 날짜로 이동하는 함수
    $.datepicker._gotoToday = function(id) {
        $(id).datepicker('setDate', new Date()).datepicker('hide').blur();
    };

    $('.start-text2').datepicker({
        showButtonPanel: true, // '오늘' 버튼 노출
        currentText: "오늘",
        closeText: "Done",

        // 시작일이 선택되는 순간 종료일의 minDate 변경
        onSelect: function(selectedDate) {    
            $(".end-text2").datepicker("option", "minDate", selectedDate);
        }
    });
    
    $('.end-text2').datepicker({

    });
});