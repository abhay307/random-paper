const users = [
  {
    image: "https://m.media-amazon.com/images/M/MV5BNzA2OTg5MDE2Ml5BMl5BanBnXkFtZTgwMzI0MTAwNzE@._V1_.jpg",
    name: "John Carter",
    position: "Senior Frontend Developer",
    description: "Expert in React, UI architecture, and performance optimization."
  },
  {
    image: "https://swimswam.com/wp-content/uploads/2023/08/366978470_969062851019460_3317365628067497678_n.jpg",
    name: "Emily Thompson",
    position: "UI/UX Designer",
    description: "Creates intuitive and visually stunning user experiences."
  },
  {
    image: "https://staticc.sportskeeda.com/editor/2023/05/2991b-16839198426555-1920.jpg",
    name: "Michael Harris",
    position: "Full Stack Developer",
    description: "Builds scalable backend systems and seamless frontend flows."
  },
  {
    image: "https://framerusercontent.com/images/ILiJVdbpGwcv26LHWlZBFATw0g.jpg",
    name: "Sophia Martinez",
    position: "Product Manager",
    description: "Ensures product direction aligns with user needs and business goals."
  },
];


let main = document.querySelector('main')
let sum = ''
users.forEach(element => {
  sum = sum + `<div class="card">
				<img src= ${element.image} alt="">
				<h1>${element.name}</h1>
				<h2>${element.position}</h2>
				<p>${element.description}</p>
				<button>Follow</button>
			</div>`
});
main.innerHTML = sum