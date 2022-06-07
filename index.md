# 选择排序 n2
 - 对比对象 当前与当前位置之后的位置的比较  
 - 核心点 确定更小值 的 位置 minIndex   j 与 minIndex 位置的值比较
 - 交换位置 当前位置与最小值位置的交换
 ```js
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
    return arr 
}
function swap (arr,i,j){
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem 
}



 ```
# 冒泡排序 n2
 - 对比对象 当前对象与当前对象的相邻对象对比 
 - 如果当前对象大于 相邻对象 则交换位置
    > 可以选择从后遍历或者从前遍历
 ```js
function  popSort(arr){
    if(!arr || arr.length<2){
        return arr 
    }
    // 从前
    for(let i  =0 ;i<arr.length-1;i++){
        for(let j = i+1; j<arr.length;j++){
            if(arr[i]>arr[j]){
                swap(arr,i,j)
            }
        }
    }
    //从后
    // for(let i  =arr.length-1 ;i>0;i--){
    //     for(let j = 0; j<i;j++){
    //         if(arr[j]>arr[j+1]){
    //             swap(arr,j,j+1)
    //         }
    //     }
    // }
    return arr 
}
function swap (arr,i,j){
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem 
}



 ```
# 插入排序 n2
- 对比对象 当前位置与前置位比较

```js
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
```


# 归并排序
- 将 N 规模的 问题 分解成 接近 N/2 规模的问题
分别对其排序 
- 递归进行划分
- 合并操作


```js

    function mergeSort(arr){
        if(arr == null || arr.length<2){
            return  
        }
        process(arr,0,arr.length-1)
        
    }

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
            helpArr[i++] = arr[p1] <= arr[p2] ？ arr[p1++] : arr[p2++]
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
```