/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

// Add filter for genre + sort for author, year and rating
const books = [
  {
    title: 'Babetta',
    author: 'Nina Wähä',
    year: 2022,
    genre: 'fiction',
    rating: 3.9,
    description:
      'A cinematic novel about loneliness, eeriness, our inability to connect, and our desire to simultaneously merge with each other.',
    image: './books-images/babetta.jpeg'
  },
  {
    title: 'The Copenhagen Trilogy',
    author: 'Tove Ditlevsen',
    year: 1971,
    genre: 'fiction',
    rating: 4.5,
    description:
      "A portrayal of love, friendship, art, ambition and the terrible lure of addiction, from one of Denmark's most celebrated twentieth-century writers",
    image: './books-images/thecopenhagentrilogy.jpeg'
  },
  {
    title: 'Den högsta kasten',
    author: 'Carina Rydberg',
    year: 1997,
    genre: 'fiction',
    rating: 4.4,
    description:
      'A book about obsession, betrayal, and revenge, and also a depiction of the morals of nighttime Stockholm.',
    image: './books-images/den högsta kasten.jpeg'
  },
  {
    title: 'My Brilliant Friend',
    author: 'Elena Ferrante',
    year: 2011,
    genre: 'fiction',
    rating: 4.5,
    description:
      'A story of violence: domestic and cultural, physical and emotional. A novel about two young girls exploring friendship and adolescence.',
    image: './books-images/my brilliant friend.jpeg'
  },
  {
    title: 'Frankenstein',
    author: 'J.D. Salinger',
    year: 1818,
    genre: 'horror',
    rating: 4.5,
    description:
      'The classic gothic horror novel which has thrilled and engrossed readers for two centuries.',
    image: './books-images/frankenstein.jpeg'
  },
  {
    title: 'Allegro Pastell',
    author: 'Leif Randt',
    year: 2023,
    genre: 'fiction',
    rating: 3.5,
    description:
      'A novel about an almost ordinary love and its transformations, reality and badminton, ideal relationships, happiness, politics, and what it means to be true to oneself."',
    image: './books-images/allegro_pastell.jpeg'
  },
  {
    title: 'A little life',
    author: 'Hanya Yanagihara',
    year: 2015,
    genre: 'fiction',
    rating: 4.8,
    description:
      "A powerful, disturbing novel. It's full of pain, desperation, and a sense of isolating sadness.",
    image: './books-images/a-little-life.jpeg'
  },
  {
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    year: 2001,
    genre: 'fiction',
    rating: 4.0,
    description:
      'An intensely understated love story, simultaneously erotic and innocent, as straightforward and complex as love itself.',
    image: './books-images/norwegian-wood.jpeg'
  },
  {
    title: 'Just Kids',
    author: 'Patti Smith',
    year: 2010,
    genre: 'memoir',
    rating: 5.0,
    description:
      "Explores Patti Smith's life from youth through adulthood, hinting at her imaginative childhood and productive artistic life up to the present moment.",
    image: './books-images/just-kids.jpeg'
  },
  {
    title: 'Annie John',
    author: 'Jamaica Kincaid',
    year: 2016,
    genre: 'fiction',
    rating: 4.8,
    description:
      "A beautiful, poignant, and unsparing tale of a young girl's coming of age, the struggle to find and understand oneself, and how love and hatred can be just a small step apart.",
    image: './books-images/anniejohn.jpeg'
  },
  {
    title: 'Conversations with friends',
    author: 'Sally Rooney',
    year: 2017,
    genre: 'fiction',
    rating: 3.0,
    description:
      "A sharply intelligent novel about two college students and the strange, unexpected connection they forge with a married couple.",
    image: './books-images/conversations-with-friends.jpeg'
  },
  {
    title: 'Circe',
    author: 'Madeline Miller',
    year: 2018,
    genre: 'fantasy',
    rating: 4.9,
    description:
      "A novel that explores Circe's origin story and narrates Circe's encounters with mythological figures.",
    image: './books-images/circe.jpeg'
  }
]

const container = document.getElementById("container");
const filterDropDown = document.getElementById("filterDropDown");
const sortAuthorsButton = document.getElementById("sortAuthorsButton");
const sortYearButton = document.getElementById("sortYearButton");
const sortRatingButton = document.getElementById("sortRatingButton");

let sortDirection = "asc";
let sortCriteria = "author"; 

const loadBooks = (bookArray) => {
  container.innerHTML = "";

  bookArray.forEach((book) => {
    container.innerHTML += `
    <div class = "card">
      <h2>${book.title}</h2>
      <img src="${book.image}" alt="${book.title}" />
      <p>${book.author}</p>
      <p>${book.year}</p>
      <p>${book.genre}</p>
      <p>${book.rating}</p>
      <p>${book.description}</p>
    </div>
      `;
  });
};

const filterBooks = () => {
  const value = filterDropDown.value;
  if (value === "all") {
    loadBooks(books);
  } else {
    const filteredList = books.filter((book) => book.genre === value);
    loadBooks(filteredList);
  }
}

const sortBooks = () => {
  if (sortDirection === "asc") {
    if (sortCriteria === "author") {
      books.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortCriteria === "year") {
      books.sort((a, b) => a.year - b.year);
    } else if (sortCriteria === "rating") {
      books.sort((a, b) => b.rating - a.rating);
    }

    sortDirection = "desc";
  } else {
    if (sortCriteria === "author") {
      books.sort((a, b) => b.author.localeCompare(a.author));
    } else if (sortCriteria === "year") {
      books.sort((a, b) => b.year - a.year);
    } else if (sortCriteria === "rating") {
      books.sort((a, b) => a.rating - b.rating);
    }

    sortDirection = "asc";
  }
  
loadBooks (books);
 
};

filterDropDown.addEventListener("change", filterBooks);
sortAuthorsButton.addEventListener("click", () => {
  sortCriteria = "author";
  sortBooks();
  sortAuthorsButton.textContent = `Author ${sortDirection === "asc" ? "A-Z" : "Z-A"}`;
});
sortYearButton.addEventListener("click", () => {
  sortCriteria = "year";
  sortBooks();
  sortYearButton.textContent = `Year ${sortDirection === "asc" ? "(Newest to Oldest)" : "(Oldest to Newest)"}`;
});
sortRatingButton.addEventListener("click", () => {
  sortCriteria = "rating";
  sortBooks();
  sortRatingButton.textContent = `Rating ${sortDirection === "asc" ? "(Highest to Lowest)" : "(Lowest to Highest)"}`;
});

loadBooks (books);


