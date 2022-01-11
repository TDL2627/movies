// creating a object that contains an array 
let projects = [
    {
      imgURL: "/images/bones.jpeg",
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
      imgURL: "https://picsum.photos/300?random=4",
      title: "My Project Title 2",
      genre: "Romance",
      description: "lorem ipsum Python",
      liveProjectURL: "#"
    },
    {
      imgURL: "https://picsum.photos/300?random=6",
      title: "My Project Title 2",
      genre: "Romance",
      description: "lorem ipsum Python",
      liveProjectURL: "#"
    },
    {
      imgURL: "https://picsum.photos/300?random=7",
      title: "My Project Title 2",
      genre: "Romance",
      description: "lorem ipsum Python",
      liveProjectURL: "#"
    },
    {
      imgURL: "https://picsum.photos/300?random=8",
      title: "My Project Title 45",
      genre: "Action",
      description: "lorem ipsum JS",
      liveProjectURL: "#"
    }
  ];
  
  function createCard(card) {
    let createdCard = `<div class="project-card" genre=${card.genre} >
        <img class="movie-pic" src="${card.imgURL}">
        <h4>${card.title}</h4>
        <h6>${card.genre}</h6>
        <p>${card.description}</p>
        <a class="down-but" href="${card.liveProjectURL}">Download</a>
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
  
  // filter
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
 
  // search
  searchbar = () => {
    var searchedMovie = document.getElementById('search').value.trim();
    try {
      if (!searchedMovie) {
        throw new Error('Nothing was entered in the search bar');
      }
      // Filter all the countries in the array with value typed into the input field
      let moviesFound = projects.filter(project => project.title.toLowerCase().includes(searchedMovie.toLowerCase()));
      if(moviesFound.length === 0) {
        throw new Error('No countries were found');
      }
      project = moviesFound;
    renderCards();
    } catch (err) {
      alert(err.message);
    }
  };