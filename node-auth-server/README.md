# Node Auth Server

A server for auth purpose.

### Usage

1. `$ npm install`
2. open your mongodb
3. create a `config.js`
4. `$ npm run start`

### 功能

有三個主要的流程
1. /signup -> 檢查 body -> 檢查 email 有沒有備用過 -> 把密碼加密 -> 存到 DB -> 回傳一個 JWT token

2. /signin -> 檢查使用者有沒有存在 -> 比較密碼 -> 回傳一個 JWT token

3. other requests -> 檢查 JWT token -> 回傳資料

### nodemon
用來監控所有檔案的更動，只要有改變就重啟 server，適合開發用

### morgan
用來做 logging，適合開發用

### MongoDB Doc
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

start mongodb: 
`brew services start mongodb-community@4.2`

stop mongodb: 
`brew services stop mongodb-community@4.2`
