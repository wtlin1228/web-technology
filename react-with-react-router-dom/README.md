# React with React Router DOM

### React-Router 和 React-Router-DOM 之間的區別

React-Router 不能直接操作 DOM 物件，而 React-Router-DOM 可以

### Router 之間的區別

+ BrowserRouter：在部署的時候，要確定每一個 path 都會返回 index.html，否則如果我們打 `unasees.com/page1`，但是 server 上面並沒有 page1 這個檔案，他就會返回 404 Not Found。
+ HashRouter：在 domain 還有 path 之間會有一個 #，像是 `unasees.com/#/page1`，server 只會看 # 前面的部分，所以每次 server 都會返回 index.html，就不會有 404 Not Found 的問題。
+ MemoryRouter：path 不會反映在 url 上面

### 永遠都會出現的元件

像是 `<Header />`，不管 navigate 到哪個 path，永遠都要存在的元件，就不要把它包進 Router 裡面

但是如果在 `<Header />` 要用到像是 `<Link />` 的元件，那就要將 `<Header />` 放進 Router 裡面