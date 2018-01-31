
//Array to collect the users total score at the end

const totalScore = [];

// Array for Yes/No questions

// Asking the user their name

const name = prompt('Hello! First things first, may I ask your name?');
alert('Nice to meet you ' + name + '! My name is Steele. Before we get too far let\'s take a quiz to see how well you know me.');
console.log('name is a ' + typeof name);
console.log('Their name is: ' + name);

// Do I love golf?

const golf = prompt('Do I love golf?').toLowerCase();
if (golf === 'yes' || golf === 'y') {
    alert('You\'re right! I love golf, even though it is extremely difficult');
    totalScore.push('correct');
} else if (golf === 'no' || golf === 'n') {
    alert('Nope! I\'m super big on golf. I even have multiple golf shirts');
    totalScore.push('incorrect');
} else {
    alert('You didn\'t write a valid answer!');
}
console.log('Do I love golf?: They answered ' + golf);
console.log('Their score is now ' + totalScore);

//Do I like hiking?

const hike = prompt('Am I the kind of person who enjoys a good hike?').toLowerCase();
if (hike === 'yes' || hike === 'y') {
    alert('You\'re right! My favorite hike so far this year has been Labyrnth Falls');
    totalScore.push('correct');
} else if (hike === 'no' || hike === 'n') {
    alert('Wrong! I quite enjoy hiking, especially when the landscape reminds me of Lord of the Rings');
    totalScore.push('incorrect');
} else {
    alert('You didn\'t write a valid answer!');
    totalScore.push('incorrect');
}
console.log('Do I like to hike?: They answered ' + hike);
console.log('Their score is now ' + totalScore);

//Can I eat peanuts?

const peanuts = prompt('Would I eat a peanut butter and jelly sandwich?').toLowerCase();
if (peanuts === 'yes' || peanuts === 'y') {
    alert('You\'re wrong! Why would I do such a thing? I\'m allergic to peanuts remember?!');
    totalScore.push('incorrect');
} else if (peanuts === 'no' || peanuts === 'n') {
    alert('Your\'re right! I\'m extremly alleric to peanuts and I might die if I ate such a sandwich');
    totalScore.push('correct');
} else {
    alert('You didn\'t write a valid answer!');
    totalScore.push('incorrect');
}
console.log('Would I eat peanuts?: They answered ' + peanuts);
console.log('Their score is now ' + totalScore);

//Do I love coding so far?

const coding = prompt('Do I love writing code?').toLowerCase();
if (coding === 'yes' || coding === 'y') {
    alert('You\'re right! Well so far. I\'m pretty new to it but I\'m really enjoying the new challenges');
    totalScore.push('correct');
} else if (coding === 'no' || coding === 'n') {
    alert('Wrong! I\'m having a really good time writing code');
    totalScore.push('incorrect');
} else {
    alert('You didn\'t write a valid answer!');
    totalScore.push('incorrect');
}
console.log('Do I love writing code?: They answered ' + coding);
console.log('Their score is now ' + totalScore);

// Have I ever broken a bone?

const broken = prompt('Have I ever broken a bone?').toLowerCase();
if (broken === 'yes' || broken === 'y') {
    alert('You\'re wrong! Well so far. I\'ve had some close calls though');
    totalScore.push('incorrect');
} else if (broken === 'no' || broken === 'n') {
    alert('Yep! All bones fully intact!');
    totalScore.push('correct');
} else {
    alert('You didn\'t wirte a valid answer!');
    totalScore.push('incorrect');
}
console.log('Have I broken a bone?: They answered ' + broken);

let movies = prompt('Which movie would I rather watch? Harry Potter? Or Lord of the Rings?').toLowerCase();
do {
    if (movies === 'harry potter' || movies === 'hp'){
        alert('You\'re right! Although, I wouldn\'t be opposed to watching both in the same day');
        totalScore.push('correct');
    }
    else if (movies === 'lord of the rings' || movies === 'lotr') {
        alert('You\'re wrong! Although, I wouldn\'t be opposed to watching both in the same day');
        totalScore.push('incorrect');
    } else {
        alert('That wasn\'t a vaild response!');
        movies = prompt('Which movie would I rather watch? Harry Potter? Or Lord of the Rings?');
    }
} while (movies != 'harry Potter' && movies != 'lord of the rings' && movies != 'hp' && movies != 'lotr');

console.log('What would I rather watch? HP or LOTR? They answered: ' + movies);
console.log('Their score is now ' + totalScore);

for (let pokemon = 0; pokemon < 5; pokemon++) {
    const pokeGuess = parseInt(prompt('How many Pokemon have I caught?'));
    if (pokeGuess === 0) {
        alert('Come on! I\'ve caught way more than that!');
    }
    else if (pokeGuess < 100) {
        alert('More than that!');
    }
    else if (pokeGuess < 125) {
        alert('Still more! Keep going!');
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

console.log('Their score is now ' + totalScore);


alert('Thanks for playing along ' + name + '!');

