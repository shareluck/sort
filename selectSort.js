/**
 * 选择排序
 * 含义：从当前下标之后的元素中选择最小值的下标更新minIndex 将minIndex 与当前下标交换 
 *
 * @param {*} arr
 */
function selectSort(arr){
    //外层循环  确定当前下标 
    for(let i = 0 ; i < arr.length-1 ;i++){
        //选取 最小 index 
        let minIndex = i 
        //内层循环  寻找（ 从i+1 到 arr.length 范围） 最小下标
        for(let j = i + 1 ;j< arr.length ;j++ ){
            //计算最小下标
            minIndex = arr[j] < arr[minIndex] ?  j: minIndex
        }
        //交换  当 i  !== 最小下标时 交换
        if(i !== minIndex){
            swap(arr,i,minIndex)
        }
    }
}


function swap(arr,i,j){
    //异或方法交换位置
    arr[i] = arr[i]^arr[j]
    arr[j] = arr[i]^arr[j]
    arr[i] = arr[i]^arr[j]
}

let a = [1,24,24,14,25,15,21,6,16,21,6,216]
selectSort(a)
console.log(a)