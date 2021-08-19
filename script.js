function generate(){
    let quotes = {
        "- Albert camus":'"Freedom is nothing else but a chance to be better."',
        "- Buddha":'"No one outside ourselves can rule us inwardly. When we know this, we become free"',
        "- Aung San Suu Kyi":'"The only real prison is fear, and the only real freedom is freedom from fear. "',
        "- Albert Einstein":'"Freedom, in any case, is only possible by constantly struggling for it."',
    };
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() *authors.length)];
    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}