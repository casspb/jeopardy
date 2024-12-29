(() => {
    // Selecting elements
    const categoryElement = document.querySelector('#category');
    const amountElement = document.querySelector('#amount');
    const questionText = document.querySelector('#question-text');
    const answerText = document.querySelector('#answer-text');
    const answerContainer = document.querySelector('#answer-container');

    // Fetching the 'category' and 'amount' from the selected elements using a ternary operator
    const pageCategory = categoryElement ? categoryElement.textContent : null;
    const pageAmount = amountElement ? amountElement.textContent : null;
    
    const questionsData = {
        "FSU": {
            "$100": { question: "What does the FSU stand for?", answer: "Fanshawe Student Union" },
            "$200": { question: "Who is the FSU president?", answer: "Sid Singh" },
            "$300": { question: "The FSU's student newspaper is called this.", answer: "Interrobang" },
            "$400": { question: "What is the FSU's volunteer team name?", answer: "The Red Squad" },
            "$500": { question: "What is the FSU Instagram account name?", answer: "fanshawesu" },
            "$600": { question: "What is the name of the FSU event where you can get donuts and talk about academic integrity?", answer: "Donut Cheat" }
        },
        "Social media": {
            "$100": { question: "This video-sharing platform, acquired by Google in 2006, is the second most-visited website in the world.", answer: "Youtube" },
            "$200": { question: "This photo and video sharing app, launched in 2010 and acquired by Facebook in 2012, introduced 'Stories' to its platform in 2016.", answer: "Instagram" },
            "$300": { question: "This social media platform, founded by Mark Zuckerberg in 2004.", answer: "Facebook" },
            "$400": { question: "This professional networking site, founded in 2002 and acquired by Microsoft in 2016, is used primarily for job searching and professional networking.", answer: "LinkedIn" },
            "$500": { question: "This feature on Twitter allows users to share someone else's tweet on their own timeline.", answer: "Retweet" },
            "$600": { question: "This term refers to a social media post designed to attract engagement through controversy or humor.", answer: "Clickbait" }
        },
        "Films and TV": {
            "$100": { question: "This animated TV show, created by Matt Groening, features the Simpson family.", answer: "The Simpsons" },
            "$200": { question: "This actor won an Oscar for his role in Forrest Gump.", answer: "Tom Hanks" },
            "$300": { question: "This 2012 superhero film, directed by Joss Whedon, assembles characters like Iron Man, Thor, and Captain America.", answer: "The Avengers" },
            "$400": { question: "This HBO series, based on the novels by George R.R. Martin, features the battle for the Iron Throne.", answer: "Game of Thrones" },
            "$500": { question: "This 1993 film, directed by Steven Spielberg, brought dinosaurs to life through groundbreaking special effects.", answer: "Jurassic Park" },
            "$600": { question: "This 2001 Bollywood film, starring Aamir Khan, tells the story of a group of villagers who challenge British officers to a game of cricket.", answer: "Lagaan" }
        },
        "Fanshawe": {
            "$100": { question: "What street is the downtown campus located on?", answer: "Dundas" },
            "$200": { question: "This program at Fanshawe College prepares students for careers in the hospitality industry.", answer: "Hospitality Management" },
            "$300": { question: "What is the name of Fanshawe's Falcon mascot?", answer: "Freddie" },
            "$400": { question: "What is the full name of the School of Business?", answer: "Lawrence Kinlin School of Business" },
            "$500": { question: "This Canadian musician, known for hits like 'Call Me Maybe,' attended Fanshawe College.", answer: "Carly Rae Jepsen" },
            "$600": { question: "Fanshawe College was founded in this year.", answer: "1967" }
        },
        "Sports": {
            "$100": { question: "In golf, this term refers to a score of one stroke under par on a hole.", answer: "Birdie" },
            "$200": { question: "This Jamaican sprinter is regarded as the fastest man in the world, holding the world record for the 100 meters.", answer: "Usain Bolt" },
            "$300": { question: "This tennis player has won the most Grand Slam singles titles in the Open Era.", answer: "Novak Djokovic" },
            "$400": { question: "This piece of equipment is used to hit the ball in pickleball.", answer: "Paddle" },
            "$500": { question: "This term describes the achievement of scoring three goals in a single game.", answer: "Hat trick" },
            "$600": { question: "This state is credited with being the birthplace of pickleball in 1965.", answer: "Washington" }
        },
        "Random": {
            "$100": { question: "This color is made by mixing red and blue.", answer: "Purple" },
            "$200": { question: "This iconic tower in Paris, known for its wrought iron lattice structure, was completed in 1889.", answer: "Eiffel Tower" },
            "$300": { question: "This Italian dish consists of thin sheets of pasta layered with cheese and tomato sauce.", answer: "Lasagna" },
            "$400": { question: "Painted by Leonardo da Vinci, this iconic portrait showcases a woman with a mysterious and captivating smile.", answer: "Mona Lisa" },
            "$500": { question: "Often hailed as the 'King of Pop,' this artists iconic career includes the best-selling album of all time, 'Thriller.'", answer: "Michael Jackson" },
            "$600": { question: "Co-founder of Microsoft, this billionaire philanthropist has been a leading figure in technology and global health initiatives.", answer: "Bill Gates" }
        },
        "Animals": {
            "$100": { question: "This large animal is known for its trunk and tusks.", answer: "Elephant" },
            "$200": { question: "This bird is known for its colorful feathers and ability to mimic sounds.", answer: "Parrot" },
            "$300": { question: "What type of fish was Nemo in the movie Finding Nemo?", answer: "Clownfish" },
            "$400": { question: "This African mammal has a long neck and legs to reach high tree branches for food.", answer: "Giraffe" },
            "$500": { question: "This bird has the ability to fly backwards and hover in mid-air, thanks to its unique wing structure.", answer: "Hummingbird" },
            "$600": { question: "This legendary bird is said to rise from its own ashes after death and is referenced in Harry Potter.", answer: "Phoenix" }
        },
        "location": {
            "$100": { question: "This is the largest ocean in the world.", answer: "Pacific Ocean" },
            "$200": { question: "This continent is home to the Sahara Desert.", answer: "Africa" },
            "$300": { question: "The capital of Canada, known for its Winterlude festival, is this city.", answer: "Ottawa" },
            "$400": { question: "This mountain range stretches from British Columbia in Canada to New Mexico in the United States.", answer: "Rocky Mountains" },
            "$500": { question: "This desert in Africa is the largest hot desert in the world.", answer: "Sahara Desert" },
            "$600": { question: "This city, the largest in Canada, is located in Ontario and is home to the CN Tower and Raptors.", answer: "Toronto" }
        },
        "Music": {
            "$100": { question: "The most streamed genre on Spotify in 2023 by Canadians was?", answer: "Pop" },
            "$200": { question: "This former Destiny's Child singer topped the charts with 'Crazy in Love.'", answer: "Beyoncé" },
            "$300": { question: "Which singer is known for singing 'All I Want for Christmas Is You'?", answer: "Mariah Carey" },
            "$400": { question: "Which movie is 'Let It Go'  from?", answer: "Frozen" },
            "$500": { question: "Which artist wrote the international hit song 'Sorry'?", answer: "Justin Bieber" },
            "$600": { question: "What was the first song sung on the moon?", answer: "Happy Birthday" }
        },
        "Food/Kitchen": {
            "$100": { question: "Feta is a type of which food?", answer: "Cheese" },
            "$200": { question: "Kimchi is a pickled vegetable dish from which country?", answer: "Korea" },
            "$300": { question: "Tequila is an alcoholic beverage from which country?", answer: "Mexico" },
            "$400": { question: "Which condiment can be English, French, or Dijon?", answer: "Mustard" },
            "$500": { question: "Sourdough is a type of which food?", answer: "Bread" },
            "$600": { question: "Gnocchi are small potato dumplings from which country?", answer: "Italy" }
        },
        "Fanshawe Student Union": {
            "$100": { question: "Who is the FSU Finance Coordinator?", answer: "Jerry Thomas" },
            "$200": { question: "Who is the FSU Student Life Coordinator?", answer: "Sophia Mills" },
            "$300": { question: "What is the name of the FSU Esports team?", answer: "Fuel" },
            "$400": { question: "What is the name of the Fanshawe President?", answer: "Peter Devlin" },
            "$500": { question: "What is the name of the Fanshawe College event where students showcase their talents?", answer: "Fanshawe's Got Talent" },
            "$600": { question: "What is the name of the FSU podcast?", answer: "The Red Couch" }
        },
        "this and that": {
        "$100": { question: "Which is the fastest land animal?", answer: "Cheetah" },
        "$200": { question: "Steve Harvey is a game show host. Whats that show called?", answer: "Family Feud" },
        "$300": { question: "Who is the author of the Harry Potter series?", answer: "J.K. Rowling" },
        "$400": { question: "Which bird is often associated with delivering babies?", answer: "Stork" },
        "$500": { question: "He is best known for inventing the electric lightbulb.", answer: "Thomas Edison" },
        "$600": { question: "What do you call the process by which plants make their own food?", answer: "Photosynthesis" }
    },
    "Animal": {
        "$100": { question: "This largest rainforest in the world is home to millions of species of animals and plants.", answer: " Amazon Rainforest" },
        "$200": { question: "This arctic animal has a thick layer of blubber and dense fur to survive in freezing temperatures.", answer: "  Polar bear" },
        "$300": { question: "This term describes animals that primarily eat plants.", answer: "Herbivores" },
        "$400": { question: "This group of animals includes lions, tigers, bears, bats, and humans", answer: " mammals" },
        "$500": { question: "This bird, found in Antarctica, is the only bird that can swim but cannot fly.", answer: "Penguin" },
        "$600": { question: "A group of wolves hunting together is known as a _______. ", answer: "Pack" }
    },
    "Geography": {
        "$100": { question: "This large island off the coast of Africa is known for its unique wildlife and is the fourth largest island in the world.", answer: " Madagascar" },
        "$200": { question: "This Middle Eastern country, bordered by Saudi Arabia to the south and Israel to the west, has Amman as its capital. ", answer: " Jordan" },
        "$300": { question: "This island nation, located southeast of India, is known for its ancient cities and tea plantations.", answer: " Sri Lanka" },
        "$400": { question: "This body of water, bordered by Jordan to the east and Israel and Palestine to the west, is known for its high salinity. ", answer: "The Dead Sea" },
        "$500": { question: "This largest island in the Caribbean is known for its cigars and vintage cars", answer: "Cuba" },
        "$600": { question: "This African country, known for its pyramids and ancient civilization, is bordered by Sudan to the south", answer: "Egypt" }
    },
    "Music": {
        "$100": { question: "which singer is also known as rocket man? ", answer: "  Elton John" },
        "$200": { question: "toto song, whose title is a continent experienced a resurgence in popularity in 2018, what song is it? ", answer: "  Africa" },
        "$300": { question: "which artist created the song 'empire state of mind'  ? ", answer: " Jay-z " },
        "$400": { question: "liam, harry, zayne, nial are names from what old band? ", answer: "One Direction" },
        "$500": { question: "what band is popular in the mama mia movies, and sings Gimmie! Gimmie! Gimmie!?", answer: " ABBA" },
        "$600": { question: "whats Drakes real name?", answer: " Aubrey " }
    },
    "Foods and Kitchen": {
        "$100": { question: "what utencil do you use when eating soup? ", answer: " spoon" },
        "$200": { question: "what is the most widely consumed staple grain in the world? ", answer: "  rice" },
        "$300": { question: "what dessert is made by baking a batter of flour, eggs, sugar, and butter, and commenly served at birthday parties?   ", answer: "  cake or cupcake " },
        "$400": { question: "tzatziki is a greek dip containing which vegtable? ", answer: "Cucumber" },
        "$500": { question: "plantain is an unsweet version of which fruit? ", answer: " Banana" },
        "$600": { question: "what is the term which means your pasta still has a little bite to it?", answer: "  Al Dente " }
    },
    "Assorted": {
        "$100": { question: "what item of clothing do you usually put on your feet, before putting on shoes? ", answer: " socks" },
        "$200": { question: "how many colours will you find in a regular bag of m&m's? ", answer: " 6" },
        "$300": { question: "whats the shortcut for the paste function on most computers?", answer: "  Ctrl+V " },
        "$400": { question: "In chess, what direction can a bishop move? ", answer: "Diagonally" },
        "$500": { question: "what type of shark is responsible for the most attacks on humans annually? ", answer: " great white shark" },
        "$600": { question: "which metal has the chemical symbol 'Fe ' ?", answer: "  iron " }
    },
    "Science": {
        "$100": { question: "this is the chemical for water ", answer: " H2O" },
        "$200": { question: "this planet is knowas the red planet? ", answer: " Mars" },
        "$300": { question: "The study of life is known as this", answer: "  Biology " },
        "$400": { question: " Which is the most abundant element in the universe?  ", answer: "Hydrogen" },
        "$500": { question: "What is the hardest natural substance on Earth?  ", answer: "Diamond" },
        "$600": { question: "This disease, caused by the Yersinia pestis bacterium, was known as the “Black Death” in the 14th century ?", answer: "  The plague " }
    },
    "Pop Culture": {
        "$100": { question: "what is the celebrity sister surname britney and jamie Lynn?  ", answer: " Spears" },
        "$200": { question: "What movie is this line from: <q>You're going to need a bigger boat.</q>? ", answer: " Jaws" },
        "$300": { question: "What is the name of the fictional kingdom in 'Black Panther'?", answer: "  Wakanda " },
        "$400": { question: " Which actor played the character of Neo in 'The Matrix' trilogy?  ", answer: "Keanu Reeves" },
        "$500": { question: "In the TV show 'The Office', what is the name of the company that the characters work for? ", answer: "Dunder Mifflin" },
        "$600": { question: "Which reality show features the following people: Kris, Kim, Kourtney, Khloe, Kendall, and Kylie?", answer: " Keeping up with the Kardashians" }
    },
    "Flags":{
        "$100": { question: "This country's flag features a red maple leaf in the centre, symbolizing the nation's nature and wilderness.", answer: "Canada" },
        "$200": { question: "The flag of this country has a red circle in the centre on a white background, symbolizing the sun.",  answer: "Japan" },
        "$300": { question: "The flag of this country features a white crescent moon and a star on a green background.",  answer: "Pakistan" },
        "$400": { question: "This country's flag consists of three horizontal stripes, saffron at the top, white in the middle, and green at the bottom, along with a navy blue wheel with 24 spokes in the centre.", answer: "India" },
        "$500": { question: "This country's flag features a golden eagle in the centre, perched on a cactus with a snake in its beak.",  answer: "Mexico" },
        "$600": { question: "This flag has two golden lions, a sword, and a palm tree, all on a deep red field, representing the nation's identity and heritage.",  answer: "Sri Lanka" }
    },
    "Biology":{
        "$100": { question: "The body's largest organ, which acts as a barrier to protect the body from pathogens and regulates temperature, is known as this.", answer: "Skin" },
        "$200": { question: "This organ is responsible for pumping blood throughout the body and is often referred to as the body's 'engine'.", answer: "Heart" },
        "$300": { question: "This green pigment found in plant cells is essential for photosynthesis.", answer: "Chlorophyll" },
        "$400": { question: "The cell structure that controls what enters and exits the cell is known as the cell's 'security guard'.", answer: "Membrane" },
        "$500": { question: "This molecule carries genetic information in living organisms and has a double-helix structure.", answer: "DNA" },
        "$600": { question: "This type of cell division results in two genetically identical daughter cells and is crucial for growth and repair.", answer: "Mitosis" }
    },
    "Looking Glass":{
        "$100": { question: "This glass you wear to help you see.", answer: "Glasses" },
        "$200": { question: "This accessory was famously worn by the Monopoly man.", answer: "Monocle" },
        "$300": { question: "The name of the procedure that darkens glass.", answer: "Tinting" },
        "$400": { question: "This type of glass is seen often on church windows.", answer: "Stained glass" },
        "$500": { question: "This type of glass can hold up to 24,000 psi.", answer: "Tempered glass" },
        "$600": { question: "This object is referred to as a looking glass in 'Alice in Wonderland'.", answer: "Mirror" }
    },
    "Celebrities":{
        "$100": { question: "This actress became famous for her role as Hermione Granger in the Harry Potter series.", answer: "Emma Watson" },
        "$200": { question: "This actor played the role of Tony Stark, also known as Iron Man in the Marvel Cinematic Universe.", answer: "Robert Downey Jr." },
        "$300": { question: "This singer is known for hits like 'Shape of You' and 'Perfect' and is one of the best-selling music artists of all time.", answer: "Ed Sheeran" },
        "$400": { question: "This actor is famous for playing the character of Jack Dawson in Titanic and was later cast as the lead in The Revenant.", answer: "Leonardo DiCaprio" },
        "$500": { question: "This actress is known for her role as Katniss Everdeen in The Hunger Games and has starred in films like Silver Linings Playbook and Joy.", answer: "Jennifer Lawrence" },
        "$600": { question: "This actor is best known for his role as the Joker in The Dark Knight and performances in Brokeback Mountain and Dallas Buyers Club.", answer: "Heath Ledger" }
    },
    "Video Games":{
        "$100": { question: "This iconic plumber first appeared in the 1985 game Super Mario Bros., where he must rescue Princess Peach from Bowser.", answer: "Mario" },
        "$200": { question: "In this 2017 game, players explore a vast open world battling enemies and solving puzzles as the hero named Link.", answer: "The Legend of Zelda: Breath of the Wild" },
        "$300": { question: "This 2009 game, known for its block, pixelated world, allows players to do many things in an open-world environment.", answer: "Minecraft" },
        "$400": { question: "This 2007 game features an open world set in Liberty City, where players control a character named Niko Bellic in a gritty, crime-filled story.", answer: "Grand Theft Auto IV" },
        "$500": { question: "This 2015 action-adventure game is set in a post-apocalyptic world where the main character, Joel, helps a girl to safety while avoiding zombie-like creatures.", answer: "The Last of Us" },
        "$600": { question: "This game is set in a dystopian future where machines have taken over, following the journey of Aloy, a hunter trying to uncover the secrets of her past while fighting robotic creatures.", answer: "Horizon Zero Dawn" }
    },
    "Ocean Life":{
        "$100": { question: "This sea creature is known for its eight arms and is famous for being very intelligent and able to change color.", answer: "Octopus" },
        "$200": { question: "These large marine mammals are known for their long migrations and songs. They are the largest animal on Earth.", answer: "Whale" },
        "$300": { question: "This small colorful fish is often associated with coral reefs and is known for its symbiotic relationship with sea anemones in the movie 'Nemo'.", answer: "Clownfish" },
        "$400": { question: "This species of fish is known for its sharp spines and its ability to inflate itself as a defense mechanism.", answer: "Pufferfish" },
        "$500": { question: "This marine animal, often called a 'sea cow', grazes on seagrasses in shallow coastal waters, and is known for its gentle nature.", answer: "Manatee" },
        "$600": { question: "This deep-sea creature is known for its bioluminescent abilities and its odd appearance with a dangly lightbulb-like feature.", answer: "Anglerfish" }
    },
    "Plants":{
        "$100": { question: "This tree is known for its distinct leaf shape and is the symbol of Canada.", answer: "Maple tree" },
        "$200": { question: "This part of a plant anchors it to the soil and absorbs water and nutrients.", answer: "Root" },
        "$300": { question: "This is the process by which plants make their own food using sunlight, water, and carbon dioxide.", answer: "Photosynthesis" },
        "$400": { question: "This small flying insect is essential for pollination.", answer: "Bee" },
        "$500": { question: "This common green plant is often kept in homes and is known for its ability to purify the air.", answer: "Spider Plant" },
        "$600": { question: "This large tropical plant is known for its broad leaves and is the national flower of India.", answer: "Lotus" }
    },
    "Libraries":{
        "$100": { question: "This person works at a library and helps you find books or check out items.", answer: "Librarian" },
        "$200": { question: "This type of library book is usually found in the 'fiction' section but is known for being completely imaginary and totally made up.", answer: "Novel" },
        "$300": { question: "This library item has a 'best before' date and is often checked out more than once, and has an assortment of graphics.", answer: "Comic book" },
        "$400": { question: "This term refers to a book that is so good, you can't put it down, even in the middle of a crowded library.", answer: "Page-turner" },
        "$500": { question: "This happens when you check out a book, then forget to return it on time.", answer: "Library fine" },
        "$600": { question: "These creatures are often found in library books but are very rare to spot in the actual library. They may be found under beds or in your imagination.", answer: "Bookworms" }
    },
    "National Days":{
        "$100": { question: "This day is known for exchanging cards, flowers, and chocolates to express affection.", answer: "Valentine's Day" },
        "$200": { question: "This holiday is known for costumes and trick-or-treating.", answer: "Halloween" },
        "$300": { question: "This day is filled with jokes and pranks.", answer: "April Fools" },
        "$400": { question: "Celebrated on May 4th, by those who cherish an epic space saga.", answer: "Star Wars Day" },
        "$500": { question: "This national day is celebrated on March 14th, and is dedicated to a delicious round treat that has the perfect ratio.", answer: "Pi Day" },
        "$600": { question: "Celebrated on the third Monday in January, this holiday honors a man known for his 'I have a Dream' speech and his work in civil rights.", answer: "Martin Luther King Jr. Day" }
    },
    "Vintage Toys":{
       "$100": { question: "This electronic handheld game, which became popular in the 1980's, later developed into more handheld game consoles.", answer: "Gameboy" },
        "$200": { question: "This popular doll line, which debuted in 1989, featured brightly colored hair and big eyes, and they were often found wearing stylish outfits.", answer: "Polly Pockets" },
        "$300": { question: "This toy line featured small squishy animals with distinct faces, and later developed to talk and move.", answer: "Furby" },
        "$400": { question: "This toy was introduced in 1982, featuring small plastic creatures that could transform into vehicles or animals, and became a huge craze.", answer: "Transformers" },
        "$500": { question: "This game is played trying to guess what is in another player's hand, using questions and logic.", answer: "Clue" },
        "$600": { question: "These classic collectible figurines, introduced in 1981, are small, have big heads, and often feature humorous expressions.", answer: "Cabbage Patch Kids" }
    },
    "Fun Facts":{
        "$100": { question: "This tiny creature is famous for its ability to glow in the dark due to bioluminescence.", answer: "Firefly" },
        "$200": { question: "This small, cute creature sleeps in the day and is known for hanging upside down with its feet.", answer: "Bat" },
        "$300": { question: "This 'king' of the jungle, with a famous Disney film, is known for his mighty roar and his role as the protector of the savannah.", answer: "Simba" },
        "$400": { question: "This animal can hold its breath underwater for over an hour and is often seen as a symbol of wisdom in Chinese culture.", answer: "Otter" },
        "$500": { question: "Humans have a special body part that's 'unique' to each individual, just like fingerprints.", answer: "Tongue" },
        "$600": { question: "This is the only part of your body that doesn't get blood from blood vessels. This part is the clear glassy part in the front of your eye.", answer: "Cornea" }
    },
    "Disney Fairy Tales":{
        "$100": { question: "In Cinderella, this object is used to prove that Cinderella is the girl from the dance.", answer: "Glass Slipper" },
        "$200": { question: "In Sleeping Beauty, this happens when Aurora pricks her finger on the spinning wheel.", answer: "Fall to Sleep" },
        "$300": { question: "In Aladdin, this magical object transports Aladdin and Princess Jasmine on a journey.", answer: "Magic Carpet" },
        "$400": { question: "In The Little Mermaid, Ariel gives up her voice in exchange for something from Ursula. What does she want?", answer: "Legs" },
        "$500": { question: "In Mulan, this is how Mulan proves her worth to the emperor and her comrades.", answer: "Saving China" },
        "$600": { question: "This Disney film is loosely based on a German fairy tale of a girl who befriends dwarfs and is poisoned by an apple.", answer: "Snow White and the Seven Dwarfs" }
    }
    
    };
    
    //connecting the question based on the category and the amount by holding the url value and making it a variable
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    const urlAmount = urlParams.get('amount');

    if (urlCategory && urlAmount && questionsData[urlCategory] && questionsData[urlCategory][urlAmount]) {
        const { question, answer } = questionsData[urlCategory][urlAmount];
        questionText.textContent = question;
        answerText.textContent = answer;
    } else {
        questionText.textContent = 'No question available.';
        answerText.textContent = '';  // Clear answer if no question
    }

    // Show answers when clicking the screen
    document.body.addEventListener('click', function () {
        answerContainer.classList.remove('hidden');
        const audio = document.getElementById('correct-audio');
        if (audio) {
            audio.volume = 1.0;
            audio.play();
        }
    });

    // Add "Back to Game" link functionality but keep the current game on the screen using local storage 
    document.querySelector('.back-link').addEventListener('click', function () {
        const storedGameState = JSON.parse(localStorage.getItem('gameState'));
        if (storedGameState) {
            const { gameIndex } = storedGameState;
            window.location.href = `index.html`;  // Navigate back to the game page
        }
    });
})();