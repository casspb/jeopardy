document.addEventListener('DOMContentLoaded', function() {
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];
    const dollarAmounts = ['$100', '$200', '$300', '$400', '$500'];

    const jeopardyBoard = document.getElementById('jeopardy-board');

    // Create category rows
    categories.forEach(category => {
        const categoryCell = createCell(category, 'category-cell');
        jeopardyBoard.appendChild(categoryCell);
    });

    // Create dollar amount rows
    dollarAmounts.forEach(amount => {
        categories.forEach(category => {
            const dollarCell = createCell(amount, 'jeopardy-cell');
            dollarCell.addEventListener('click', function() {
                // Replace with actual question handling logic if needed
                alert('Question for ' + amount + ' under ' + category);
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
});


