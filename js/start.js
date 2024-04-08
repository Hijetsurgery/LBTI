const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const love = document.querySelector("#love");
const result = document.querySelector("#result");
const stage1 = document.querySelector("#stage1");
const stage2 = document.querySelector("#stage2");
const stage3 = document.querySelector("#stage3");
const stage4 = document.querySelector("#stage4");
const stage7 = document.querySelector("#stage7");
const stage8 = document.querySelector("#stage8");
const after1 = document.querySelector("#after1");
const after2 = document.querySelector("#after2");
const after3 = document.querySelector("#after3");
const after4 = document.querySelector("#after4");
const after5 = document.querySelector("#after5");
const after6 = document.querySelector("#after6");
const after7 = document.querySelector("#after7");
const after8 = document.querySelector("#after8");
const after9 = document.querySelector("#after9");
const after10 = document.querySelector("#after10");

const img0 = document.getElementById("test_id0");
const img1 = document.getElementById("test_id1");
const img2 = document.getElementById("test_id2");
const img3 = document.getElementById("test_id3");
const img4 = document.getElementById("test_id4");
const img5 = document.getElementById("test_id5");
const img6 = document.getElementById("test_id6"); //stage4
const img7 = document.getElementById("test_id7");
const img8 = document.getElementById("test_id8");
let Lovescore = 50;
const endpoint = 10;

const backgrounds = [
  "https://patrick3141592.github.io/img/%EC%8C%8D%ED%95%99.jpg",
  "https://patrick3141592.github.io/img/%EC%BA%A0%EA%B3%B5.jpg",
  "https://patrick3141592.github.io/img/%ED%8F%90%EB%A7%89%EC%A0%9C%EB%A6%AC%EC%98%A4.png",
  "https://patrick3141592.github.io/img/%EC%B4%88%EB%B0%A5%ED%9D%98%EB%A6%B0%EB%A6%AC%EC%98%A4.png",
]; // List of background images

select = [];
stages = [stage1, stage2, stage3, stage4, stage7, stage8];
afters = [
  after1,
  after2,
  after3,
  after4,
  after5,
  after6,
  after7,
  after8,
  after9,
  after10,
];

imgList = ["./img/당황리오.png", "./img/웃음리오.png", "./img/수줍리오.png"];
let currentBackgroundIndex = 0; // Index of the current background image

function Letsgoout(stageNum) {
  var q = document.querySelector(".qBox");
}

