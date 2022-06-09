/**
 * 最简单的冒泡实现
 *  外层循环与内层循环均从前往后 i++  j++ 
 *  缺点 对其 元素 的排序没什么帮助 
 *  eg:[9,1,3,2] 第二次交换  3 会排到数组 末尾 
 * @param {*} arr
 */
function simpleBubbleSort(arr){

    for (let i = 0; i < arr.length-1; i++) {

        for (let j =i+1 ;j< arr.length; j++) {

            if(arr[i]>arr[j]){

                console.log(`${arr[i]} 与 ${arr[j]} 交换`)

                let tem = arr[i]

                arr[i] = arr[j]

                arr[j] =tem

            }
        }
        console.log(arr,'本轮交换后的数组')
    }
}




/**
 *  真正的冒泡排序
 *  外层循环 和 内层循环 是反方向的 i++ j-- ｜｜ i-- j++ 
 *  好处 ： 对其他 元素 的排序 有帮助 
 *  eg:[9,1,3,2]  将 1 冒泡到最前位置时 2 的位置也提升了
 *  优化：当待排序数组是 相当有序的情况下 仅需要 调整 很少次数 通过变量控制 外层循环 避免不必要的操作 eg:[2,1,3,4,5]
 * @param {*} arr
 */
function bubbleSort(arr){
    let flag = true //优化冒泡
    for (let i = 0; i < arr.length && flag; i++) {
        flag = false
        for (let j = arr.length-1; j >=i; j--) {
            if(arr[j]>arr[j+1]){
                console.log(`${arr[j]} 与 ${arr[j+1]} 交换`)
                let tem = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] =tem
                flag = true //优化冒泡  没有数据交换则表明后续 元素 已经排好序了
            }
        }
        console.log(arr,'本轮交换后的数组')
    }
}
// function bubbleSort(arr){
//     let flag = true //优化冒泡
//     for (let i = arr.length-1; i >0 && flag ; i--) {
//         flag = false
//         for (let j = 0; j <i; j++) {
//             if(arr[j]>arr[j+1]){
//                 console.log(`${arr[j]} 与 ${arr[j+1]} 交换`)
//                 let tem = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] =tem
//                 flag = true //优化冒泡  没有数据交换则表明后续 元素 已经排好序了
//             }
//         }
//         console.log(arr,'本轮交换后的数组')
//     }
// }
let a = [2,1,3,4]
// simpleBubbleSort(a)
// bubbleSort(a)
// console.log(a)





