console.log('I am Javascript');

            // Asking the user their name
            const name = prompt('Hello! First things first, may I ask your name?');
            alert('Nice to meet you ' + name +'! My name is Steele.');
            console.log('name is a ' + typeof name);
            console.log('Their name is: ' + name);

            // Asking the user where they are from
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
            console.log('They named their first pet: ' + petname);