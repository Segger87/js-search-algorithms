export const linearSearch = (wordArray, searchTerm) => {
    for(let i = 0; i < wordArray.length; i++){
        if(searchTerm === wordArray[i]) return i;
    }
    return -1;
}