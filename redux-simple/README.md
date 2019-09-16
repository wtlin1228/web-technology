# Redux Simple

純粹的 Redux

### Note
Redux Cycle:

Action Creator → Action → Dispatch → Reducers → State

+ Action Creator: 一個 function，會回傳一個 Object，也就是 Action
+ Action: 包含兩個部分 Type & Payload
+ Dispatch: 會複製 Action 然後將這些 Actions 送給 Reducers
+ Reducers: 一個 function，負責處理 Action，用處理好的資料更新 State
+ State: 給我們的 application 用