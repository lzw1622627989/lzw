## 一维数组的动态和  
> 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。请返回 nums 的动态和。    


-  **例子**  
输入：nums = [1,2,3,4]  
输出：[1,3,6,10]  
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。  
- **题解**  
```js
var runningSum = function(nums) {

    for(let i =1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
};
```  

## 将数字变成 0 的操作次数  
> 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。  
- **例子**  
输入：num = 14  
输出：6  
解释：  
步骤 1) 14 是偶数，除以 2 得到 7 。  
步骤 2） 7 是奇数，减 1 得到 6 。  
步骤 3） 6 是偶数，除以 2 得到 3 。  
步骤 4） 3 是奇数，减 1 得到 2 。  
步骤 5） 2 是偶数，除以 2 得到 1 。  
步骤 6） 1 是奇数，减 1 得到 0 。  

- **题解**
```js
    function numberOfSteps(num) {
            let count = 0;
            while (num > 0) {
                if (num % 2 === 0) {
                    num = num / 2;
                } else {
                    num -= 1;
                }
                count += 1;
            }
            return count
        };
```  

## 最富有客户的资产总量  
> 给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。
>客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户  
- **例子**  
输入：accounts = [[2,8,7],[7,1,3],[1,9,5]]  
输出：17  
```js
    function maximumWealth(accounts){
            let arr =[]
            accounts.forEach((item,i) => {
                arr[i]=item.reduce((a,b)=>a+b)
            });
            return Math.max(...arr)
        }
```  

## Fizz Buzz  
> 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：  
>answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。  
>answer[i] == "Fizz" 如果 i 是 3 的倍数。  
>answer[i] == "Buzz" 如果 i 是 5 的倍数。  
>answer[i] == i （以字符串形式）如果上述条件全不满足。  

- **例子**  
输入：n = 15  
输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]  

- 题解  
```js
function fizzBuzz(n){
            let arr =[]
            for(let i=1;i<=n;i++){
                if(i%3===0&&i%5===0){
                    arr.push('FizzBuzz')
                }else if(i%3===0){
                    arr.push('Fizz')
                }
                else if(i%5===0){
                    arr.push('Buzz')
                } 
                else{
                    arr.push(i.toString());
                }
            }
            return arr

        }
```  

## 赎金信  
> 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。  
>如果可以，返回 true ；否则返回 false 。  
>magazine 中的每个字符只能在 ransomNote 中使用一次。  
- 例子  
输入：ransomNote = "aa", magazine = "aab"  
输出：true  
```js
function canConstruct(ransomNote, magazine) {
            if (ransomNote.length > magazine.length) return false
            let arr1 = [...ransomNote];
            let arr2 = [...magazine];
            arr2.forEach(item => {
                if (arr1.includes(item)) {
                    let i = arr1.indexOf(item);
                    arr1.splice(i, 1)
                }
            })
            return arr1.length > 0 ? false : true;
        }
```