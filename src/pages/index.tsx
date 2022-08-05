import yayJpg from "../assets/yay.jpg";
import demo from "demoModule/index.js";
import demoJsx from "demoModule/index.jsx";
import styles from "./index.less";

export default function HomePage() {
  demo();
  demoJsx();
  console.log(styles,'styles')
  
  
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
