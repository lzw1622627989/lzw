# Promise 详解  
资料参考[Promise 详解](https://juejin.cn/post/7063377198014529572)  
 Promise是一个状态机，分为 3 种状态
- pending：待定状态，执行了 executor 后，处于该状态
- fulfilled：兑现状态，调用resolve()后，Promise 的状态更改为 fullfilled，且无法再次更改
- rejected：拒绝状态，调用reject()后，Promise 的状态更改为 rejected，且无法再次更改  
```js 
function request() {
  const flag = Math.random() <= 0.5 ? true : false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve('成功的状态消息') //当调用resolve回调函数时，会执行 Promise 对象的then方法传入的回调
        return
      }
      reject('失败的状态消息') //当调用reject回调函数时，会执行 Promise 对象的catch方法传入的回调
    }, 2000)
  })
}

// 模拟请求
request().then(msg => console.log(msg), err => console.log(err))
```
## then 方法
```js 
new Promise(resolve => {
  resolve('data')
}).then(res => console.log(res)) // 输出data
```
```js 
const promise =new Promise(resolve=>{
    resolve('data')
})

// 调用几次输出几次
promise.then(res=>{console.log(res)}) //data
promise.then(res=>{console.log(res)}) //data
promise.then(res=>{console.log(res)}) //data
```
## catch 方法
```js 
const promise =new Promise((resolve,reject)=>{
    reject('error')
})

promise.then().catch(err=>{
    console.log(err)//error
})

// 调用几次输出几次
promise.then().catch(err=>{console.log(err)}) //error
promise.then().catch(err=>{console.log(err)}) //error
promise.then().catch(err=>{console.log(err)}) //error
```

##  finally 方法
    finally 是 ES9 新增的一个特性，无论一个Promise实例是fulfilled或rejected，finally都会执行。  
    finally 不接收参数。
```js 
const rejPromise =new Promise((resolve,reject)=>{
    reject('error')
})
const resPromise =new Promise(resolve=>{
    resolve('res')
})

rejPromise.then().catch(err=>{
    console.log(err)//error
}).finally(()=>{
    console.log('finally') //finally
})

resPromise.then(res=>{
     console.log(res)//'res'
}).finally(()=>{
   console.log('finally') //finally 
})
```
## resolve 方法
    将一个数据转直接换为一个 Promise 实例直接进入fulfilled状态
```js{1} 
// 不用 new 关键字
function test(data){
    return  Promise.resolve(data);

}

test({data:3}).then(res=>{
    console.log(res.data)//3
})

```
## reject 方法
     将一个方法直接换为一个 Promise 实例直接进入rejected状态
```js {1}
// 不用 new 关键字
function test(){
    return  Promise.reject('error');
}

test().then().catch(err=>{
    console.log(err)//error
})
```

## all 方法
Promise.all()接收一个Promise[]，返回一个Promise实例，当所有的 Promise 执行完毕并且都是fulfilled时，该实例的状态才会变为fulfilled，只要队列中有一个实例的状态是rejected，那么该实例的状态也会变为rejected
如果 Promise 队列中所有的实例状态都是fulfilled，那么Promise.all()返回的实例的状态就会变为fulfilled，并且resolve()的参数是一个数组，按照顺序放置队列中每个 Promise 成功后的结果

```js 
function test(i){
    return Promise.resolve('success'+i)
}

const allPromiseList=[test(1),test(2),test(3),test(4)];

Promise.all(allPromiseList).then(res=>{
    console.log(res)//['success1','success2','success3','success4']
})
```
```js 
function test(i){
    if(i===2){
        return Promise.reject('error')
    }else{
        return Promise.resolve('success'+i)
    }
}

const allPromiseList=[test(1),test(2),test(3),test(4)];

// 有一个是rejected返回 第一个rejected状态
Promise.all(allPromiseList).then(res=>{
    console.log(res)
}).catch(err=>{
     console.log(err) //erroe
})
```

## allSettled 方法  
all方法是有缺陷的，如果在 Promise 队列中有一个状态是 rejected，那么我们就无法获取到其他 fullfilled 以及 pending 的 Promise 实例了。
针对这一情况，在 ES11(ES2020) 中新增了一个 API，Promise.allSettled()
- 该方法返回的 Promise 实例，会在所有 Promise 实例执行完毕后，状态方可变为fulfilled，并且只会是fulfilled
- 无论队列中的Promise 实例的状态如何，都能获取到结果
- 打印的结果，会包含状态与值/原因
```js 
function test(i){
    if(i===2){
        return Promise.reject('error')
    }else{
        return Promise.resolve('success'+i)
    }
}

const allPromiseList=[test(1),test(2),test(3),test(4)];

// 所有都是fulfilled状态
Promise.allSettled(allPromiseList).then(res=>{
    console.log(res)// [{status: 'fulfilled', value: 'success1'},{status: 'rejected', reason: 'error'},{status: 'fulfilled', value: 'success3'},{status: 'fulfilled', value: 'success4'}]
})
```

## race 方法
Promise.race()同样接收一个 Promise 队列，返回一个 Promise 实例。该方法会对队列任务完成情况进行监听，如果某一个任务最先完成fulfilled/rejected，那么返回的实例的状态也会变成对应的fulfilled/rejected，同时获取到最先完成的结果

```js
const allPromiseList =[
    new Promise((resolve,reject)=>{
       let timer4= setTimeout(()=>{
            reject('error3')
            clearTimeout(timer4)
        },10000)
   }),
   new Promise((resolve)=>{
       let timer1= setTimeout(()=>{
            resolve('success1')
            clearTimeout(timer1)
        },1000)
   }),
   new Promise((resolve)=>{
       let timer2= setTimeout(()=>{
            resolve('success2')
            clearTimeout(timer2)
        },2000)
   }),
   new Promise((resolve)=>{
       let timer3= setTimeout(()=>{
            resolve('success3')
            clearTimeout(timer3)
        },3000)
   }),
   
]

Promise.race(allPromiseList).then(res=>{
    console.log(res) //success1
})
 ```

 ## any 方法  
 Promise.any()会等待第一个fulfilled的 Promise ，如果队列中没有fulfilled，那么就会返回一个错误  
 - any 方法会等待一个fulfilled状态，才会决定返回 Promise 实例的状态
 - 如果队列中所有的实例都是rejected状态，那也需要等到所有执行完毕后才会决定返回的 Promise 实例的状态
```js
const allPromiseList =[
    new Promise((resolve,reject)=>{
       let timer4= setTimeout(()=>{
            reject('error3')
            clearTimeout(timer4)
        },10000)
   }),
   new Promise((resolve)=>{
       let timer1= setTimeout(()=>{
            resolve('success1')
            clearTimeout(timer1)
        },5000)
   }),
   new Promise((resolve)=>{
       let timer2= setTimeout(()=>{
            resolve('success2')
            clearTimeout(timer2)
        },2000)
   }),
   new Promise((resolve)=>{
       let timer3= setTimeout(()=>{
            resolve('success3')
            clearTimeout(timer3)
        },3000)
   }),
   
]

Promise.any(allPromiseList).then(res=>{
    console.log(res) //success2
})
 ```
