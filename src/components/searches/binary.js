export const binarySearch = (wordArray, searchTerm) => {
        
    let front = 0;
    let end = wordArray.length - 1;

    while(front <= end){
        let middle = (front + end) / 2;
        if(wordArray[middle] === searchTerm) {
            return wordArray[middle];
        }
        if(searchTerm > wordArray[middle]){
            front = middle + 1; 
        } else {
            end = wordArray.length;
        }
    }
}