class Quiz {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play() {
    question.hide();
    background("yellow");
    textSize(50);
    fill("black");
    text('Quiz Results', 220, 70);
    Contestant.getContestantInfo();
    if (allContestants !== undefined) {
      fill("blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!", 130, 230);
      }
    }
  }
  
  