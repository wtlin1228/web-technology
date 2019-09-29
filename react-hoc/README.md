# React HOC

### 什麼是 Higher Oder Components?
在原本的 component 外面包一個 component，讓原本的 component 有新的功能或是資料，就是 HOC，一個經典的例子就是 `redux` 的 `connect`

HOC 可以大幅減低我們程式碼重複的部分！

### 撰寫 HOC 步驟
1. 寫出你想要重複使用的邏輯
   
    example:

    ```JavaScript
    useEffect(() => {
      if (!auth) {
        history.push('/');
      }
    }, [history, auth]);
    ```

    ```JavaScript
    const mapStateToProps = (state) => {
      return {
        auth: state.auth
      }
    }
    ```

2. 開一個 HOC 檔，然後將 HOC 慣例程式碼放進去

    example:

    ```JavaScript
    import React from 'react';
  
    export default ChildComponent => {
      const ComposedComponent = () => {
        return (
          <ChildComponent />
        );
      }
  
      return ComposedComponent;
    };
    ```

3. 將邏輯放進 HOC

    example:

    ```JavaScript
    import React, { useEffect } from 'react';
    import { connect } from 'react-redux';
  
    export default ChildComponent => {
      const ComposedComponent = ({ history, auth }) => {
        useEffect(() => {
          if (!auth) {
            history.push('/');
          }
        }, [history, auth]);
  
        return (
          <ChildComponent />
        );
      }
  
      const mapStateToProps = (state) => {
        return {
          auth: state.auth
        }
      }
  
      return connect(mapStateToProps)(ComposedComponent);
    };
    ```

4. 將 props/config/behavior 傳進 child 裡面

    example:

    ```JavaScript
    import React, { useEffect } from 'react';
    import { connect } from 'react-redux';

    export default ChildComponent => {
      const ComposedComponent = (props) => {
        const { history, auth } = props;

        useEffect(() => {
          if (!auth) {
            history.push('/');
          }
        }, [history, auth]);

        return (
          <ChildComponent {...props} />
        );
      }

      const mapStateToProps = (state) => {
        return {
          auth: state.auth
        }
      }

      return connect(mapStateToProps)(ComposedComponent);
    };
    ```

