$(function(){
    // Slick Carousel 적용
    $('.single-item').slick({
        prevArrow: $('.prev-button'), // 이전 버튼에 대한 설정
        nextArrow: $('.next-button'), // 다음 버튼에 대한 설정
        swipe: true // 마우스 드래그에 대한 설정
    });

    // 이전 버튼 클릭 시
    $('.prev-button').click(function() {
        $('.single-item').slick('slickPrev');
        updateAnimalName();
    });

    // 다음 버튼 클릭 시
    $('.next-button').click(function() {
        $('.single-item').slick('slickNext');
        updateAnimalName();
    });

    // 이미지 변경 시 동물 이름 업데이트
    $('.single-item').on('afterChange', function(event, slick, currentSlide) {
        updateAnimalName();
    });

    function updateAnimalName() {
        var currentSlide = $('.single-item').slick('slickCurrentSlide');
        var names = ['문어', '해마', '고래', '상어', '물고기', '오렌지', '사과', '바나나', '포도', '수박', '개', '고양이', '곰', '사자', '원숭이'];
        var nameIndex = currentSlide % names.length;
        $('#animal-name').text(names[nameIndex]);
    }
});