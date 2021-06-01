class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getContestantInfo(){
    //text("I am inside GetContestantInfo.", 200, 200);
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
    
    for (var plr in allContestants) {
      
      var correctAns = '2';
      if (correctAns === allContestants[plr].answer) {
        fill("green");
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 200, 300);
      }
      else {
        fill('red');
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 200, 350);
      }
      
      
    }
  }
}
