//堆排序
//时间复杂度O(nlogn);
/**
 * 调整为大根堆
 * @param {Array} H 堆数组
 * @param {Number} s 待调整的数组元素,根元素
 * @param {Number} length 数组长度
 */
let HeapAdjust = function(H, s, length) {
    let tmp = H[s];
    let child = 2 * s; //左孩子
    while(child < length) {
        if (child+1 < length && H[child] < H[child+1]) { //找到较大的孩子节点
            ++child;
        }
        if(H[s] < H[child]) { //需要调整
            H[s] = H[child]; //较大孩子上移动;
            s = child;
            child = 2*s; //重设置继续调整
            H[s] = tmp;
        } else {
            break
        }
    }
}

/**
 * 初始化堆,进行调整
 * @param {Array} H 
 * @param {Number} length 数组长度
 */
let BuildHeap = function(H, length) {
    //最后一个父节点开始
    for (let i = parseInt((length - 1)/2); i >= 0; --i) {
        HeapAdjust(H , i, length);
    }
}

let HeapSort = function(H, length) {
    BuildHeap(H, length);
    //从最后一个元素开始调整
    for (let i = length - 1; i > 0; --i) {
        let temp = H[i];
        H[i] = H[0];
        H[0] = temp; //交换堆顶元素和堆中最后一个
        HeapAdjust(H, 0, i); //交换完之后调整,满足堆的时候只需要调整第一个获取最大值
    }
}

let arr = [2,3,4,5,1,6,9,8,7];
HeapSort(arr, 9)
console.log(arr)