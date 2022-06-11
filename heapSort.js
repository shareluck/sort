/**
 * 堆排序
 * 堆结构  数组表示的完全二叉树  
 * 父节点下标index 左子节点下标 index *2 +1 右子节点下标 index*2+2 
 * 知道子节点下标 无论左右 index 父节点下标 (index-1)/2  当index 为 0 时
 * 无论是 heapInsert 还是 heapify 交换完之后 都要改变相对应的 下标 
 *
 * @param {*} arr
 */
function heapSort(arr){
    if(arr.length<2||arr==null){
        return 
    }
    for(let i = 0 ;i<arr.length;i++){
        heapInsert(arr,i)
    }
    let heapSize = nums.length
    swap(nums,0,--heapSize)
    while(heapSize > 0 ){
        swap(nums,0,heapSize)
        heapify(nums,0,heapSize)
    }
}

function heapInsert(arr,index){
    // 计算父节点的  index 
    let pIndex = index  ?   Math.floor((index - 1)/2) : 0 
    //比较当前节点与父节点的 大小
    while(arr[index]> arr[pIndex]){
        //如果 cur > 父   1. 交换    2. curIndex --> pIndex
        swap(arr,index,pIndex)
        //  注意 
        index =  pIndex
        pIndex = index  ?   Math.floor((index - 1)/2) : 0 
    }
}

function heapify(arr,index,size){
    let lChildIndex = index *2+1
    let rChildIndex = index *2+2
    while(lChildIndex < size){// 有子节点
        //当有 右节点 且 右 > 左  子节点 较大下标为 r 否则为左 
        let largest = rChildIndex < size && arr[rChildIndex] >arr[lChildIndex] ?rChildIndex : lChildIndex
        //较大子节点的值
        largest = arr[index] >arr[largest] ? index : largest
        //如果较大子节点  > 父节点  
        if(index!==largest){
            //交换位置
            swap(arr,index,largest)
            //更新  index  与 子节点的 index
            index = largest
            //  注意 
            lChildIndex = index *2+1
            rChildIndex = index *2+2
        }else{
            break;
        }
    }
}

function swap(arr,a,b){
    let tem = arr[a]
    arr[a] = arr[b]
    arr[b]= tem
}
 
let a = [-4,0,7,4,9,-5,-1,0,-7,-1]
heapSort(a)
console.log(a)