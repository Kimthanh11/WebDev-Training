/*
Array method
- forEach()
-  every()
- some()
-find()
-filter()
-map()
-reduce()*/
courses = [
  {
    id: 1,
    name: "PHP",
    coin: 100,
  },
  {
    id: 2,
    name: "SQL",
    coin: 200,
  },
  {
    id: 3,
    name: "HTML",
    coin: 300,
  },
  {
    id: 4,
    name: "Hello",
    coin: 0,
  },
  {
    id: 5,
    name: "js",
    coin: 500,
  },
];

//forEach
courses.forEach(function (course, index) {
  console.log(index, course);
});
//every check all if all true => true
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
});

console.log(isFree); //false
//some check all if one true => true
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
});

console.log(isFree); //true
//find
var course = courses.find(function (course, index) {
  return course.name === "Ruby";
});

console.log(isFree);
//filter
var listCourses = courses.filter(function (course, index) {
  return course.name === "Ruby";
});

console.log(isFree);
//map
function courseHandler(course) {
  //   return {
  //     id: course.id,
  //     name: `Khoa hoc: ${course.name}`,
  //     coin: course.coin,
  //     coinText: `Gia ${course.coin}`,
  //     originArray: course,
  //   };
  console.log(course);
}
var newCourse = courses.map(courseHandler);
//console.log(newCourse);

//reduce
//Sum all coins
var i = 0;
function coinHandler(accumulator, currentValue) {
  //i++;
  //console.log(i, accumulator);
  return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0); //0 is initial value
console.log(totalCoin);

//challenge
var sports = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];
function handleCoins(accumulator, currentValue) {
  return accumulator + currentValue.gold;
}

function getTotalGold(array) {
  return sports.reduce(handleCoins, 0);
}

// Expected results:
console.log(getTotalGold(sports)); // Output: 23

//Flat
var depthArray = [1, 2, [3, 4], 5, 6];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

//Lay ra cac khoa hoc dua vao 1 mang moi
var topics = [
  {
    topic: "Fron End",
    courses: [
      { id: 1, title: "HTML,CSS" },
      {
        id: 2,
        title: "Javascript",
      },
    ],
  },
];
var newCourses = topics.reduce(function (course, topic) {
  return course.concat(topic.courses);
}, []);
console.log(newCourses);

//challenge
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];

function calculateRating(array) {
  var films = array.filter(function (film) {
    return film.Director === "Christopher Nolan";
  });
  var total = films.length;
  console.log(films);
  var imdb = films.reduce(function (total, film) {
    return total + Number(film.imdbRating);
  }, 0);
  return imdb / total;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

//create reduce

Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce2((total, number) => {
  return total + number;
});
console.log(result);

//challenge
function arrToObj(arr) {
  var result = arr.reduce(function (obj, item) {
    obj[item[0]] = item[1];
    return obj;
  }, {});
  return result;
}

// Expected results:
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

//includes method
var title = "Responsive web design";
console.log(title.includes("Responsive", 5));
var courses = ["Javascript", "PHP", "Dart"];
console.log(courses.includes("Dart"));
