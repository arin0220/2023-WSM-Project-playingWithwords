window.onload = function() {
    var buttonElement = document.querySelector('.button');
    buttonElement.style.display = 'block';
};

// 이미지 경로 배열
var imageSources = [
    'images/apple.png',
    'images/banana.png',
    'images/grape.png',
    'images/watermelon.png',
    'images/orange.png'
];

// 과일 클릭 여부를 저장할 배열
var clickedFruits = [0, 0, 0, 0, 0];

// 화면의 가로, 세로 크기를 가져오는 함수
function getWindowSize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return { width: width, height: height };
}

// 객체를 생성하고 랜덤한 위치로 이동하는 함수
function createRandomObject() {
    var object = document.createElement('img');
    object.style.position = 'absolute';

    // 이미지 소스를 랜덤하게 선택
    var randomIndex = Math.floor(Math.random() * imageSources.length);
    object.src = imageSources[randomIndex];

    var windowSize = getWindowSize();
    var maxX = windowSize.width - 150; // 가로 크기를 150px로 설정
    var maxY = windowSize.height - 150; // 세로 크기를 150px로 설정
    var randomX = Math.floor(Math.random() * (maxX + 1));
    var randomY = Math.floor(Math.random() * (maxY + 1));

    var headerHeight = document.querySelector('header').offsetHeight;
    var section = document.querySelector('section');
    var sectionTop = section.offsetTop;

    // 개체가 헤더 위에 나타나지 않도록 임의의 Y 위치 조정
    randomY = Math.max(randomY, sectionTop + headerHeight);

    object.style.left = randomX + 'px';
    object.style.top = randomY + 'px';
    object.style.width = '150px';
    object.style.height = '150px';

    // 화면 사이즈가 540px 이하인 경우에만 크기를 100px로 조정
    if (windowSize.width <= 540) {
        object.style.width = '100px';
        object.style.height = '100px';
    }
    object.addEventListener('click', function() {
        // 과일 클릭 시 해당 인덱스에 1 할당
        clickedFruits[randomIndex] = 1;

        var centerX = windowSize.width / 2 - 170; // 이미지 가로 크기의 절반 (300px의 절반)
        var centerY = windowSize.height / 2 - 150; // 이미지 세로 크기의 절반 (300px의 절반)
        var image = document.createElement('img');
        image.style.position = 'fixed';
        image.style.width = '340px';
        image.style.height = '300px';
        image.style.filter = 'none';
        image.style.top = centerY + 'px';
        image.style.left = centerX + 'px';

        // 클릭한 이미지에 따라 다른 이미지 소스를 할당
        if (randomIndex === 0) {
            image.src = 'images/appleGet.png';
        } else if (randomIndex === 1) {
            image.src = 'images/bananaGet.png';
        } else if (randomIndex === 2) {
            image.src = 'images/grapeGet.png';
        } else if (randomIndex === 3) {
            image.src = 'images/watermelonGet.png';
        } else if (randomIndex === 4) {
            image.src = 'images/orangeGet.png';
        }

        document.body.appendChild(image);

        setTimeout(function() {
            document.body.removeChild(image);
        }, 2000);
    });

    document.body.appendChild(object);

    // 2초에서 4초 사이의 랜덤한 시간이 지난 후에 객체를 제거
    var randomTime = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
    setTimeout(function() {
        document.body.removeChild(object);
    }, randomTime);
}

// 게임 시작 함수
function startGame() {
    var button = document.getElementById('myButton');
    var image = document.getElementById('myImage1');
    button.style.display = 'none';
    image.style.display = 'none';

    var gameInterval = setInterval(function() {
        createRandomObject();

        // 배열의 모든 값이 1이면 게임 종료
        if (clickedFruits.every(function(value) {
            return value === 1;
        })) {
            clearInterval(gameInterval);
            setTimeout(function() {
            alert('게임 종료!');
            
            // 다른 웹페이지로 이동
            window.location.href = 'main.html'; // 이동할 웹페이지의 URL을 설정합니다.
            }, 600);
        }
    }, 1000);
}
