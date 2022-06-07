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
findTwo([1,2,3,3,2,1,4,5])
