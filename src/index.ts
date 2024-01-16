// mergesort (collection_1 :int[], collection_2 :int[]) :int[] 
export function merge(collection_1: number[], collection_2: number[]): number[] {
    let result: number[] = [], index1 = 0, index2 = 0;

    // check int type of collection_1 and collection_2
    if (!collection_1.every(Number.isInteger) || !collection_2.every(Number.isInteger)) {
        throw new Error('All elements in the collections must be integers');
    }

    // loop in collection_1 and collection_2 while index is less than collection length
    // if collection_1 element is less than collection_2 element then push collection_1 element to result
    // else push collection_2 element to result
    while (index1 < collection_1.length && index2 < collection_2.length) {
        if (collection_1[index1] < collection_2[index2]) {
            result.push(collection_1[index1]);
            index1++;
        } else {
            result.push(collection_2[index2]);
            index2++;
        }
    }

    // mergesort result concat collection_1 and collection_2 from index1 and index2 are more than length
    return result.concat(collection_1.slice(index1)).concat(collection_2.slice(index2));
}


let result = merge([11, 12, 13, 14, 15, 16], [0, 1, 2, 13]);
console.log(result);