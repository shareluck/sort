// function quickSort(arr){
//     console.log(arr,'待排序数组。。。。。')
//     if(arr==null || arr.length<2){
//         return 
//     }
//     let l = 0 , r = arr.length-1
//     console.log(`需要在${l}到${r}的区域内排序。。。。`)
//     process(arr,l,r)
// }

// function process(arr,l,r){
//     console.log('递归开始。。。')
//     if(l>=r){
//         return
//     }
//     //取一个 随机数 index 与数组最后的 index 做交换
//     //生成随机数 
//     let random =Math.floor(l + Math.random()*(r-l+1))
//     console.log(`生成随机 index ${random}.....`)
//     //交换
//     console.log('交换')
//     swap(arr,random,r)
//     console.log(arr,'交换后的数组.....')
//     //用最后一个位置的数  去做划分  返回  等于区域的左右边界 sides [] sides[0]-1 为小于区域的右边界 sides[1] +1 为大于区域的左边界
//     let sides =  partition(arr,l,r)
//     console.log(sides,'做完划分后的 等于区域的 边界。。。。')
//     process(arr,l,sides[0]-1)
//     process(arr,sides[1]+1,r)
// }

function swap(arr,i,j){
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}

// function partition(arr,l,r){
    
//     let p1 = l -1 , // < 区域 的 右边界
//     p2 = r // > 区域的 左边界
//     //当 当前位置 l 小于 > 区域的 左边界 p2 时候循环
//     while(l < p2){
//         //如果当前位置的数 大于 选定的 目标数 
//         if(arr[l]>arr[r]){
//             //交换 当前位置  并将 > 区域左扩 当前位置不动
//             swap(arr,--p2,l)
//         //如果当前位置的数 小于 选定的 目标数 
//         }else if(arr[l]<arr[r]){
//             //交换 当前位置  并将  < 区域右扩 当前位置 右移
//             swap(arr,++p1,l++)
//         }else{
//             //如果相等 当前位置 右移
//             l++
//         }
//     }
//     console.log(arr,11111)
//     swap(arr,p2,r)
//     return [p1+1,p2]
// }

// let a = [5,2,3,6,4,3,2,1]
// quickSort(a)
// console.log(a)




function sort(arr){
    if(arr.length <2 || arr== null){
        return
    }
    let l = 0 , r = arr.length-1
    process1(arr,l,r)
    
}


function process1(arr,l,r){
    if(l>=r){
        return
    }
    let random =  Math.floor(l +Math.random()*(r-l+1) )
    swap(arr,random,r)
    let sides = partition1(arr,l,r)
    process1(arr,l,sides[0]-1)
    process1(arr,sides[1]+1,r)
}

function partition1(arr,l,r){
    let p1 = l-1
    let p2 = r 
    while(l<p2){
        if(arr[l] > arr[r]){
            swap(arr,--p2,l)
        }
        else if(arr[l] < arr[r]){
            swap(arr,++p1,l++)
        }else{
            l++
        }
    }
    swap(arr,p2,r)
    return [p1++,p2]
}

let b = [2,421,51,2516,2,6,12,61,27,2,7,21,7,217,12,72,1,212,]
sort(b)
console.log(b)
