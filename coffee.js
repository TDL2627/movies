let projects = [
    {
      imgURL: "/images/swegga.jpg",
      title: "Mr Bones",
      genre: "Comedy",
      description: "A funny white african man",
      liveProjectURL: "#"
    },
    {
      imgURL: "https://picsum.photos/300?random=2",
      title: "My Project Title 2",
      genre: "Romance",
      description: "lorem ipsum Python",
      liveProjectURL: "#"
    },
    {
      imgURL: "https://picsum.photos/300?random=3",
      title: "My Project Title 45",
      genre: "Action",
      description: "lorem ipsum JS",
      liveProjectURL: "#"
    }
  ];
  
  function createCard(card) {
    let createdCard = `<div class="project-card" genre=${card.genre} >
        <img src="${card.imgURL}">
        <h4>${card.title}</h4>
        <h6>${card.genre}</h6>
        <p>${card.description}</p>
        <a href="${card.liveProjectURL}">Live</a>
      </div>
    `;
    return createdCard;
  }
  
  function renderCards() {
    let projectContainer = document.querySelector(".project-container");
    for (project of projects) {
      let card = createCard(project);
      projectContainer.innerHTML += card;
    }
  }
  
  renderCards();
  
  function filterCards(category) {
    let cards = document.getElementsByClassName("project-card");
  
    if (category === "All") {
      for (card of cards) {
        card.style.display = "block";
      }
      return;
    }
  
    for (card of cards) {
      console.log(card);
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll(`[genre='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
  