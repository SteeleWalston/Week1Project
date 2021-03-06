
//Array to collect the users total score at the end

const totalScore = [];

// Asking the user their name

function userName () {
    const name = prompt('Hello! First things first, may I ask your name?');
    alert('Nice to meet you ' + name + '! My name is Steele. Before we get too far let\'s take a quiz to see how well you know me.');
    console.log('name is a ' + typeof name);
    console.log('Their name is: ' + name);
    return name;
}

const name = userName ();
console.log('Their name is ' + name + '.');

// Do I love golf?

function loveGolf () {
    const golf = prompt('Do I love golf?').toLowerCase();
    if (golf === 'yes' || golf === 'y') {
        alert('You\'re right! I love golf, even though it is extremely difficult');
        totalScore.push('correct');
    } else if (golf === 'no' || golf === 'n') {
        alert('Nope! I\'m super big on golf. I even have multiple golf shirts');
    } else {
        alert('You didn\'t write a valid answer!');
    }
    console.log('Do I love golf?: They answered ' + golf);
}


//Do I like hiking?

function loveHiking () {
    const hike = prompt('Am I the kind of person who enjoys a good hike?').toLowerCase();
    if (hike === 'yes' || hike === 'y') {
        alert('You\'re right! My favorite hike so far this year has been Labyrnth Falls');
        totalScore.push('correct');
    } else if (hike === 'no' || hike === 'n') {
        alert('Wrong! I quite enjoy hiking, especially when the landscape reminds me of Lord of the Rings');
    } else {
        alert('You didn\'t write a valid answer!');
    }
    console.log('Do I like to hike?: They answered ' + hike);
}

//Can I eat peanuts?

function canEatPeanuts () {
    const peanuts = prompt('Would I eat a peanut butter and jelly sandwich?').toLowerCase();
    if (peanuts === 'yes' || peanuts === 'y') {
        alert('You\'re wrong! Why would I do such a thing? I\'m allergic to peanuts remember?!');
    } else if (peanuts === 'no' || peanuts === 'n') {
        alert('Your\'re right! I\'m extremly allergic to peanuts and I might die if I ate such a sandwich');
        totalScore.push('correct');
    } else {
        alert('You didn\'t write a valid answer!');
    }
    console.log('Would I eat peanuts?: They answered ' + peanuts);
}

//Do I love coding so far?

function likesToCode () {
    const coding = prompt('Do I love writing code?').toLowerCase();
    if (coding === 'yes' || coding === 'y') {
        alert('You\'re right! Well so far. I\'m pretty new to it but I\'m really enjoying the new challenges');
        totalScore.push('correct');
    } else if (coding === 'no' || coding === 'n') {
        alert('Wrong! I\'m having a really good time writing code');
    } else {
        alert('You didn\'t write a valid answer!');
    }
    console.log('Do I love writing code?: They answered ' + coding);
}

// Have I ever broken a bone?

function guessBrokeBones () {
    const broken = prompt('Have I ever broken a bone?').toLowerCase();
    if (broken === 'yes' || broken === 'y') {
        alert('You\'re wrong! Well so far. I\'ve had some close calls though');
    } else if (broken === 'no' || broken === 'n') {
        alert('Yep! All bones fully intact!');
        totalScore.push('correct');
    } else {
        alert('You didn\'t wirte a valid answer!');
    }
    console.log('Have I broken a bone?: They answered ' + broken);
}

//Favorite movie

function guessFavFlicks () {
    for (let movieGuess = 0; movieGuess < 5; movieGuess++) {
        const favMovies = ['harry potter', 'hp',];
        const notSoFavMovies = ['lord of the rings', 'lotr'];
        const movies = prompt('What would I rather watch, Harry Potter? Or Lord of the Rings?').toLowerCase();
        if (favMovies.includes(movies)) {
            alert('You\'re right! Although, I wouldn\'t be opposed to watching both in the same day');
            totalScore.push('correct');
            break;
        } else if (notSoFavMovies.includes(movies)) {
            alert('You\'re wrong! Although, I wouldn\'t be opposed to watching both in the same day');
            break;
        } else {
            alert('You didn\'t wirte a valid answer!');
        }
        console.log('They guessed ' + movies);
    }
}

//How many pokemon?

function guessPokemonCaught (){
    for (let pokemon = 0; pokemon < 5; pokemon++) {
        const pokeGuess = parseInt(prompt('How many Pokemon have I caught?'));
        if (pokeGuess === 0) {
            alert('Come on! I\'ve caught way more than that!');
        }
        else if (pokeGuess < 100) {
            alert('More than that!');
        }
        else if (pokeGuess < 150) {
            alert('Still not quite enough. You might say I\'m trying to be the very best');
        }
        else if (pokeGuess > 151) {
            alert('Oops! You\'ve guessed too many!');
        }
        else if (pokeGuess === 151) {
            alert('You\'re right! Of course I had to catch them all!');
            totalScore.push('correct');
            break;
        }
        console.log('How many Pokemon have I caught? They guessed: ' + pokeGuess);
    }
}
//Favorite Artist?

function guessFavArtist () {
    for (let artGuess = 0; artGuess < 6; artGuess++){
        const topArtists = ['van gogh', 'warhol', 'banksy'];
        const artists = prompt('Who is one of my favorite artists?').toLowerCase();
        if (topArtists.includes(artists)) {
            alert('You\'re right! My top three favorite artists are ' + topArtists[0] + ', ' + topArtists[1] + ', and ' + topArtists[2] + '.');
            totalScore.push('correct');
            break;
        } else {
            alert('You\'re Wrong!');
        }
        console.log('They guessed:' + artists);
    }

}

loveGolf();
loveHiking();
canEatPeanuts();
likesToCode();
guessBrokeBones();
guessFavFlicks();
guessPokemonCaught();
guessFavArtist();

alert('Thanks for playing along ' + name + '! You guessed ' + totalScore.length + ' out of 8 questions right');