function check(stageNum, idx = "") {
  if (Lovescore < 50 && stageNum === 0) {
    img1.src = "./img/경멸리오.png";
    var kkkkk = document.querySelector(".hogamdo2");
    kkkkk.innerHTML = `호감도: ${Lovescore}`;
    love.style.display = "none";
    return;
  } else if (Lovescore >= 50 && stageNum === 0) {
    document.body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;

    // Increment the background index
    currentBackgroundIndex++;

    // If the index exceeds the number of backgrounds, reset it to 0
    if (currentBackgroundIndex === backgrounds.length) {
      currentBackgroundIndex = 0;
    }

    stages[stageNum].style.Webkitanimation = "fadeOut 1s";
    stages[stageNum].style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna.style.Webkitanimation = "fadeIn 0.01s";
      qna.style.animation = "fadeIn 0.01s";
      setTimeout(() => {
        stages[stageNum].style.display = "none";
        qna.style.display = "block";
      }, 450);
    });
    console.log((stageNum + 1) * 3 + 1 / 2);
    goNext((stageNum + 1) * 3 + 1 / 2);
  } else if (Lovescore < 65 && stageNum === 1) {
    img2.src = "./img/리오안읽씹진짜.png";
    var kkkkkk = document.querySelector(".hogamdo3");
    kkkkkk.innerHTML = `호감도: ${Lovescore}`;
    console.log("here");
    love.style.display = "none";
    return;
  } else if (Lovescore >= 65 && stageNum === 1) {
    document.body.style.backgroundImage = `url('${backgrounds[1]}')`;
    stages[stageNum].style.Webkitanimation = "fadeOut 0.5s";
    stages[stageNum].style.animation = "fadeOut 0.5s";
    setTimeout(() => {
      qna.style.Webkitanimation = "fadeIn 0.01s";
      qna.style.animation = "fadeIn 0.01s";
      setTimeout(() => {
        stages[stageNum].style.display = "none";
        qna.style.display = "block";
      }, 450);
    });
    console.log((stageNum + 1) * 3 + 1 / 2);
    goNext((stageNum + 1) * 3 + 1 / 2);
    return;
  } else if (Lovescore < 70 && stageNum === 2) {
    img3.src = "./img/긁적리오.png";
    var kkkkkk = document.querySelector(".hogamdo4");
    kkkkkk.innerHTML = `호감도: ${Lovescore}`;
    love.style.display = "none";
    return;
  } else if (Lovescore >= 70 && stageNum === 2) {
    stages[stageNum].style.Webkitanimation = "fadeOut 1s";
    stages[stageNum].style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna.style.Webkitanimation = "fadeIn 0.01s";
      qna.style.animation = "fadeIn 0.01s";
      setTimeout(() => {
        stages[stageNum].style.display = "none";
        qna.style.display = "block";
      }, 450);
    });

    console.log((stageNum + 1) * 3 + 1 / 2);
    document.body.style.backgroundImage = `url('${backgrounds[2]}')`;
    img5.src = "./img/투명종이.png";
    goNext((stageNum + 1) * 3 + 1 / 2);
  } else if (stageNum === 3 && qnaList[9]["a"][idx]["score"] === 2) {
    if (Lovescore >= 90) {
      console.log("stage4");
      img6.src = "./img/부끄리오.png";
      var kkkkkk = document.querySelector(".hogamdo5");
      kkkkkk.innerHTML = `호감도: ${Lovescore}`;
      love.style.display = "none";
      return;
    } else if (Lovescore < 90) {
      stages[3].style.Webkitanimation = "fadeOut 0.5s";
      stages[3].style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        stages[4].style.Webkitanimation = "fadeIn 0.5s";
        stages[4].style.animation = "fadeIn 0.5s";
        setTimeout(() => {
          stages[3].style.display = "none";
          stages[4].style.display = "block";
        }, 450);
      });
      img7.src = "./img/경멸리오.png";
      var kkkkkkkk = document.querySelector(".hogamdo7");
      kkkkkkkk.innerHTML = `호감도: ${Lovescore}`;
      love.style.display = "none";
      return;
    }
  } else if (stageNum === 3 && qnaList[9]["a"][idx]["score"] === 0) {
    if (Lovescore >= 80) {
      console.log("stage8");
      stages[3].style.Webkitanimation = "fadeOut 0.5s";
      stages[3].style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        stages[5].style.Webkitanimation = "fadeIn 0.5s";
        stages[5].style.animation = "fadeIn 0.5s";
        setTimeout(() => {
          stages[3].style.display = "none";
          stages[5].style.display = "block";
        }, 450);
      });
      img8.src = "./img/우는리오진짜.png";
      var kkk = document.querySelector(".hogamdo8");
      kkk.innerHTML = `호감도: ${Lovescore}`;
      love.style.display = "none";
      return;
    } else if (Lovescore < 80) {
      console.log("stage4");
      img6.src = "./img/부끄리오.png";
      var kkkkkk = document.querySelector(".hogamdo5");
      kkkkkk.innerHTML = `호감도: ${Lovescore}`;
      love.style.display = "none";
      return;
    }
  }
}

function goStage(stageNum, idx = "") {
  const stage = stages[stageNum];
  qna.style.Webkitanimation = "fadeOut 0.5s";
  qna.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    stage.style.Webkitanimation = "fadeIn 0.5s";
    stage.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      qna.style.display = "none";
      stage.style.display = "block";
    }, 450);
  });
  check(stageNum, idx);
}

function setResult() {
  return;
}

function goResult() {
  qna.style.Webkitanimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";

  love.style.Webkitanimation = "fadeOut 1s";
  love.style.animation = "fadeOut 1s";

  setTimeout(() => {
    result.style.Webkitanimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      love.style.display = "none";
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
  answer.classList.add("py-2");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");

      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = " fadeOutAndStayTransparent 3.3s";
        children[i].style.animation = " fadeOutAndStayTransparent 3.3s";
      }

      var score = document.querySelector(".ls");
      Lovescore += 5 * (qnaList[qIdx]["a"][idx]["score"] - 1);
      score.innerHTML = Lovescore;
      img5.src = imgList[qnaList[qIdx]["a"][idx]["score"]];
      setTimeout(() => {
        select[qIdx] = idx;
        console.log(afterList[qIdx][qnaList[qIdx]["a"][idx]["score"]]);
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
      }, 2999);
      var q = document.querySelector(".qBox");
      if (qIdx === 9) {
        goNext(10, idx);
        return;
      }
      q.innerHTML = afterList[qIdx][qnaList[qIdx]["a"][idx]["score"]];

      setTimeout(() => {
        if (qIdx === 2) {
          img5.src = "./img/그냥리오.png";
          q.style.backgroundColor = "rgb(231, 186, 253)";
          q.innerHTML =
            "오늘부터 축제한다는데, 나랑 샤운드 오브 뮤직 공연 보러 갈래?";
          setTimeout(() => {
            if (Lovescore >= 50) {
              q.style.backgroundColor = "rgb(255, 179, 204)";
              img5.src = "./img/수줍리오.png";
              q.innerHTML = "그래! 좋아!!";
            } else {
              q.style.backgroundColor = "rgb(255, 179, 204)";
              img5.src = "./img/난처리오.png";
              q.innerHTML = "미안.. 나 집에 가고 싶어..";
            }
          }, 3000);

          setTimeout(() => {
            q.style.backgroundColor = "rgb(255, 179, 204)";
            goNext(++qIdx);
          }, 5999);
          return;
        } else if (qIdx === 5) {
          q.style.backgroundColor = "rgb(231, 186, 253)";
          q.innerHTML =
            "어느덧 해가 지고, 리오와 헤어진 후 집에 도착했다. \n 문득 리오가 생각나고, 용기를 내 카톡을 보내보기로 한다.";
          setTimeout(() => {
            if (Lovescore >= 65) {
              q.style.backgroundColor = "transparent";
              img5.style.height = "360px";
              img5.src = "./img/리오카톡성공.jpg";
              q.innerHTML = " ";
            } else {
              q.style.backgroundColor = "transparent";
              img5.style.height = "360px";
              img5.src = "./img/리오안읽씹진짜.png";
              q.innerHTML = " ";
            }
          }, 3000);

          setTimeout(() => {
            q.style.backgroundColor = "rgb(255, 179, 204)";
            img5.style.height = "300px";
            goNext(++qIdx);
          }, 6999);
          return;
        } else if (qIdx === 3) {
          q.style.backgroundColor = "rgb(231, 186, 253)";
          q.innerHTML =
            "맛있는 불초밥이다! 흰 옷을 입은 리오, \n 팔 옆에 소스를 흘린다. 닦아주려고 하는데.. ";
          setTimeout(() => {
            q.style.backgroundColor = "rgb(255, 179, 204)";
            goNext(++qIdx);
            return;
          }, 3500);
        } else {
          q.style.backgroundColor = "rgb(255, 179, 204)";
          goNext(++qIdx);
          return;
        }
      }, 3000);
    },
    false
  );
}

