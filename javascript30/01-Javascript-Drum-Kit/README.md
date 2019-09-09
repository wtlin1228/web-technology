# Javascript Drum Kit

1. 監聽 `keydown` 事件
   ```javascript
   window.addEventListener('keydown', playSound);
   ```
   
2. 播放對應的 `audio`
   ```javascript
    function playSound(e) {
      // use e.keyCode to select
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      audio.currentTime = 0;
      audio.play();
    }
   ```

3. 播放時加上 `playing` 的 CSS 效果
   ```javascript
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
   ```

4. 播放完畢要移除 `playing` 的 CSS 效果
   ```javascript
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.addEventListener('transitionend', removePlaying);
    });

    function removePlaying(e) {
      if (e.propertyName !== 'transform') return

      this.classList.remove('playing');
    }
   ```
