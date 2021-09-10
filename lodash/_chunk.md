# lodash源码
import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk

## 我的实现
function chunk(arr,n){
    if(arr.length<1||arr.length<n){
        return arr;
    }else{ 
        var arrb=arr.splice(0,n);
        var arrc=arr;
        console.log(index,arrb,arrc);
    }
}
chunk([1,2,3,4,5,1,2,3,0],3);
// 依靠的是splice方法

## 我的缺点
1. 没有判断n是否是整数，而源码却有判断处理
size = Math.max(toInteger(size), 0)

## 修改之后
function chunk(arr,n){
    n= Math.max(toInteger(size), 0);
    if(arr.length<1||arr.length<n){
        return arr;
    }else{ 
        var arrb=arr.splice(0,n);
        var arrc=arr;
        console.log(index,arrb,arrc);
    }
}
chunk([1,2,3,4,5,1,2,3,0],3);