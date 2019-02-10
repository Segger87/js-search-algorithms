export const binarySearch = (arr, searchTerm) => {
    let front = 0;
    let back = arr.length - 1;
    let count = 0;

    while (front <= back) {
        let mid = Math.floor((front + back) / 2);
        if (arr[mid] === searchTerm) {
            return mid;
        }
        else if (arr[mid] < searchTerm) {
            front = mid + 1;
        } else {
            back = mid - 1;
        }    
    }
    return -1;
}