function addQuote() {
    const quoteList = document.getElementById('quoteList');
    const newQuote = prompt('Enter a memorable quote:');
    
    if (newQuote) {
        const li = document.createElement('li');
        li.textContent = `"${newQuote}"`;
        quoteList.appendChild(li);
    }
}
