//选出最小的一个数和第一个位置交换

/**
 * 简单排序算法
 * @param {Array} arr 
 * @param {Number} n 
 */
let simpleSelectSort = function(arr, n) {
    let tmp;
    for (let i = 0; i < n; i++) {
        tmp = arr[i];
        let j = i + 1;
        let k = i;
        for (; j < n; j++) {
            if (tmp > arr[j]) { //找到后面部分最小的
                tmp = arr[j];
                k = j; //记录位置
            }
        }
        arr[k] = arr[i];
        arr[i] = tmp;
    }
}

let arr = [2,3,4,5,1,6,9,8,7];
simpleSelectSort(arr, 9)
console.log(arr)



