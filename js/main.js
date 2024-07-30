document.addEventListener('DOMContentLoaded', function() {
    let currentGameIndex = 0;
    const gameData = [
        {
            categories: ['FSU', 'Social media', 'Films and TV', 'Fanshawe', 'Sports', 'Random'],
            questions: {
                // Add question data for this game
            }
        },
        {
            categories: ['Animals', 'Geography', 'Music', 'Food/Kitchen', 'Random'],
            questions: {
                // Add question data for this game
            }
        },
        {
            categories: ['FSU', 'Social media', 'Films and TV', 'Fanshawe', 'Sports', 'Random'],
            questions: {
                // Add question data for this game
         }
        },
        {
            categories: ['Animals', 'Geography', 'Music', 'Food/Kitchen', 'Random'],
            questions: {
                // Add question data for this game
            }
        }
        // Add more game data if necessary
    ];

    function loadGame(gameIndex) {
        const currentGame = gameData[gameIndex];
        const categories = currentGame.categories;
        const questions = currentGame.questions;
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
                const dollarCell = createCell(amount, 'jeopardy-cell');
                dollarCell.addEventListener('click', function() {
                    window.location.href = `questions.html?category=${encodeURIComponent(category)}&amount=${encodeURIComponent(amount)}`;
                });
                jeopardyBoard.appendChild(dollarCell);
            });
        }
    }

    function createCell(content, className) {
        const cell = document.createElement('div');
        cell.classList.add(className);
        cell.textContent = content;
        return cell;
    }

    document.getElementById('next-game').addEventListener('click', function() {
        currentGameIndex = (currentGameIndex + 1) % gameData.length;
        loadGame(currentGameIndex);
    });

    loadGame(currentGameIndex);  // Load the first game on page load
});
