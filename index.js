/**
 * 交换位置函数
 *
 * @param {*} 交换的数组本体
 * @param {*} 交换的下标
 * @param {*} 交换的另一个下标
 */
function swap (arr,i,j){
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem 
}



/**
 *  选择排序方法
 *
 * @param {*} arr 传入的数组
 * @return {*} 
 */
function  selectSort(arr){
    if(!arr || arr.length<2){
        return arr 
    }
    for(let i = 0 ;i <arr.length-1;i++){
        let minIndex = i
        console.log(i,arr[i])
        for(let j = i+1 ;j <arr.length;j++){
            // 更新 minIndex
            minIndex = arr[j] < arr[minIndex] ? j :minIndex 
        }
        //交换位置
        swap(arr,i,minIndex)
      
    }
    console.log(arr)
    return arr 
}


// selectSort([421,521,621,6,216,612,6,12,71,721,7,7217,])


/**
 * 冒泡排序方法
 *
 * @param {*} arr 数组
 * @return {*} 
 */
function  popSort(arr){
    if(!arr || arr.length<2){
        return arr 
    }
    for(let i  =0 ;i<arr.length-1;i++){
        for(let j = i+1; j<arr.length;j++){
            if(arr[i]>arr[j]){
                swap(arr,i,j)
            }
        }
    }
    // for(let i  =arr.length-1 ;i>0;i--){
    //     for(let j = 0; j<i;j++){
    //         if(arr[j]>arr[j+1]){
    //             swap(arr,j,j+1)
    //         }
    //     }
    // }
    console.log(arr)
    return arr 
}


// popSort([12,521,52,15,2,15,21,5,215,215,1,2,3,5,1,4,6,7,8,9])




/**
 * 插入排序的方法
 *
 * @param {*} arr  数组
 * @return {*} 
 */
function  insertSort(arr){
    if(!arr || arr.length<2){
        return arr 
    }
    for(let i = 1 ;i<arr.length;i++){
        for(let j = i-1 ;j>=0 ;j--){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }

    }
    console.log(arr)
    return arr 
}

// insertSort([421 ,5,52,15,2,15,21,5,125,12,5,1,2,61,6,7345745,7])



/**
 *  使用异或方法 找出数组中 仅有的一种出现次数为奇数次的数
 *
 * @param {*} arr  数组
 * @return {*} 
 */
function findOne(arr){
    let res = 0
    arr.forEach(it=>{
        res ^=it
    })
    console.log(res)
    return res 
}


// findOne([1,2,2,2,1,3,4,4,3,2,3])

/**
 *  使用异或方法 找出数组中 仅有的两种种出现次数为奇数次的数
 *
 * @param {*} arr
 * @return {*} 
 */
function findTwo(arr){
    let res = 0
    arr.forEach(it=>{
        console.log(it)
        res ^=it
    })
    let resOther = 0 
    let rightOne = res & ( ~res + 1 )
    arr.forEach(it=>{
        if( (it & rightOne) ==0){
            resOther^= it
        }
    })
    return [resOther,res^resOther]
}
// findTwo([1,2,3,3,2,1,4,5])





let a = [24,521,5,12,125,125,6,216,621,61]

/**
 *  主函数
 *  执行 递归操作 
 *
 * @param {*} arr 函数
 */
function mergeSort(arr){
    if(arr == null || arr.length<2){
        return  
    }
    process(arr,0,arr.length-1)
}

/**
 * 递归函数
 *   做了什么？
 * 每次去 将 L 到 R 区域 通过寻找中间下标的方法 分成左右2个区域
 * 接受 三个参数 
 * @param {*} arr 原数组
 * @param {*} L  将要被划分的区域 的左侧下标
 * @param {*} R     将要被划分的区域 的右侧下标
 */
function process(arr,L,R){
    
    //L 到 R 范围内进行排序
    if(L===R){
        return 
    }
    //计算中间下标的位置
    let mid = L + ( (R-L) >> 1 )
    //划分成 L----mid   和 mid+1 到 R  的问题
    process(arr,L,mid)
    process(arr,mid+1,R)
    merge(arr,L,mid,R)
}

function merge(arr,L,M,R){
    let helpArr =[],  //额外空间存放排好序的数组
    i=0,      //help 数组初始下标的位置
    p1 = L, //左指针
    p2= M+1 //右指针  
    //均向右移动
    //临界条件
    while( p1<=M && p2<=R ){
        //对比当前位置的大小 并将比较的结果小的存入help当前下标处 存的是哪边 就移动哪边的指针 help 数组 下表往后移
        helpArr[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
    }
    while(p1<=M){
        helpArr[i++] =  arr[p1++] 
    }
    while(p2<=R){
        helpArr[i++] =  arr[p2++] 
    }
    for(i=0;i<helpArr.length;i++){
        arr[L+i] = helpArr[i]
    }
}

mergeSort(a)
console.log(a)