# CSS Variables

SASS 本來就有變數的功能了，為什麼還需要 CSS Variables 呢？

因為 SASS 的變數都是預先編譯好，沒有辦法利用 JS 去改變，但是 CSS Variables 可以用 JS 改變，達到互動的效果。

1. 撰寫 CSS Variables

```CSS
  :root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
  }
```

2. 在 CSS 中使用 CSS Variables

```CSS
  img {
    background: var(--base);
    padding: var(--spacing);
    filter: blur(var(--blur));
  }

  .hl {
    color: var(--base);
  }
```

3. 監聽 input 改變的事件

```JavaScript
  // 3. 監聽 input 改變的事件
  const inputs = document.querySelectorAll('.controls input');
  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  // 需要 mousemove 的原因：change 只有在放開滑鼠的時候才會觸發，但我們想要一直觸發
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

4. 依照 input 的 value 去改變 CSS Variables

```JavaScript
  // 4. 依照 input 的 value 去改變 CSS Variables
  function handleUpdate() {
    // 因為在 input 有 data-sizing="px"，所以可以從 this.dataset 取值
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
```

補充：也可以直接在 `.hl` 的 element 上面加上 style 指定 CSS Variables

```HTML
  <span class='hl' style='--base: black'>JS</span>
```

這樣一來 JS 的顏色就不會根據 `:root` 的 CSS Variables 改變。