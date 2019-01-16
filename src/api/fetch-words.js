const downloadWords = () => {
    console.log('hi');
    fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt')
    .then(res => res.json())
    .then(words => console.log(words));
}

export default downloadWords;