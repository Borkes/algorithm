//冒泡排序-交换排序

//对相邻的两个数比较,交换

/**
 * 较大的数往后,每次产生一个最大的数,可以做很多改进
 * @param {Array} a 
 * @param {Number} n 
 */
let bubbleSort = function(a ,n) {
    let tmp;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n -i -1; j++) {
            if (a[j] > a[j+1]) {
                tmp = a[j];
                a[j] = a[j+1];
                a[j+1] = tmp;
            }
        }
    }
}

let arr = [2,3,4,5,1,6,9,8,7];
bubbleSort(arr, 9);
console.log(arr);