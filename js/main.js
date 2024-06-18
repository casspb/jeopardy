document.addEventListener('DOMContentLoaded', function() {
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];
    const dollarAmounts = ['$100', '$200', '$300', '$400', '$500'];

    const jeopardyBoard = document.getElementById('jeopardy-board');
    const playerScores = {
        player1: 0,
        player2: 0,
        player3: 0
    };

    let currentPlayer = null; // To store the current player

    // Create category rows
    categories.forEach(category => {
        const categoryCell = createCell(category, 'category-row');
        jeopardyBoard.appendChild(categoryCell);
    });

    // Create dollar amount rows
    dollarAmounts.forEach(amount => {
        categories.forEach(category => {
            const dollarCell = createCell(amount, 'jeopardy-cell');
            dollarCell.addEventListener('click', function() {
                if (currentPlayer) {
                    // Replace with actual question handling logic if needed
                    alert('Question for ' + amount + ' under ' + category);
                } else {
                    alert('Please select a player first!');
                }
            });
            jeopardyBoard.appendChild(dollarCell);
        });
    });

    // Function to create a cell with specified content and class
    function createCell(content, className) {
        const cell = document.createElement('div');
        cell.classList.add(className);
        cell.textContent = content;
        return cell;
    }

    // Function to set the current player and highlight
    window.setCurrentPlayer = function(playerName) {
        currentPlayer = 'player' + playerName.replace('Player ', '');
        document.getElementById('current-player').textContent = 'Current Player: ' + playerName;
    };

    // Event listeners for player score buttons
    document.getElementById('player1').addEventListener('click', function() {
        setCurrentPlayer('Player 1');
    });

    document.getElementById('player2').addEventListener('click', function() {
        setCurrentPlayer('Player 2');
    });

    document.getElementById('player3').addEventListener('click', function() {
        setCurrentPlayer('Player 3');
    });
});

