# React Context API

如果我們想要將資料從 A 經過 B 經過 C 傳到 D，原始的做法會是利用 porp 一層一層傳下去，但如果使用 Context 的話就可以解決這個問題。

提供資料方稱為 Provider
接收資料方稱為 Consumer

## Context API without hooks

這種做法有一個問題，就是當我們需要很多個 Context 的時候，例如:
1. `ThemeContext`
2. `LanguageContext`
3. `TimezoneContext`
   
這個時候 Provider 和 Consumer 的元件都會需要三層巢狀結構，會醜醜的，這稱為 **Context Hell**。

## Context API with hooks

用 Consumer 取值的時候只需要用 useContext(ContextName) 就可以拿到 Context 的 value，避免了 **Context Hell**。