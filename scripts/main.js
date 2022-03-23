window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})

// document.getElementById("cardHand").onclick = function() {
//   document.getElementById("cardHand").style.visibility = "visible";
// }



let images = ["2_of_clubs.png", "3_of_clubs.png","4_of_clubs.png","5_of_clubs.png", "6_of_clubs.png", "7_of_clubs.png","8_of_clubs.png","9_of_clubs.png", "10_of_clubs.png", "jack_of_clubs.png", "queen_of_clubs.png", "king_of_clubs.png", "ace_of_clubs.png", "2_of_diamonds.png",
"2_of_diamonds.png", "3_of_diamonds.png","4_of_diamonds.png","5_of_diamonds.png", "6_of_diamonds.png", "7_of_diamonds.png","8_of_diamonds.png","9_of_diamonds.png", "10_of_diamonds.png", "jack_of_diamonds.png", "queen_of_diamonds.png", "king_of_diamonds.png", "ace_of_diamonds.png",
"2_of_hearts.png", "3_of_hearts.png","4_of_hearts.png","5_of_hearts.png", "6_of_hearts.png", "7_of_hearts.png","8_of_hearts.png","9_of_hearts.png", "10_of_hearts.png", "jack_of_hearts.png", "queen_of_hearts.png", "king_of_hearts.png", "ace_of_hearts.png",
"2_of_spades.png", "3_of_spades.png","4_of_spades.png","5_of_spades.png", "6_of_spades.png", "7_of_spades.png","8_of_spades.png","9_of_spades.png", "10_of_spades.png", "jack_of_spades.png", "queen_of_spades.png", "king_of_spades.png", "ace_of_spades.png",
]

// function dealCards () {
  // let card = document.createElement("images");
//   let dealerOrPlayer = "dealer";
//   const dealer = document.getElementById("dealerHand");
//   const player = document.getElementById("playerHand");
//   for (let index = 0; index < 4; index ++ ) {
//     const card = document.createElement("images");
//     card.src = "/images"
//     card.height = 130;
//     card.width = 90;
//     console.log(index);
//     if (dealerOrPlayer == "dealer"){
//       console.log ('dealer')
//       dealer.appendChild(card);
//     } else {
//       console.log ('player')
//       player.appendChild(card);
//     }
//     if (index == 1) {
//       dealerOrPlayer = "player"
//       };
//     }
//   }

//  <script>
//   function dealCardss() {
//     const card = document.getElementById ("images").lastElementChild;
//     document.getElementById("myList1");
//   }
//   </script> */

// let ranks = ['1','2','3','4','5','6','7,'8', '9']
// let suits = []

  // let card = document.createElement("images");
   function cards() {
     const card = document.getElementById("images").lastElementChild;
     document.getElementById("myList1");
   }


  document.addEventListener('DOMContentLoaded', function() {
    console.log("Test")
    const deal_button = document.getElementById('deal-button');
    const dealer = document.getElementById("dealer-hand");
    const player = document.getElementById("player-hand");
    const hit_button = document.getElementById('hit-button');
      deal_button.addEventListener("click", function(doSomething) {
        let dealerOrPlayer = "dealer";
        //const dealer = document.getElementById("dealer-hand");
        //const player = document.getElementById("player-hand");
          for (let index = 0;index < 4 ; index++) {
            let card = document.createElement("img");
            card.src = "images/2_of_clubs.png";
          if (dealerOrPlayer == "dealer" ) {
              dealer.appendChild(card);
          } else {
              player.appendChild(card);
          }
          if(index == 1) {
             dealerOrPlayer = "player";
          }
          }
      })
      // adds function to the hit button
      hit_button.addEventListener("click", function() {
      let dealerOrPlayer = "dealer";
        for (let index = 0; index < 2;index++) {
          let card = document.createElement("img");
          card.src = "images/2_of_clubs.png";
          if (index == 0 ) {
            dealer.appendChild(card);
        } else {
            player.appendChild(card);
        }
        }
      })
      //Create a function buildDeck returns a new array with 52 card objects.
      //There are 4 suits: diamonds, clubs, hearts and spades.
      //For each suit there is a rank from 1 to 13.
    function buildDeck () {
      let ranks = ['1','2','3','4','5','6','7','8','9','10','11','12','13']; //13
      let suits = ['diamonds','clubs','hearts','spades']; //4
      //13 * 4 = 52
      let deck = [];
      dealerHand = [];
      playerHand = [];
      for (let index = 0 ; index < 13; index++) {
        //console.log(ranks[index])
          for (let suits_index = 0; suits_index < 4; suits_index++) {
          //console.log(suits[suits_index])
          let newCard = (`rank :${ranks[index]}, suit:${suits[suits_index]}`) // makes a list of 52 items
           //console.log(newCard);
          }
      }
  } // build deck function
    //buildDeck(); //calls the build deck function when the window is refreshed
    deal_button.addEventListener("click", function() {
      buildDeck();
      //let newCard = [];
      dealerHand = [];
      playerHand = [];
        for (let i = 0; i < newCard.length - 1; i++){
              newCard.splice(i, 1);
          }
          console.log(newCard);
    })
  }) // window function
