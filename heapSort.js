function heapSort(arr){
    let heapSize = 0 ;
    if(arr.length<2||arr==null){
        return 
    }
    // let heapSize = arr.length
    // while(heapSize>0){
    //     heapInsert(arr,heapSize)
    //     heapSize--
    // }
    for(let i = 0 ;i<arr.length;i++){
        heapInsert(arr,i)
        heapSize++
    }
    console.log(heapSize,11)
    // // let heapSize = arr.length
    while(heapSize > 0 ){
        swap(arr,0,heapSize-1)
        // heapSize--
        // console.log(arr,11)
        heapify(arr,0,--heapSize)
    }
    console.log(arr,111)
}

function heapInsert(arr,index){
    // 计算父节点的  index 
    let pIndex = Math.floor((index - 1)/2)
    //比较当前节点与父节点的 大小
    while(arr[index]> arr[pIndex]){
        //如果 cur > 父   1. 交换    2. curIndex --> pIndex
        swap(arr,index,pIndex)
        index =  pIndex
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
            //更新  index  与 左侧节点的 index
            index = largest
            lChildIndex = index *2+1
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
 
let a = [5,4,3,2,1]
heapSort(a)
console.log(a)