document.addEventListener('DOMContentLoaded', function() {
    let currentGameIndex = 0;
    const gameData = [
        {
            categories: ['FSU', 'Social media', 'Films and TV', 'Fanshawe', 'Sports', 'Random'],
        },
        {
            categories: ['Animals', 'Geography', 'Music', 'Food/Kitchen', 'Random', 'Pop Culture'],
        },
        {
            categories: ['FSU', 'Social media', 'Films and TV', 'Fanshawe', 'Sports', 'Random'],
        },
        {
            categories: ['Animals', 'Geography', 'Music', 'Food/Kitchen', 'Random', 'Science'],
        }
        // Add more game data if necessary
    ];

    function loadGame(gameIndex) {
        const currentGame = gameData[gameIndex];
        const categories = currentGame.categories;
        const jeopardyBoard = document.getElementById('jeopardy-board');
        jeopardyBoard.innerHTML = '';

        // Create category cells
        categories.forEach(category => {
            const categoryCell = createCell(category, 'category-cell');
            jeopardyBoard.appendChild(categoryCell);
        });

        // Create question cells
        for (let amount of ['$100', '$200', '$300', '$400', '$500', '$600']) {
            categories.forEach(category => {
                const dollarCell = createCell(amount, 'jeopardy-cell', category, amount);
                jeopardyBoard.appendChild(dollarCell);
            });
        }
    }

    function createCell(content, className, category, amount) {
        const cell = document.createElement('div');
        cell.classList.add(className);
        cell.textContent = content;

        const clickedCells = JSON.parse(localStorage.getItem('clickedCells')) || {};
        const cellKey = `${category}-${amount}`;
        if (clickedCells[cellKey]) {
            cell.classList.add('hidden-cell');
        }

        cell.addEventListener('click', function() {
            if (!cell.classList.contains('hidden-cell')) {
                const lastClickedCell = { category, amount };
                localStorage.setItem('lastClickedCell', JSON.stringify(lastClickedCell));
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
        }
        localStorage.setItem('score1', score1);
        localStorage.setItem('score2', score2);
        localStorage.setItem('score3', score3);
    }

    // Get player score elements and initialize scores
    const score1Elem = document.getElementById('score1');
    const score2Elem = document.getElementById('score2');
    const score3Elem = document.getElementById('score3');
    let score1 = parseInt(localStorage.getItem('score1')) || 0;
    let score2 = parseInt(localStorage.getItem('score2')) || 0;
    let score3 = parseInt(localStorage.getItem('score3')) || 0;
    score1Elem.textContent = score1;
    score2Elem.textContent = score2;
    score3Elem.textContent = score3;

    // Add click event listeners to player buttons
    document.getElementById('player1').addEventListener('click', () => updateScore(1, score1Elem));
    document.getElementById('player2').addEventListener('click', () => updateScore(2, score2Elem));
    document.getElementById('player3').addEventListener('click', () => updateScore(3, score3Elem));
    
    document.getElementById('next-game').addEventListener('click', function() {
        currentGameIndex = (currentGameIndex + 1) % gameData.length;
        loadGame(currentGameIndex);
    });

   
    document.getElementById('refresh-game').addEventListener('click', function() {
        // Get the audio element
        const audio = document.getElementById('game-audio');

        localStorage.removeItem('clickedCells'); // Clear the clicked cells
        localStorage.removeItem('score1');
        localStorage.removeItem('score2');
        localStorage.removeItem('score3'); // Clear the scores
        loadGame(currentGameIndex); // Reload the current game
        score1 = 0;
        score2 = 0;
        score3 = 0;
        score1Elem.textContent = score1;
        score2Elem.textContent = score2;
        score3Elem.textContent = score3;

        // Play the audio when the button is clicked
        audio.play();
    });
    // Load the current game
    loadGame(currentGameIndex);
});

