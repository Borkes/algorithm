//希尔排序-插入排序
//按某个增量分组(n/2),每组记录下标相差d
//不稳定

/**
 * 
 * @param {Array} a 
 * @param {Number} n 
 * @param {Number} d, d=1是直接插入排序 
 */
let shellInsertSort = function (a, n, d) {
    for (let i = d; i < n; i = i + d) {
        if (a[i] < a[i-d]) {
            let j = i-d;
            let x = a[i]; //记录插入的元素
            while(x < a[j]) {
                a[j+d] = a[j];
                j = j - d;
            }
            a[j+d] = x;
        }
    }
}

let shellSort = function(a , n) {
    let d = parseInt(n/2);
    while(d >= 1) {
        shellInsertSort(a, n, d);
        d = parseInt(d/2);
    }
}

let arr = [2,3,4,5,1,6,9,8,7];
shellSort(arr, 9);
console.log(arr)