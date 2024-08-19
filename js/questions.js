document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const amount = urlParams.get('amount');

    // Question and answer data
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
        "Geography": {
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
        "FSU": {
            "$100": { question: "Who is the FSU Finance Coordinator?", answer: "Jerry Thomas" },
            "$200": { question: "Who is the FSU Student Life Coordinator?", answer: "Sophia Mills" },
            "$300": { question: "What is the name of the FSU Esports team?", answer: "Fuel" },
            "$400": { question: "What is the name of the Fanshawe President?", answer: "Peter Devlin" },
            "$500": { question: "What is the name of the Fanshawe College event where students showcase their talents?", answer: "Fanshawe's Got Talent" },
            "$600": { question: "What is the name of the FSU podcast?", answer: "The Red Couch" }
        },
        "Random": {
        "$100": { question: "Which is the fastest land animal?", answer: "Cheetah" },
        "$200": { question: "Steve Harvey is a game show host. Whats that show called?", answer: "Family Feud" },
        "$300": { question: "Who is the author of the Harry Potter series?", answer: "J.K. Rowling" },
        "$400": { question: "Which bird is often associated with delivering babies?", answer: "Stork" },
        "$500": { question: "He is best known for inventing the electric lightbulb.", answer: "Thomas Edison" },
        "$600": { question: "What do you call the process by which plants make their own food?", answer: "Photosynthesis" }
    },
    "Animals": {
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
    "Foods/Kitchen": {
        "$100": { question: "what utencil do you use when eating soup? ", answer: " spoon" },
        "$200": { question: "what is the most widely consumed staple grain in the world? ", answer: "  rice" },
        "$300": { question: "what dessert is made by baking a batter of flour, eggs, sugar, and butter, and commenly served at birthday parties?   ", answer: "  cake or cupcake " },
        "$400": { question: "tzatziki is a greek dip containing which vegtable? ", answer: "Cucumber" },
        "$500": { question: "plantain is an unsweet version of which fruit? ", answer: " Banana" },
        "$600": { question: "what is the term which means your pasta still has a little bite to it?", answer: "  Al Dente " }
    },
    "Random": {
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
    }
    
    };
    

    // Get the question and answer elements
    const questionText = document.getElementById('question-text');
    const answerText = document.getElementById('answer-text');
    const answerContainer = document.getElementById('answer-container');

    if (category && amount && questionsData[category] && questionsData[category][amount]) {
        const { question, answer } = questionsData[category][amount];
        questionText.textContent = question;
        answerText.textContent = answer;
    } else {
        questionText.textContent = 'No question available.';
    }

    document.body.addEventListener('click', function() {
        answerContainer.classList.remove('hidden');
        const audio = document.getElementById('correct-audio');
        audio.play();
    });

    // Update clicked cells
    if (category && amount) {
        const clickedCells = JSON.parse(localStorage.getItem('clickedCells')) || {};
        clickedCells[`${category}-${amount}`] = true;
        localStorage.setItem('clickedCells', JSON.stringify(clickedCells));
    }
});