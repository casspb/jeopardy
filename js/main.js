(() => {
    let currentGameIndex = 0;
    const gameData = [
        {
            categories: ['FSU', 'Social media', 'Films and TV', 'Fanshawe', 'Sports', 'Random'],
        },
        {
            categories: ['Animals', 'Geography', 'Music', 'Food and Kitchen', 'this and that', 'Pop Culture'],
        },
        {
            categories: ['Fanshawe Student Union', 'Social media', 'Films and shows', 'Fanshawe', 'Sports', 'Assorted'],
        },
        {
            categories: ['Animal', 'location', 'Music', 'Food/Kitchen', 'Random', 'Science'],
        },
        {
            categories: ['Flags', 'Biology', 'Looking Glass', 'Celebrities', 'Video Games', 'Ocean Life'],
        },
        {
            categories: ['Plants', 'libraries', 'National Days', 'Vintage Toys', 'Fun Facts', 'Disney Fairy Tales'],
        }
    ];

    // Load the game based on stored game state
    const storedGameState = JSON.parse(localStorage.getItem('gameState'));
    if (storedGameState && storedGameState.gameIndex !== undefined) {
        currentGameIndex = storedGameState.gameIndex;  // Restore previous game index
    }

    function loadGame(gameIndex) {
        const currentGame = gameData[gameIndex];
        const categories = currentGame.categories;
        const jeopardyBoard = document.getElementById('jeopardy-board');
        jeopardyBoard.innerHTML = ''; // Clear previous game

        // Create category cells
        categories.forEach(category => {
            const categoryCell = createCell(category, 'category-cell');
            jeopardyBoard.appendChild(categoryCell);
        });

        // Create question cells (with dollar amounts)
        for (let amount of ['$100', '$200', '$300', '$400', '$500', '$600']) {
            categories.forEach(category => {
                const dollarCell = createCell(amount, 'jeopardy-cell', category, amount);
                jeopardyBoard.appendChild(dollarCell);
            });
        }
    }

    // Create each cell and handle clicked state
    function createCell(content, className, category, amount) {
        const clickedQuestions = JSON.parse(localStorage.getItem('clickedCells')) || {};  // Ensure it's an object
        const cellKey = `${category}-${amount}`;

        const cell = document.createElement('div');
        cell.classList.add(className);
        cell.textContent = content;

        // Check if this question has already been clicked
        if (clickedQuestions[cellKey]) {
            cell.classList.add('hidden-cell'); // Apply greyed out class if already clicked
        }

        cell.addEventListener('click', function () {
            if (!cell.classList.contains('hidden-cell')) {
                // Mark this question as clicked
                clickedQuestions[cellKey] = true;
                localStorage.setItem('clickedCells', JSON.stringify(clickedQuestions));  // Save the updated state

                // Store game state for returning to the correct game later
                const gameState = {
                    gameIndex: currentGameIndex,
                    category: category,
                    amount: amount
                };
                localStorage.setItem('gameState', JSON.stringify(gameState));  // Store game state
                window.location.href = `questions.html?category=${encodeURIComponent(category)}&amount=${encodeURIComponent(amount)}`;
            }
        });

        return cell;
    }

    function updateScore(player, scoreElem) {
        if (player === 1) {
            score1 += 100;
            scoreElem.textContent = score1;
        } else if (player === 2) {
            score2 += 100;
            scoreElem.textContent = score2;
        } else if (player === 3) {
            score3 += 100;
            scoreElem.textContent = score3;
        } else if (player === 4) {
            score4 += 100;
            scoreElem.textContent = score4;
        } else if (player === 5) {
            score5 += 100;
            scoreElem.textContent = score5;
        } else if (player === 6) {
            score6 += 100;
            scoreElem.textContent = score6;
        }
        localStorage.setItem('score1', score1);
        localStorage.setItem('score2', score2);
        localStorage.setItem('score3', score3);
        localStorage.setItem('score4', score4);
        localStorage.setItem('score5', score5);
        localStorage.setItem('score6', score6);
    }
    
    // Get player score elements and initialize scores
    const score1Elem = document.getElementById('score1');
    const score2Elem = document.getElementById('score2');
    const score3Elem = document.getElementById('score3');
    const score4Elem = document.getElementById('score4');
    const score5Elem = document.getElementById('score5');
    const score6Elem = document.getElementById('score6');
    
    let score1 = parseInt(localStorage.getItem('score1')) || 0;
    let score2 = parseInt(localStorage.getItem('score2')) || 0;
    let score3 = parseInt(localStorage.getItem('score3')) || 0;
    let score4 = parseInt(localStorage.getItem('score4')) || 0;
    let score5 = parseInt(localStorage.getItem('score5')) || 0;
    let score6 = parseInt(localStorage.getItem('score6')) || 0;
    
    score1Elem.textContent = score1;
    score2Elem.textContent = score2;
    score3Elem.textContent = score3;
    score4Elem.textContent = score4;
    score5Elem.textContent = score5;
    score6Elem.textContent = score6;
    
    // Add click event listeners to player buttons
    document.getElementById('player1').addEventListener('click', () => updateScore(1, score1Elem));
    document.getElementById('player2').addEventListener('click', () => updateScore(2, score2Elem));
    document.getElementById('player3').addEventListener('click', () => updateScore(3, score3Elem));
    document.getElementById('player4').addEventListener('click', () => updateScore(4, score4Elem));
    document.getElementById('player5').addEventListener('click', () => updateScore(5, score5Elem));
    document.getElementById('player6').addEventListener('click', () => updateScore(6, score6Elem));
    
    document.getElementById('next-game').addEventListener('click', function() {
        currentGameIndex = (currentGameIndex + 1) % gameData.length;
        loadGame(currentGameIndex);
    });
    
    document.getElementById('refresh-game').addEventListener('click', function() {
        const audio = document.getElementById('game-audio');
    
        localStorage.removeItem('clickedCells'); // Clear the clicked cells
        localStorage.removeItem('score1');
        localStorage.removeItem('score2');
        localStorage.removeItem('score3');
        localStorage.removeItem('score4');
        localStorage.removeItem('score5');
        localStorage.removeItem('score6'); // Clear the scores
        loadGame(currentGameIndex); // Reload the current game
        score1 = 0;
        score2 = 0;
        score3 = 0;
        score4 = 0;
        score5 = 0;
        score6 = 0;
        score1Elem.textContent = score1;
        score2Elem.textContent = score2;
        score3Elem.textContent = score3;
        score4Elem.textContent = score4;
        score5Elem.textContent = score5;
        score6Elem.textContent = score6;
    
        // Play the audio when the button is clicked
        audio.play();
     
    });
    // Load the initial game
    loadGame(currentGameIndex);

    // Add event listeners for game navigation
    document.getElementById('next-game').addEventListener('click', function () {
        currentGameIndex = (currentGameIndex + 1) % gameData.length;
        loadGame(currentGameIndex);
        localStorage.setItem('gameState', JSON.stringify({ gameIndex: currentGameIndex }));  // Save current game index
    });

    document.getElementById('refresh-game').addEventListener('click', function () {
        localStorage.removeItem('clickedCells'); // Clear clicked cells
        localStorage.removeItem('gameState'); // Reset game state
        loadGame(currentGameIndex); // Reload the current game
    });
})();
