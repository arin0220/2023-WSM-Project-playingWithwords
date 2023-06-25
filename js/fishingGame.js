var clickedAnimals = 0;  // 클릭한 생물의 개수를 저장하는 변수
var totalAnimals = 5;   // 전체 해양 생물의 개수를 저장하는 변수

window.onload = function() {
    var buttonElement = document.querySelector('.button');
    buttonElement.style.display = 'block';
};

function hideButtonAndImage() {
    var button = document.getElementById('myButton');
    var myImage1 = document.getElementById('myImage1');
    var seaAnimalImages = document.getElementsByClassName('SeaAnimalImage');

    button.style.display = 'none';
    myImage1.style.display = 'none';

    for (var i = 0; i < seaAnimalImages.length; i++) {
        seaAnimalImages[i].style.display = 'block';
    }
}


function hideButton1() {
    var buttonElement1 = document.querySelector('.button1');
    var myImage1 = document.getElementById('myImage1');
    buttonElement1.style.display = 'none';
    myImage1.style.display = 'none';
    var seaAnimalImages = document.getElementsByClassName('SeaAnimalImage');

    for (var i = 0; i < seaAnimalImages.length; i++) {
        seaAnimalImages[i].style.display = 'block';
    }
}

// 고래를 클릭했을 때
function clickAnimal1() {
    var seaAnimalImage1 = document.querySelector('.SeaAnimalImage1');
    seaAnimalImage1.style.display = 'none';
    clickedAnimals++;
    checkGameOver();
}

// 해마를 클릭했을 때
function clickAnimal2() {
    var seaAnimalImage2 = document.querySelector('.SeaAnimalImage2');
    seaAnimalImage2.style.display = 'none';
    clickedAnimals++;
    checkGameOver();
}

// 물고기를 클릭했을 때
function clickAnimal3() {
    var seaAnimalImage3 = document.querySelector('.SeaAnimalImage3');
    seaAnimalImage3.style.display = 'none';
    clickedAnimals++;
    checkGameOver();
}

// 문어를 클릭했을 때
function clickAnimal4() {
    var seaAnimalImage4 = document.querySelector('.SeaAnimalImage4');
    seaAnimalImage4.style.display = 'none';
    clickedAnimals++;
    checkGameOver();
}

// 상어를 클릭했을 때
function clickAnimal5() {
    var seaAnimalImage5 = document.querySelector('.SeaAnimalImage5');
    seaAnimalImage5.style.display = 'none';
    clickedAnimals++;
    checkGameOver();
}

function checkGameOver() {
    if (clickedAnimals === totalAnimals) {
        setTimeout(function() {
            alert('게임 종료!');
            
            // 다른 웹페이지로 이동
            window.location.href = 'main.html'; // 이동할 웹페이지의 URL을 설정합니다.
            }, 600);
        
    }
}