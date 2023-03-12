class QuoteGenerator {
  constructor(quoteDiv) {
    this.quoteDiv = quoteDiv;
    this.clear();
  }

  clear() {
    this.quoteDiv.innerText = "";
  }

  randomIndexFrom(arr) {
    const min = 0;
    const max = arr.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  insertQuote(randomQuote) {
    setTimeout(() => {
      this.quoteDiv.innerText = `" ${randomQuote} "`;
    }, 1000);
  }

  // Using the transition effect with opacity, first adding, then removing the "opacity: 0" property.
  fade() {
    const classArray = this.quoteDiv.classList;
    classArray.remove("hidden");
    classArray.add("opacity-0");
    setTimeout(() => {
      classArray.toggle("opacity-0");
    }, 1000);
  }
}

const quotes = [
  "To stand up straight with your shoulders back is to accept the terrible responsibility of life, with eyes wide open. It means deciding to voluntarily transform the chaos of potential into the realities of habitable order.",
  "To be able to communicate complicated ideas, you have to be able to think them, and that's not easy.",
  "The purpose of life is finding the largest burden that you can bear and bearing it.",
  "Compare yourself to who you were yesterday, not to who someone else is today.",
  "You must determine where you are going in your life, because you cannot get there unless you move in that direction. Random wandering will not move you forward.",
  "The competent resent the incompetent and the incompetent resent the competent.",
  "Ideologies are substitutes for true knowledge, and ideologues are always dangerous when they come to power, because a simple-minded I-know-it-all approach is no match for the complexity of existence.",
  "The purpose of life is not happiness but rather meaning.",
  "There is no faith and no courage and no sacrifice in doing what is expedient.",
  "Religion is the earliest form of psychology and it contains a deep understanding of the structure of the human being.",
  "When you have something to say, silence is a lie.",
  "The truth is something that burns. It burns off dead wood. And people don't like having their dead wood burnt off often because they're 95 percent dead wood.",
  "You don't get to choose not to pay a price, you only get to choose which price you pay.",
  "Responsibility is what gives life meaning.",
  "If you're going to be successful, you're going to be successful in very strange and specific ways that are unique to you.",
  "If you don't say what you think then you kill your unborn self.",
  "The only way to see reality is to understand the metaphorical nature of everything perceptual.",
  "Treat yourself as if you were someone you are responsible for helping.",
  "To be well adjusted in a pathological society is to be out of touch with reality.",
  "Life is suffering. It's partly because of this that there's such a thing as compassion. We all suffer and we can all help.",
  "If you think tough men are dangerous, wait until you see what weak men are capable of.",
  "You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose to not pay a price.",
  "You should never sacrifice what you could be for what you are.",
  "Love is a form of work. It requires self-discipline and an ability to persevere through temporary difficulty.",
  "If you're making mistakes it means you're out there doing something.",
  "What you aim at determines what you see.",
  "The more expansive and important the goal, the more your problems will define themselves.",
  "The way that you make people resilient is by voluntarily exposing them to things that they are afraid of and that makes them uncomfortable.",
  "The purpose of the future is to provide a place for our dreams.",
  "You can only find out what you actually believe (rather than what you think you believe) by watching how you act. You simply don’t know what you believe, before that.",
];
const quoteDiv = document.querySelector("[quoteArea]");
const button = document.querySelector("[generatorBtn]");
const quoteGenerator = new QuoteGenerator(quoteDiv);

button.addEventListener("click", () => {
  const randomIndex = quoteGenerator.randomIndexFrom(quotes);
  const randomQuote = quotes[randomIndex];
  quoteGenerator.fade();
  quoteGenerator.insertQuote(randomQuote);
});
