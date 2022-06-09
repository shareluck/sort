# 冒泡排序  O(N^2) O(1)
- 核心  : 相邻对比 小的交换位置
- 实现 
```js
    function bubbleSort(arr){
        if(arr.length<2 || arr==null){
            return 
        }
        for(let i = 0 ;i<arr.length;i++){
            for(let j = arr.length-2;j>=i;j--){
                if(arr[j]>arr[j+1]){
                    let tem = arr[j]
                    arr[j]= arr[j+1]
                    arr[j+1] = tem
                }
            }
        }
    }
```

# 选择排序 O(N^2) O(1)
- 核心 ： 确定 minIndex 遍历后续数据 找到更小的 minIndex 做交换
- 实现 
```js
    function selecSort(arr){
        if(arr.length<2 || arr==null){
            return 
        }
        for(let i = 0 ;i<arr.length-1;i++){
            let minIndex = i 
            for(let j = i+1 ;j<arr.length;j++){
                minIndex = arr[j] > arr[minIndex] ? minIndex : j
            }
            if(minIndex !== i){
                let tem = arr[minIndex]
                arr[minIndex]= arr[i]
                arr[i] = tem
            }
        }
    }
```


# 插入排序 O(N^2) O(1)
- 核心 ： 确定 minIndex 遍历后续数据 找到更小的 minIndex 做交换
- 实现 
```js
    function insertSort(arr){
        if(arr.length<2 || arr==null){
            return 
        }
        for(let i = 1 ;i<arr.length;i++){
            for(let j = i-1 ;j>=0;j--){
                if(arr[j]>arr[j+1]){
                    let tem = arr[j]
                    arr[j]= arr[j+1]
                    arr[j+1] = tem
                }
            }
                
        }
    }
```

# 归并排序 O(N^2) O(N)
- 核心 ： 先划分 再合并 指针遍历 划分的区域 哪个小 存 哪个
- 实现 
```js
    //主函数
    function mergeSort(arr){
        if(arr.length<2 || arr==null){
            return 
        }
        let l = 0 ,r = arr.length-1
        redo(arr,l,r)
    }
    //递归函数
    function redo(arr,l,r){
        if(l<r){
            let m = l+((r-l)>>1)
            redo(arr,l,m)
            redo(arr,m+1,r)
            merge(arr,l,m,r)
        }
    }

    function merge(arr,l,m,r){
        let leftP = l,
        rightP =m+1,
        helpArr = [],
        i=0
        while(leftP <=m && rightP<= r){
            helpArr[i++] = arr[leftP] > arr[rightP] ? arr[rightP++] : arr[leftP++ ]
        }
        while(leftP<=m){
            helpArr[i++] =arr[leftP++]
        }
        while(rightP<=r){
            helpArr[i++] =arr[rightP++]
        }
        for(i=0;i<helpArr.length;i++){
            arr[l+i] = helpArr[i]
        }
    }
```



# 快速排序
- 核心 ： 选取 随机 index 根据对应值 区分 3个区域 大于区域 小于区域 等于区域 再递归 非等于区域 

- 实现
```js
    function quickSort(arr){
        if(arr.length<2||arr==null){
            return 
        }
        let l = 0 ,r = arr.length-1
        redo(arr,l,r)
    }
    function redo(arr,l,r){
        if(l<r){
            //取随机index
            let random =l+ Math.floor(Math.random()*(r-l+1))
            //与数组最后一个数交换
            swap(arr,random,r)
            //获取等于区域的边界 sides[left,right] 等于
            let sides = partition(arr,l,r)
            //递归算 小于区域 和大于区域
            redo(arr,l,sides[0]-1)
            redo(arr,sides[1]+1,r)
        }
    }
    function partition(arr,l,r){
        let lessRight = l-1
        let moreLeft = r
        while(l<moreLeft){
            if(arr[l]>arr[r]){
                swap(arr,--moreLeft,l)
            }else if(arr[l]<arr[r]){
                swap(arr,++lessRight,l++)
            }else{
                l++
            }
        }
        swap(arr,moreLeft,r)
        return [lessRight +1 ,moreLeft]
    }
    function swap(arr,a,b){
        let tem = arr[a]
        arr[a] = arr[b]
        arr[b] = tem
    }
```