function goNext(qIdx, idx = "") {
  if (qIdx === endpoint) {
    goStage(3, idx);
    return;
  } else if (qIdx % 3 === 0 && qIdx != 0) {
    Letsgoout(qIdx / 3 - 1);
    goStage(qIdx / 3 - 1);
    return;
  } else if (2 * qIdx === 7) {
    qIdx = qIdx - 1 / 2;
  } else if (2 * qIdx === 13) {
    qIdx = qIdx - 1 / 2;
  } else if (2 * qIdx === 19) {
    qIdx = qIdx - 1 / 2;
  }

  var score = document.querySelector(".ls");
  score.innerHTML = Lovescore;

  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  if (qIdx === 8) {
    img5.src = "./img/부끄리오.png";
  } else if (qIdx === 9) {
    img5.src = "./img/투명종이.png";
  } else if (qIdx === 2) {
    img5.src = "./img/궁금리오.png";
  } else if (qIdx === 0) {
    img5.src = "./img/웃음리오.png";
  } else if (qIdx === 3) {
    img5.src = "./img/배고파리오.png";
  } else {
    img5.src = "./img/그냥리오.png";
  }
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
}

function begin() {
  //소개팅 장면이란 걸 언급해주어야 할 것 같아서, main -> qna로 넘어가기 전에 stage0.css로 넘어가려합니당 그리고 5초정도 interval 두고 넘어갈 것 같아요
  main.style.Webkitanimation = "fadeOut 2s";
  main.style.animation = "fadeOut 2s";
  setTimeout(() => {
    stage6.style.Webkitanimation = "fadeIn 2s";
    stage6.style.animation = "fadeIn 2s";

    setTimeout(() => {
      document.body.style.backgroundImage = `url('https://patrick3141592.github.io/img/%EC%9E%90%ED%95%98%EC%97%B0.jpg')`;
      stage6.style.display = "block";
      setTimeout(() => {
        main.style.display = "none";
      }, 100);
    }, 1500);
  });
  setTimeout(() => {
    stage6.style.Webkitanimation = "fadeOut 2s";
    stage6.style.animation = "fadeOut 2s";
    setTimeout(() => {
      stage0.style.Webkitanimation = "fadeIn 2s";
      stage0.style.animation = "fadeIn 2s";

      setTimeout(() => {
        document.body.style.backgroundImage = `url('https://patrick3141592.github.io/img/%EC%9E%90%ED%95%98%EC%97%B0.jpg')`;
        stage0.style.display = "block";
        stage6.style.display = "none";
      }, 1500);
    });

    setTimeout(() => {
      stage0.style.Webkitanimation = "fadeOut 1s";
      stage0.style.animation = "fadeOut 1s";

      setTimeout(() => {
        qna.style.Webkitanimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";

        love.style.WebkitAnimation = "fadeIn 1s";
        love.style.animation = "fadeIn 1s";

        setTimeout(() => {
          stage0.style.display = "none";
          qna.style.display = "block";
          love.style.display = "block";
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
      }, 450);
    }, 7000);
  }, 7000);
}

function saveName() {
  var save = document.getElementById("nameinput").value;
  var prt = document.getElementById("name");
}

//window.beginn = beginn();
