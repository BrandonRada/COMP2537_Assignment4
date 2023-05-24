
var maxTime = 200;
const setup = () => {
  let firstCard = undefined
  let secondCard = undefined
  var pairsMatched = 0;
  var amountOfCards = 0;
  var timesClicked = 1;

  var timer;
  var ele = document.getElementById('timer');
  (function () {
    var sec = 0;
    timer = setInterval(()=>{
      ele.innerHTML = '' +sec + " seconds used Out of: " +maxTime + " seconds.";
      sec ++;
      if (sec == maxTime){
        alert("Ran out of Time! Reached Max Time: " + maxTime);

        location.reload();
      }
    }, 1000)
  })()



  const seeCardsButton = document.getElementById("button-see-cards");
  $(seeCardsButton).on(("click"), function () {
    $(".card").toggleClass("flip")
    // $(".card").off("click")
    setTimeout(function() {
      $(".card").toggleClass("flip")
      // $(".card").on("click", clickHandle);
    }, 2000);
  
  })

  $(".card").each(function() {
      amountOfCards++;
 });
 console.log(amountOfCards)
 
  $(".card").on(("click"), function clickHandle () {

    $("#clickCount").text(timesClicked);

    
    
    $("#totalPairsCount").text(amountOfCards/2);

    $(this).toggleClass("flip");
    console.log("clicked");
    timesClicked++;
    
    console.log(firstCard, secondCard);

    if (!firstCard){
      firstCard = $(this).find(".front_face")[0]
      // $(this).addClass("disabled");
      
      $(`#${firstCard.id}`).parent().off("click")
      console.log(firstCard, secondCard);
    }
    else {
      secondCard = $(this).find(".front_face")[0]
      // $(this).addClass("disabled");
      $(".card").off("click")
      
      console.log(firstCard, secondCard);
      if (firstCard.src == secondCard.src
      ) {

        console.log("match")
        $(`#${firstCard.id}`).parent().off("click")
        $(`#${secondCard.id}`).parent().off("click")
        $(firstCard).parent().addClass("matched")
        $(secondCard).parent().addClass("matched")
        firstCard = undefined;
        secondCard = undefined;
      } else {
        console.log("no match")
        console.log($(`#${firstCard.id}`))
        $(firstCard).on("click", clickHandle);
        setTimeout(() => {
          $(`#${firstCard.id}`).parent().toggleClass("flip")
          $(`#${secondCard.id}`).parent().toggleClass("flip")
          
          firstCard = undefined
          secondCard = undefined
          console.log(firstCard, secondCard);
        }, 1000)
      }
      
      $(".card").each(function() {
        
        if ($(this).hasClass("matched")) {
          pairsMatched += 1;
          // console.log("This card is matched:", this, pairsMatched);
        } else {
          $(this).on("click", clickHandle);
          // console.log("This card is not matched:", this);
        }
      });
      var numMatched = 0;
      
      $(".card").each(function() {
        
        if ($(this).hasClass("matched")) {
          numMatched++;
          $("#pairsMatchedCount").text(numMatched/2);
          
        } 
        $("#pairsLeftCount").text((amountOfCards/2) - (numMatched/2));
        if(numMatched == amountOfCards){
        console.log(amountOfCards, numMatched)
        $(".winMessage").append("You Won!");
        clearInterval(timer);
      }
      });
      
      
    }
  });
}

function easy(){
  const gameField = document.getElementById("game_grid")
  gameField.innerHTML = `
  <div class="card">
      <img id="img1" class="front_face" src="001.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img2" class="front_face" src="002.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    
    <div class="card">
      <img id="img3" class="front_face" src="001.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img4" class="front_face" src="002.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    
  `;
  gameField.classList.remove("medium");
  gameField.classList.remove("hardField");
  $(gameField).addClass("easy");
  const easyButton = document.getElementById('button-easy');
  $(easyButton).addClass("active");
  const mediumButton = document.getElementById('button-medium');
  mediumButton.classList.remove("active");
  const hardButton = document.getElementById('button-hard');
  hardButton.classList.remove("active");
  maxTime = 200;
}
function medium(){
  const gameField = document.getElementById("game_grid")
  gameField.innerHTML = `
  <div class="card">
      <img id="img1" class="front_face" src="001.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img2" class="front_face" src="002.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img3" class="front_face" src="003.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img4" class="front_face" src="001.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img5" class="front_face" src="002.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img6" class="front_face" src="003.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
  `;
  gameField.classList.remove("easy");
  gameField.classList.remove("hardField");
  $(gameField).addClass("medium");
  const easyButton = document.getElementById('button-easy');
  easyButton.classList.remove("active");
  const mediumButton = document.getElementById('button-medium');
  $(mediumButton).addClass("active");
  const hardButton = document.getElementById('button-hard');
  hardButton.classList.remove("active");
  maxTime = 200;
}
function hard(){
  const gameField = document.getElementById("game_grid")
  gameField.innerHTML = `
  <div class="card">
      <img id="img1" class="front_face" src="001.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img2" class="front_face" src="002.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img3" class="front_face" src="003.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img4" class="front_face" src="004.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img5" class="front_face" src="001.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img6" class="front_face" src="002.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img7" class="front_face" src="003.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
    <div class="card">
      <img id="img8" class="front_face" src="004.png" alt="">
      <img class="back_face" src="back.webp" alt="">
    </div>
  `;
  gameField.classList.remove("easy");
  gameField.classList.remove("medium");
  $(gameField).addClass("hardField");
  const easyButton = document.getElementById('button-easy');
  easyButton.classList.remove("active");
  const mediumButton = document.getElementById('button-medium');
  mediumButton.classList.remove("active");
  const hardButton = document.getElementById('button-hard');
  $(hardButton).addClass("active");
  maxTime = 15;
}

function light(){
  const element = document.getElementById("body");
  $(element).addClass("light");
  element.classList.remove("dark");
  
  const lightButton = document.getElementById('button-light');
  $(lightButton).addClass("active");
  const darkButton = document.getElementById('button-dark');
  darkButton.classList.remove("active");
}

function dark(){
  const element = document.getElementById("body");
  $(element).addClass("dark");
  element.classList.remove("light");

  const lightButton = document.getElementById('button-light');
  lightButton.classList.remove("active");
  const darkButton = document.getElementById('button-dark');
  $(darkButton).addClass("active");
}



function start(){

  $(document).ready(setup)
}

function reset(){

  location.reload();
}

