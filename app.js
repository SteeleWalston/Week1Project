console.log('I am Javascript');

            // Asking the user their name
            const name = prompt('Hello! First things first, may I ask your name?');
            alert('Nice to meet you ' + name +'! My name is Steele. Before we get too far let\'s take a quiz to see how well you know me.');
            console.log('name is a ' + typeof name);
            console.log('Their name is: ' + name);

            const golf = prompt ('Do I love golf?').toLowerCase();
            if (golf === 'yes' || golf === 'y') {
                alert ('You\'re right! I love golf, even though it is extremely difficult');
            } else if (golf === 'no' || golf === 'n') {
                alert ('Nope! I\'m super big on golf. I even have multiple golf shirts');
            } else {
                alert('You didn\'t wirte a valid answer!');
            }
            console.log('Do I love golf?: They answered ' + golf);


            const hike = prompt ('Am I the kind of person who enjoys a good hike?').toLowerCase();
            if (hike === 'yes' || hike === 'y') {
                alert ('You\'re right! My favorite hike so far this year has been Labyrnth Falls');
            } else if (hike === 'no' || hike === 'n') {
                alert ('Wrong! I quite enjoy hiking, especially when the landscape reminds me of Lord of the Rings');
            } else {
                alert('You didn\'t wirte a valid answer!');
            }
            console.log('Do I like to hike?: They answered ' + hike);


            const peanuts = prompt ('Would I eat a peanut butter and jelly sandwich?').toLowerCase();
            if (peanuts === 'yes' || peanuts === 'y') {
                alert ('You\'re wrong! Why would I do such a thing? I\'m allergic to peanuts remember?!');
            } else if (peanuts === 'no' || peanuts === 'n') {
                alert ('Your\'re right! I\'m extremly alleric to peanuts and I might die if I ate such a sandwich');
            } else {
                alert('You didn\'t wirte a valid answer!');
            }
            console.log('Would I eat penuts?: They answered ' + peanuts);


            const coding = prompt ('Do I love writing code?').toLowerCase();
            if (coding === 'yes' || coding === 'y') {
                alert ('You\'re right! Well so far. I\'m pretty new to it but I\'m really enjoying the new challenges');
            } else if (coding === 'no' || coding === 'n') {
                alert ('Wrong! I\'m having a really good time writing code');
            } else {
                alert('You didn\'t wirte an valid answer!');
            }
            console.log('Do I love writing code?: They answered ' + coding);

            const broken = prompt ('Have I ever broken a bone?').toLowerCase();
            if (broken === 'yes' || broken === 'y') {
                alert ('You\'re wrong! Well so far. I\'ve had some close calls though');
            } else if (broken === 'no' || broken === 'n') {
                alert ('Yep! All bones fully intact!');
            } else {
                alert('You didn\'t wirte an valid answer!');
            }
            console.log('Have I broken a bone?: They answered ' + broken);

            //Attempt at looping two strings

            /*const harryPotter = prompt ('Bonus! You must know me very well if you can respond correctly to this question: You\'re a wizard Harry.').toLowerCase();
            if (harryPotter === 'i\'m a what?') {
                alert ('A wizard');
            } else {
                let harry = 0
                while (harry !== harryPotter) {
                    harry++;
                }
                alert(harry + 'Try again');
            }
            console.log('Harry Potter secret test: They answered ' + harryPotter);*/

            alert('Thanks for playing along ' + name + '!');
            
            // Previous questions that are Non Yes/No 

            /* Asking the user where they are from
            const hometown = prompt('So, ' + name + ' now that we\'ve formally introduced ourselves, Where are you from?');
            alert('Oh cool! I\'ve never been to ' + hometown + '! I\'m from Conifer, Colorado, the sunniest sate in the US!');
            console.log('hometown is a ' + typeof hometown);
            console.log('They are from: ' + hometown);

            // Asking the user what their favorite TV show is 
            const tvshow = prompt('Wow, I\'ve never met a ' + name + ' from ' + hometown + '. But let\'s get a little deeper. What\'s your favorite TV show?');
            alert('Hmm I\'ve never heard of that one. Must be a ' + name + ' from ' + hometown + ' thing, but I\'ll take your word that ' + tvshow + ' is good.');
            console.log('tvshow is a ' + typeof tvshow);
            console.log('Their favorite TV Show is: ' + tvshow);

            //Asking the user the name of their first pet
            const petname = prompt('I feel like I\'m really getting to know you ' + name + '! Especially now that I know you love ' + tvshow +'. But there\'s still one more thing I need to know before I can call you a true friend. What was the name of your first pet?');
            alert('Woah! ' + petname + ' is such a cool name for a pet. I named my first pet Pinky. He was a Gerbal named after Pinky from Pinky and the Brain, even though in the show, Pinky was a mouse');
            alert('Well, ' + name + ' It was fun talking to you! Maybe I\'ll watch ' + tvshow + ' while talking a trip to ' + hometown + '. Heck! Maybe I\'ll even name my next pet ' + petname + '!');
            console.log('petname is a ' + typeof petname);
            console.log('They named their first pet: ' + petname); */