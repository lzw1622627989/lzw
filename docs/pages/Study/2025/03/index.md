# 2025-03

## 03-15

### 妙用随机数

```js
// 返回一个随机颜色
function getRandomColor() {
  return '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0');
}

// 返回一个随机字符串
function getRandomString(len = 10) {
  return len <= 11
    ? Math.random()
        .toString(36)
        .substring(2, 2 + len)
        .padEnd(len, '0')
    : getRandomString(11) + getRandomString(len - 11);
}
```

### 惰性函数

第一次执行的时候把函数的功能最终确定下来

```js
// 把内容复制到粘贴板
function copyText(text) {
  if (navigator.clipboard) {
    copyText = (text) => {
      navigator.clipboard.writeText(text);
    };
  } else {
    copyText = (text) => {
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    };
  }
  copyText(text);
}
```

### 封装数字动画

```js
/* 
        from: 起始值
        to: 目标值
        duration: 动画持续时间
        onProgress: 动画执行过程中的回调函数
        */
function animation({ from, to, duration, onProgress }) {
  // 设置目标值
  let resValue = from;
  // 速度
  let speed = (to - from) / duration;
  // 开始时间
  let stratTime = Date.now();
  function _run() {
    // 执行时间
    let time = new Date().getTime() - stratTime;

    // 当执行时间大于等于目标时间，动画结束，返回目标值
    if (time >= duration) {
      resValue = to;
      onProgress && onProgress(resValue);
      return;
    }
    //   目标值=起始值+ 速度* 执行时间
    resValue = from + speed * time;
    //持续返回目标值
    onProgress && onProgress(resValue);
    // 持续执行动画
    requestAnimationFrame(_run);
  }
  _run();
}
```

## 03-16

### 防抖

```js
// 个人理解：类似于回城效果打断后重新计时
function debounce(fn, time = 1000) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
}
```

### 节流

```js
// 个人理解：类似于技能释放，释放后进入冷却，冷却结束后才能再次释放
function throttle(fnc, wait) {
  let lastTime = null;
  return function (...args) {
    let now = Date.now();
    if (lastTime == null || now - lastTime > wait) {
      lastTime = now;
      fnc.apply(this, args);
    }
  };
}
```
