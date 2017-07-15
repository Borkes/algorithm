//直接插入排序,稳定排序-插入排序
//从已有的有序表中插入记录
//O(n^2)

/**
 * 
 * @param {Array} a 
 * @param {Number} n 
 */
let insertSort = function(a, n) {
    for (let i = 1; i < n; i++) {
        if (a[i] < a[i-1]) {
            let j = i-1;
            let x = a[i];
            while(x < a[j]) {
                a[j+1] = a[j];
                j--;
            }
            a[j+1] = x; //插入
        }
    }
}

let arr = [2,3,4,5,1,6,9,8,7];
insertSort(arr, 9);
console.log(arr)