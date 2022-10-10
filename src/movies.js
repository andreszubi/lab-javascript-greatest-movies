// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) => {
        return movie.director
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   
    let stevenSpielberg = moviesArray.filter((movie) => movie.director === "Steven Spielberg");
    let dramaFilter = stevenSpielberg.filter((movie) =>  {return movie.genre.includes("Drama")});
    return dramaFilter.length;
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length === 0) {
        return 0;}
let withScore = moviesArray.filter((movieScore) => typeof movieScore.score === "number");
let scores = withScore.map(movie => movie.score);
let scoreAvg = (scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)/moviesArray.length).toFixed(2);
return parseFloat(scoreAvg);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
let dramaFilter = moviesArray.filter(movie => movie.genre.includes("Drama"));
 const avg = scoresAverage(dramaFilter)
 return avg;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
let newArray = moviesArray.map(movie => movie);
let yearSort = newArray.sort((a, b) => {
 return a.year - b.year || a.title.localeCompare(b.title)
})
return yearSort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let organizedMovies = moviesArray.sort((a,b) => a.title.localeCompare(b.title));
let onlyTwenty = organizedMovies.slice(0,20);
let newArray = onlyTwenty.map((movie) => movie.title);
return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

let result = moviesArray.map(movie => movie.duration);
return result;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
