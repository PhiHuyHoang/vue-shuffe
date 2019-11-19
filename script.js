new Vue({
  el: '#app',
  data: {
    ranks: ['I', 'THOUGHT', 'WE', 'HAD', 'A', 'VIBE'],
    suits: ['♥','♦','♠','♣'],
    cards: [],
    suitColor: {
      '♠': 'black',
      '♣': 'black',
      '♦': 'red',
      '♥': 'red',
    },
    shuffleSpeed: 'shuffleMedium',
    shuffleTypes: ['Slow', 'Medium', 'Fast'],
    isDeckShuffled: false,
    shuffleCount: 0,
  },
  created() {
    this.displayInitialDeck();
  },  
  methods: {
    displayInitialDeck() {
      let id = 1;
      this.cards = [];

      for( let s = 0; s < this.suits.length; s++ ) {
        for( let r = 0; r < this.ranks.length; r++ ) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s]
          }
          this.cards.push(card);
          id++;
        }
      }

      this.isDeckShuffled = false;
      this.shuffleCount = 0;
    },
    shuffleDeck() {        
      for(let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        
        let temp = this.cards[i];
        Vue.set(this.cards, i, this.cards[randomIndex]);
        Vue.set(this.cards, randomIndex, temp);
      }

      this.isDeckShuffled = true;
      this.shuffleCount = this.shuffleCount + 1;
    }
  },
});