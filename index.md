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