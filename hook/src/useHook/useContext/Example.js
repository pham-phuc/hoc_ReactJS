import React, { useContext } from "react";
import { ThemeContext} from "./ThemeProvide.js";
function Example() {
  const context = useContext(ThemeContext);
//   console.log(context)
  return (
    <div className={context.theme }>
      <p className="mt-5 ">
        useContextlà một trong những hooks cơ bản của React, được sử dụng để{" "}
        <br />
        truyền dữ liệu giữa các thành phần con trong cây thành phần của ứng
        <br />
        dụng. Nó cho phép tránh việc truyền các props qua nhiều cấp thành phần,
        <br />
        giúp làm cho mã nguồn của bạn trở nên sáng sủa hơn.
      </p>
      <p className="mt-5">
        Sử dụng useContext, chúng ta có thể truy cập trực tiếp vào bất kỳ đối
        <br />
        tượng Context nào trong cây thành phần của ứng dụng, và lấy các giá trị
        <br />
        mà nó cung cấp cho các thành phần con.
      </p>
    </div>
  );
}

export default Example;
