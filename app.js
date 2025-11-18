let btn = document.querySelector("button");
let main = document.querySelector("main");
const quotes = [
  "Keep moving forward.",
  "Progress starts with action.",
  "Trust your own pace.",
  "Discipline creates true freedom.",
  "Dream big, start small.",
  "Consistency builds real success.",
  "Focus on the goal.",
  "Small steps change everything.",
  "Believe, act, achieve.",
  "Create your own path.",
];

btn.addEventListener("click", function () {
  let x = Math.random() * 80;
  let y = Math.random() * 80;
  let r = Math.random() * 20;
  let s = Math.random() * 2;
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let randomQuote = Math.floor(Math.random() * quotes.length);
  let h1 = document.createElement("h1");
  h1.innerHTML = quotes[randomQuote];
  h1.style.position = "absolute";
  h1.style.top = y + "%";
  h1.style.left = x + "%";
  h1.style.rotate = r + "deg";
  h1.style.scale = s;
  h1.style.color = `rgb(${c1},${c2},${c3})`;
  main.appendChild(h1);
});
