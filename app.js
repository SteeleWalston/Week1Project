
// Asking the user their name

const name = prompt('Hello! First things first, may I ask your name?');
alert('Nice to meet you ' + name + '! My name is Steele. Before we get too far let\'s take a quiz to see how well you know me.');
console.log('name is a ' + typeof name);
console.log('Their name is: ' + name);

// Do I love golf?

const golf = prompt('Do I love golf?').toLowerCase();
if (golf === 'yes' || golf === 'y') {
    alert('You\'re right! I love golf, even though it is extremely difficult');
} else if (golf === 'no' || golf === 'n') {
    alert('Nope! I\'m super big on golf. I even have multiple golf shirts');
} else {
    alert('You didn\'t write a valid answer!');
}
console.log('Do I love golf?: They answered ' + golf);

//Do I like hiking?

const hike = prompt('Am I the kind of person who enjoys a good hike?').toLowerCase();
if (hike === 'yes' || hike === 'y') {
    alert('You\'re right! My favorite hike so far this year has been Labyrnth Falls');
} else if (hike === 'no' || hike === 'n') {
    alert('Wrong! I quite enjoy hiking, especially when the landscape reminds me of Lord of the Rings');
} else {
    alert('You didn\'t write a valid answer!');
}
console.log('Do I like to hike?: They answered ' + hike);

//Can I eat peanuts?

const peanuts = prompt('Would I eat a peanut butter and jelly sandwich?').toLowerCase();
if (peanuts === 'yes' || peanuts === 'y') {
    alert('You\'re wrong! Why would I do such a thing? I\'m allergic to peanuts remember?!');
} else if (peanuts === 'no' || peanuts === 'n') {
    alert('Your\'re right! I\'m extremly alleric to peanuts and I might die if I ate such a sandwich');
} else {
    alert('You didn\'t write a valid answer!');
}
console.log('Would I eat peanuts?: They answered ' + peanuts);

//Do I love coding so far?

const coding = prompt('Do I love writing code?').toLowerCase();
if (coding === 'yes' || coding === 'y') {
    alert('You\'re right! Well so far. I\'m pretty new to it but I\'m really enjoying the new challenges');
} else if (coding === 'no' || coding === 'n') {
    alert('Wrong! I\'m having a really good time writing code');
} else {
    alert('You didn\'t write a valid answer!');
}
console.log('Do I love writing code?: They answered ' + coding);

// Have I ever broken a bone?

const broken = prompt('Have I ever broken a bone?').toLowerCase();
if (broken === 'yes' || broken === 'y') {
    alert('You\'re wrong! Well so far. I\'ve had some close calls though');
} else if (broken === 'no' || broken === 'n') {
    alert('Yep! All bones fully intact!');
} else {
    alert('You didn\'t wirte a valid answer!');
}
console.log('Have I broken a bone?: They answered ' + broken);

//Attempt at looping two strings

//const harryPotter = prompt('Bonus! You must know me very well if you can respond correctly to this question: You\'re a wizard Harry.').toLowerCase();
/*if (harryPotter === 'i\'m a what?') {
    alert('A wizard');
} else {
    alert('That wasn\'nt the correct response');
}
console.log('Harry Potter secret test: They answered ' + harryPotter);*/

//A thanks to the person being quized

alert('Thanks for playing along ' + name + '!');
