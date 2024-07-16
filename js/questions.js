document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const amount = urlParams.get('amount');

    // Get the question container element
    const questionText = document.getElementById('question-text');

    // Display the question based on the category and amount
    if (category && amount) {
        // Example question handling
        questionText.textContent = `Here is your question for ${amount} in ${category}: What is...?`;
    } else {
        questionText.textContent = 'No question available.';
    }
});
