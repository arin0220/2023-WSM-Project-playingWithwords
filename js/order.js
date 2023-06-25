// 버튼을 선택합니다.
const button = document.getElementById("shuffle");
// 이미지를 선택합니다.
const images = document.querySelectorAll(".order img");

// 섞인 이미지의 순서를 저장할 변수를 전역 변수로 선언합니다.
let order;

// 게임이 시작되었는지를 나타내는 변수를 선언합니다.
let isGameStarted = false;

// 버튼을 클릭하면 실행할 함수를 정의합니다.
function shuffleImages() {
  isGameStarted = true;
  // 이미지의 순서를 랜덤하게 섞는 함수를 정의합니다.
  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array; // 섞인 이미지의 순서를 반환합니다.
  }
  // 이미지의 순서를 랜덤하게 섞습니다.
  const shuffledImages = shuffle(Array.from(images));

  // 섞인 이미지의 순서를 전역 변수에 저장합니다.
  order = shuffledImages.map(image => image.alt); // 이미지의 alt 속성을 저장합니다.
  // 전역변수 출력
  console.log(order);
  // 이미지의 부모 요소를 선택합니다.
  const parent = document.querySelector(".order");
  // 부모 요소의 자식 요소들을 모두 제거합니다.
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  // 섞인 이미지들을 부모 요소에 다시 추가합니다.
  for (let image of shuffledImages) {
    parent.appendChild(image);
    /* 이미지를 보이게 합니다. */
    image.style.display = "block";
  }
  /* 버튼을 숨깁니다. */
  button.style.display = "none";

  document.querySelector(".start_img").style.display = "none";
  document.querySelector(".btn_box").style.display = "flex";
  /* 3초 뒤에 이미지를 숨깁니다. */
  setTimeout(function() {
    for (let image of images) {
      image.style.display = "none";
    }
  }, 5000);
}
// .button 버튼을 클릭하면 실행할 함수를 정의합니다.
function buttonClickHandler() {
  // 게임이 시작되지 않았다면 함수를 종료합니다.
  if (!isGameStarted) {
    return;
  }
  // .button 버튼이 클릭되었을 때의 동작을 정의합니다.
}

// .button 버튼에 클릭 이벤트 리스너를 추가합니다.
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", buttonClickHandler);
});

// #shuffle 버튼에 클릭 이벤트 리스너를 추가합니다.
button.addEventListener("click", shuffleImages);

// 각각의 div 태그를 선택하여 변수에 저장한다.
var apple = document.getElementById("cat");
var banana = document.getElementById("dog");
var grape = document.getElementById("bear");
var orange = document.getElementById("lion");
var watermelon = document.getElementById("monkey");

// 새로운 배열을 만든다.
var words = [];

// 두 배열을 비교하는 함수를 작성한다.
function compareArrays() {
  // 같은 요소의 개수를 저장할 변수를 선언한다.
  let count = 0;
  // 두 배열의 요소들을 하나씩 비교한다.
  for (let i = 0; i < order.length; i++) {
    // 같은 요소가 있다면, count를 증가시킨다.
    if (order[i] === words[i]) {
      count++;
    }
  }
  // count에 따라 다른 문구를 alert 으로 띄운다.
  if (count === 5) {
    alert("만점!");
    /* result 이미지를 보이게 합니다. */
    document.querySelector(".result").style.display = "flex";
    /* .order 이미지와 .btn_box 요소를 숨깁니다. */
    document.querySelector(".order").style.display = "none";
    document.querySelector(".btn_box").style.display = "none";
  } else {
    alert("아쉬워요! 다시 시도해 보세요!");
    window.location.href = "orderGame.html";
  }
}

const result_btn = document.getElementById("result");
result_btn.addEventListener("click",function() {
  window.location.href = "main.html";
})

// 각각의 div 태그에 클릭 이벤트를 연결한다.
cat.addEventListener("click", function () {
  // 게임이 시작되었는지 확인합니다.
  if (isGameStarted) {
    // "cat" 단어를 words 배열에 추가합니다.
    words.push("cat");

    // words 배열이 원하는 길이에 도달했는지 확인합니다.
    if (words.length === order.length) {
      console.log(words);
      // compareArrays 함수를 호출합니다.
      compareArrays();
    }
  }
});

dog.addEventListener("click", function () {
  if (isGameStarted) {
    words.push("dog");

    if (words.length === order.length) {
      console.log(words);
      compareArrays();
    }
  }
});

bear.addEventListener("click", function () {
  if (isGameStarted) {
    words.push("bear");

    if (words.length === order.length) {
      console.log(words);
      compareArrays();
    }
  }
});

lion.addEventListener("click", function () {
  if (isGameStarted) {
    words.push("lion");

    if (words.length === order.length) {
      console.log(words);
      compareArrays();
    }
  }
});

monkey.addEventListener("click", function () {
  if (isGameStarted) {
    words.push("monkey");

    if (words.length === order.length) {
      console.log(words);
      compareArrays();
    }
  }
});