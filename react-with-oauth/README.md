# React with OAuth

### 傳統的認證方法：

1. 將使用者的帳號密碼存在自己的資料庫
2. 使用者要登入時，比對帳號密碼
3. 登入成功

### OAuth 認證方法：

1. 使用第三方認證服務，像是 Google，Linkedin，Facebook
2. 使用者同意 app 使用他們的資訊
3. 第三方告訴我們使用者的資訊
4. 我們相信第三方能夠驗證使用者
5. 登入成功

### OAuth 步驟：

1. [ 瀏覽器 ] 使用者按下 Login with Google
2. [ 瀏覽器 ] 使用 google's JS lib 開始 OAuth
3. [ Google Server ] google's JS lib 發出請求到 google server
4. [ Google Server ] 彈出一個確認視窗
5. [ Google Server ] 使用者確認
6. [ Google Server ] 關閉視窗
7. [ 瀏覽器 ] google's JS lib 執行 callback function
8. [ 瀏覽器 ] 拿到 auth token 以及使用者資訊

### Setup for google Oauth

1. 在 google developer console 創一個新專案
2. 設定 OAuth 認證視窗
3. 產生 OAuth Client ID
4. 安裝 Google API 套件，並且用 OAuth Client ID 來初始化
5. 確定 Google API 套件有被執行當使用者按下 "Login with Google" 按鈕

### How to use gapi

1. gapi.load('client:auth2')
2. gapi.client.init({ clientId: 'client id' })
3. const auth = gapi.auth2.getAuthInstance()
4. auth.signIn()
5. auth.signOut()
