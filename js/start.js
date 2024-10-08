const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 6;

// 엑셀 파일 경로
let excel = [
  ["a", "a", "a", "a", "a", "b", "b", "b", "b", "b", "b", "b"],
  ["a", "a", "b", "c", "d", "a", "a", "b", "b", "c", "c", "d"],
  ["b", "a", "b", "a", "a", "b", "a", "a", "b", "b", "b", "a"],
  ["b", "b", "b", "b", "a", "a", "b", "a", "b", "a", "b", "a"],
  ["b", "a", "b", "a", "b", "b", "b", "b", "a", "a", "b", "b"],
  ["b", "b", "a", "b", "a", "a", "b", "a", "a", "a", "b", "b"],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const shop = [
  ["가온길", "https://naver.me/FEJWo0f8"],
  ["톤즈", "https://naver.me/F2Y2Bmof"],
  ["스위트브라운", "https://naver.me/FQ5rvzNw"],
  ["위베이브베이크샵", "https://naver.me/5vYnlJmQ"],
  ["오프타임", "https://naver.me/FLKydIfn"],
  ["아이딜", "https://naver.me/G2UAWHYK"],
  ["인하프", "https://naver.me/xoL8T8RQ"],
  ["메이브커피숍", "https://naver.me/5Y1mZpbU"],
  ["아모르미오", "https://naver.me/xbw7DAai"],
  ["솔이네커피볶는집", "https://naver.me/FPsLxLgF"],
  ["더코티지", "https://naver.me/GNBTiBvs"],
  ["카페 디피드", "https://naver.me/xSnUtFIw"],
];

const loc = {

}

let answers = [];

// 가중치 설정
const weights = {
  0: 0.5,
  1: 3,
  2: 0.5,
  3: 1,
  4: 2.5,
  5: 2,
};

function calResult() {
  console.log(answers)
  // 가장 일치하는 카페들 찾기
  let maxValue = Math.max(...excel[6]);
  let maxMatchCount = [];
  for (let i = 0; i < 12; i++) {
    if (excel[6][i] === maxValue) {
      maxMatchCount.push(i);
    }
  }

  console.log(excel[6]);

  // 필터링 순서에 따른 최종 선택 로직
  const priorityOrder = [1, 5, 4, 3, 2, 0];

  if (maxMatchCount.length >= 3) {
    return maxMatchCount[Math.floor(Math.random() * maxMatchCount.length)];
  } else if (maxMatchCount.length === 2) {
    for (let i of priorityOrder) {
      if (excel[i][maxMatchCount[0]] === excel[i][maxMatchCount[1]]) {
        continue;
      } else if (excel[i][maxMatchCount[0]] === answers[i]) {
        return maxMatchCount[0];
      } else if (excel[i][maxMatchCount[1]] === answers[i]) {
        return maxMatchCount[1];
      } else {
        continue;
      }
    }
  } else {
    return maxMatchCount[0];
  }

  /*let index = 0;
  while (count > 1 && index < priorityOrder.length) {
    const col = priorityOrder[index];
    const filteredMatches = bestMatches.filter(row => row[col] === answers[col]);
    if (filteredMatches.length > 0) {
      bestMatches = filteredMatches;
    }
    index++;
  }*/

  // 최종 매칭된 카페 출력
}

function setResult() {
  let point = shop[calResult()][0];
  console.log(point);
  /*const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;*/

  var resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = "img/" + point + ".jpg";
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  /*const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;*/
}

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  });
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      increaseProgress();
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        // 일치도 계산
        /*rows.forEach(row => {
        row.match_count = 0;
          if (row[qnaList[qIdx].a[0]] === target) {
            row.match_count += weights[qnaList[qIdx].a[0]];
        }
      });*/
      answers[qIdx] = qnaList[qIdx].a[idx].type;

      for (let i = 0; i < 12; i++) {
        if (excel[qIdx][i] === qnaList[qIdx].a[idx].type) {
          excel[6][i] += weights[qIdx];
          console.log(weights[qIdx]);
        }
      }

        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }

  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i = 1; i < qnaList[qIdx].a.length; i++) {
    console.log(i);
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

function increaseProgress() {
  console.log("asdfasdf");
  const progressBar = document.getElementById("progressBar");
  let currentValue = progressBar.value;
  let targetValue = currentValue + 10;

  if (targetValue <= 60) {
    let increment = 0;
    const step = 10 / 100; // 10을 100등분하여 증가 단위를 설정

    const interval = setInterval(() => {
      if (increment < 100) {
        progressBar.value = currentValue + (increment + 1) * step;
        increment += 1;
      } else {
        clearInterval(interval); // 100번 증가하면 반복 종료
      }
    }, 10); // 10ms마다 증가
  }
}

function goMap() {
  window.location.href = shop[calResult()][1];
}
