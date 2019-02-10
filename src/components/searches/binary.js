export const binarySearch = (arr, searchTerm) => {
    let front = 0;
    let back = arr.length - 1;
    let result = {
        position: Math.floor((front + back) / 2),
        count: 0
    }

    while (front <= back) {
        let mid = Math.floor((front + back) / 2);
        
        if (arr[mid] === searchTerm) {
            result.position = mid;
            return result;
        }
        else if (arr[mid] < searchTerm) {
            front = mid + 1;
            result.count++;
        } else {
            back = mid - 1;
            result.count++;
        }    
    }
    return -1;
}