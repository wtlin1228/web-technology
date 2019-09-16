# Type Ahead

1. 使用 fetch 來拿到城市的資料
```JavaScript
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
```

2. 監聽 input 改變的事件
```JavaScript
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

```

3. 使用 regular expression 依照 input 的值來比對城市資料
```JavaScript
function addCommas(input) {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matches = filterMatches(this.value, cities);
  
  const html = matches.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${addCommas(place.population)}</span>
      </li>
    `;
  }).join('');
}
```

4. 顯示符合的城市資料
```JavaScript
function displayMatches() {
  // ...

  suggestions.innerHTML = html;
}
```

## 參考連結
https://javascript.info/regular-expressions