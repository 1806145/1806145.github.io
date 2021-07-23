const quiz = [{
  question: "１９６６年の干支は何でしょう？",
  answers: ["乙亥", "丙午", "甲子", "癸酉"],
  correct: "丙午"
}, {
  question: "日中戦争がはじまったのは何年？",
  answers: ["１９３７年", "１９３８年", "１９３９年", "１９４１年"],
  correct: "１９３７年"
}, {
  question: "日本が世界大戦で降伏した際に、アメリカより派遣された連合国軍最高司令官は誰？",
  answers: ["チャーチル", "ルーズベルト", "マッカーサー", "マイケル"],
  correct: "マッカーサー"
}, {
  question: "敗戦後の日本において、吉田茂首相が進めた経済復興優先・軽軍備という考えは通称何と呼ばれているか？",
  answers: ["吉田マッカーサー", "吉田ドクトリン", "吉田共産主義", "吉田ドッジライン"],
  correct: "吉田ドクトリン"
}
];



const quizLength = quiz.length;
let quizroop = 0;
let result = 0;



const button = document.getElementsByTagName("button");

const quizset = () => {
  document.getElementById("js-question").textContent = quiz[quizroop].question;
  let buttonroop = 0;
  let buttonLength = button.length;
  while (buttonroop < buttonLength) {
    button[buttonroop].textContent = quiz[quizroop].answers[buttonroop];
    buttonroop++;
  }
}
quizset();

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (quiz[quizroop].correct === button[0].textContent) {
    window.alert("正解！");
    result++;
  } else {
    window.alert("不正解！");
  }
  quizroop++;

  if (quizroop < quizLength) {
    quizset();
  } else {
    window.alert("終了！！お疲れ様でした。あなたの正解数は"+ result + "/" + quizLength + "でした！")
  }

});
document.getElementsByTagName("button")[1].addEventListener("click", () => {
  if (quiz[quizroop].correct === button[1].textContent) {
    window.alert("正解！");
    result++;
  } else {
    window.alert("不正解！");
  }
  quizroop++;
  
  if (quizroop < quizLength) {
    quizset();
  } else {
    window.alert("終了！！お疲れ様でした。あなたの正解数は"+ result + "/" + quizLength + "でした！")
  }
});

document.getElementsByTagName("button")[2].addEventListener("click", () => {
  if (quiz[quizroop].correct === button[2].textContent) {
    window.alert("正解！");
    result++;
  } else {
    window.alert("不正解！");
  }
  quizroop++;
  
  if (quizroop < quizLength) {
    quizset();
  } else {
    window.alert("終了！！お疲れ様でした。あなたの正解数は"+ result + "/" + quizLength + "でした！")
  }
});

document.getElementsByTagName("button")[3].addEventListener("click", () => {
  if (quiz[quizroop].correct === button[3].textContent) {
    window.alert("正解！");
    result++;
  } else {
    window.alert("不正解！");
  }
  quizroop++;
  
  if (quizroop < quizLength) {
    quizset();
  } else {
    window.alert("終了！！お疲れ様でした。あなたの正解数は"+ result + "/" + quizLength + "でした！")
  }
});
