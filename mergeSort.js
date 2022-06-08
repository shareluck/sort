/**
 * 归并排序
 *  分解 重组 
 *  将待排序的数组 arr  按 中间数 递归分解成 左右 2个部分  并将merge 操作压入栈中 
 *  merge 出栈 时 进行左右数组的排序 通过双指针的方式比对大小 依次 放入 辅助数组中
 *  将辅助数组映射到arr 
 * @param {*} arr
 */
function mergeSort(arr) {
    //边界条件 直接return 不对arr 做操作
    if(arr ==null || arr.length<2){
        return 
    }
    //否则 确定 想要排序的范围 这里取整个数组 
    let l = 0,r = arr.length-1
    //递归调用函数
    process(arr,l,r)
}

function process(arr,l,r) {
    //边界条件 左边界等于右边界 直接return 不对arr 做操作
    if(l===r){
        return
    }
    //否则
    // 计算中间点
    // let mid = Math.floor((l+r)/2)  l+r 可能会溢出
    let mid = l+((r-l)>>1) //取中间点的方法 考虑加法溢出的问题
    console.log(mid)
    //递归调用 process 将 arr 按中间点分割
    process(arr,l,mid)
    process(arr,mid+1,r)
    merge(arr,l,mid,r)
}

function merge(arr,l,m,r) {
    let 
    p1 = l, //左指针
    p2 = m+1 ,//右指针
    helpArr = [], //辅助数组 存放排序后的数组
    i = 0
    //边界条件  左右指针同时往右走 左指针不超过 m 右指针不超过 r
    while(p1<=m && p2<=r){
        //比较左右指针位置 数 的大小 将小的存入 helpArr 并且 右移 helpArr 的指针与 小数值的指针
        helpArr[i++] = arr[p1]<= arr[p2] ? arr[p1++] : arr[p2++]
    }
    // 由于  [l 到 m ] 和[m+1 到 r] 不一定相等 所以 多出来的继续遍历放入helpArr
    while(p1<=m){
        helpArr[i++] = arr[p1++]
    }
    while(p2<=r){
        helpArr[i++] = arr[p2++]
    }
    //将helpArr 映射到 arr 上
    for(i = 0;i<helpArr.length;i++){
        // console.log(i)
        arr[l+i] = helpArr[i]
    }
    console.log(arr)
}

mergeSort([5,2,4,3,2,1])



// eg：[5,2,4,3,2,1]

// 划分操作

// 1. 取 [5,2,4,3,2,1] 中间点 2 划分成 [5,2,4] [3,2,1]
// 2. 取 [5,2,4] 中间点 1 划分成 [5,2] [4]
// 3. 取 [5,2] 中间点 0 划分成 [5] [2] 
// 4. 取 [3,2,1] 中间点 4 划分成 [3,2] [1]
// 5. 取 [3,2] 中间点 3 划分成 [3]  [2]

//merge 操作

//1 merge [5] [2] 2 < 5 helpArr [2,5] 回归上一层  arr = [2,5,4,3,2,1]
//2 merge [2,5] [4] 2 < 4 < 5  helpArr [2,4,5] 回归上一层 arr = [2,4,5,3,2,1]
//2 merge [3] [2] 2 < 3 helpArr [2,3] 回归上一层 arr = [2,4,5,2,3,1]
//2 merge [2,3] [1] 1 < 2 < 3 helpArr [1,2,3] 回归上一层 arr = [2,4,5,1,2,3]
//2 merge [2,4,5] [1,2,3] 1 < 2 < 2<3<4<5 helpArr [1,2,2,3,4,5] 回归上一层 arr = [1,2,2,3,4,5]

