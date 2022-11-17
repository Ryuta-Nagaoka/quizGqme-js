const startBtn = document.getElementById('startBtn');
const wrapper = document.getElementById('wrapper');
const start = document.getElementById("start");


startBtn.addEventListener('click', ()　=> {
  start.classList.add('setGame'); 
  wrapper.classList.remove('quizGame');
});

const quiz = [
  {
    question: "第1問 大人気漫画「ワンピース」に登場するキャラクター「サンジ」は当初は違う名前になる予定だったそうです。予定ではどんな名前だったでしょうか？",
    answers: [
    "サン",
    "マリオ",
    "ルフィ",
    "ナルト"
    ],
    correct: "ナルト"
  },{
    question: "第2問　幸せを運んでくれるという四つ葉のクローバー。これまでに見つかったクローバーのうち、一番たくさんの葉があったクローバーはいったい何枚だったでしょうか？",
    answers: [
    "12枚",
    "24枚",
    "38枚",
    "56枚"
    ],
    correct: "56枚"
  },{
    question: "第3問　ドラえもんの秘密道具のうち一番値段の高いものはどれでしょう？",
    answers: [
    "どこでもドア",
    "タイムマシン",
    "タケコプター",
    "もしもボックス"
    ],
    correct: "タイムマシン"
  },{
    question: "第4問　手紙を送る時に封筒などに貼り付ける切手。切手は舐めると甘味を感じますが、どれぐらいのカロリーを摂取することになるでしょうか？",
    answers: [
    "0キロカロリー",
    "2キロカロリー",
    "4キロカロリー",
    "8キロカロリー"
    ],
    correct: "2キロカロリー"
  },{
    question: "第5問　この世で最も怖いものとして、「地震・雷・火事・おやじ」という言葉があります。この「おやじ」とは何のことでしょうか？",
    answers: [
    "親父（お父さん）",
    "おじや（雑炊）",
    "じゃじゃ馬",
    "おおやまじ（強い風）"
    ],
    correct: "おおやまじ（強い風）"
  },{
    question: "第6問「学ラン」の「ラン」とはなんでしょうか？",
    answers: [
    "オランダ",
    "花のラン",
    "フランス",
    "ランダム"
    ],
    correct: "オランダ"
  },{
    question: "第7問　アンパンマンに登場するジャムおじさんとバタコさんですが、正体は次のうちどれでしょう？",
    answers: [
    "妖精",
    "パン",
    "動物",
    "人間"
    ],
    correct: "妖精"
  },
];

const modalCorrect = [
  {
    answer: "答え：ナルト",
    explanation: "サンジは、当初はナルトという名前になる予定だったそうです。しかし、初登場させる回が掲載されるよりも前に同じく大人気漫画となった「NARUTO」の連載が開始されました。名前が被ってしまうということから、現在の名前に変更されたそうです。"
  },{
    answer: "答え：56枚",
    explanation: "これまでに見つかったクローバーには、56枚も葉があるものが見つかっています。2009年に日本の岩手県花巻市に住む男性が自宅の庭で発見しました。"
  },{
    answer: "答え：タイムマシン",
    explanation: "値段はそれぞれ、タケコプター：15万円、もしもボックス：62万円、どこでもドア：64万円、タイムマシン：120万円です。ちなみに、ドラえもん本体は20万円だそうです。意外と安いですね。"
  },{
    answer: "答え：2キロカロリー",
    explanation: "切手1枚でおよそ2キロカロリーになると言われています。ちなみに、ご飯1膳普通盛り（140g）は235キロカロリー、食パン1枚は177キロカロリー、コーヒー1杯は7キロカロリーです。"
  },{
    answer: "答え：おおやまじ（強い風）",
    explanation: "「地震・雷・火事・おやじ」の「おやじ」は、大山嵐（おおやまじ）のことです。大山嵐は今で言う台風のことですね。"
  },{
    answer: "答え：オランダ",
    explanation: "「学ラン」の「ラン」は、オランダのことです。江戸時代、日本は鎖国をしていましたがその頃から例外的に貿易が行われていた国こそがオランダです。当時の日本に入って来ていた洋服はオランダから来たものであり、「欄服（らんふく）」と呼ばれていました。つまり、「学生用の欄服」が「学ラン」の名の由来と言えます。"
  },{
    answer: "答え：妖精",
    explanation: "おどろくことに、ジャムおじさんとバタコさんは人間ではないそう。人間の姿をしているが、二人は妖精であるとアンパンマンの公式サイトに書かれています。アンパンマンワールドは人間が存在しないファンタジーな世界だということです。"
  },
];

let score = 0;

const quizLength = quiz.length;
let quizIndex = 0;

const modalCorrectLength = modalCorrect.length;
let correctIndex = 0;
let explanationIndex = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// 回答のモーダル表示　変数定義
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');
const close2 = document.getElementById('close2');
const modal2 = document.getElementById('modal2');
const mask2 = document.getElementById('mask2');
const toTop = document.getElementById('toTop');


// HTMLに回答を表示
// const setupCorrect = () => {
//   const modalCorrectLength = modalCorrect.length;
//   let correctIndex = 0;
//   while(correctIndex < modalCorrectLength){
//     document.getElementById("correctTtl").textContent = modalCorrect[correctIndex].answer;
//     correctIndex++;
//   }
// };

 

// const setupExplanation = () => {
//   document.getElementsByTagName("explanation").textContent = modalCorrect[explanationIndex].explanation;
//   while(explanationIndex < modalCorrectLength){
//     explanationIndex++;
//   }
// };


//HTMLに文字列を反映させクイズの問題、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < $button.length) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
// 問題関数呼び出し
setupQuiz();

// setupExplanation();

// ボタンクリックで正誤判定 関数定義
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    modal2.classList.remove('hidden');
    mask2.classList.remove('hidden');
    document.getElementById('result').textContent = '⭕️正解!';
    score++;
  } else {
    modal2.classList.remove('hidden');
    mask2.classList.remove('hidden');
    document.getElementById('result').textContent = '×不正解!';

  }
  close2.addEventListener('click', ()　=> {
    modal2.classList.add('hidden');
    mask2.classList.add('hidden');

    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
    close.addEventListener('click', ()　=> {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  quizIndex++;
  correctIndex++;
  explanationIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
    
  } else {
      close.addEventListener('click', ()　=> {
      // modal.classList.add('hidden');
      // mask.classList.add('hidden');
      
      // 正解数の結果を表示
      modal2.classList.remove('hidden');
      mask2.classList.remove('hidden');
      close2.classList.add('close2');
      toTop.classList.remove('toTop');
      document.getElementById('result').textContent = quizLength + '問中' + score + '問正解!';
    });
      toTop.addEventListener('click', ()　=> {
      modal2.classList.add('hidden');
      mask2.classList.add('hidden');

      window.location.reload();
    });
  }
  
};


// ボタンクリックで正誤判定
let handleIndex = 0;
while(handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    document.getElementById("correctTtl").textContent = modalCorrect[correctIndex].answer;
    document.getElementById("explanation").textContent = modalCorrect[explanationIndex].explanation;
    clickHandler(e);
  });
  handleIndex++;
}

