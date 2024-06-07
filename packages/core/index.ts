import { makeInstaller } from "@zj-element/utils";
import components from "./components";
import '@zj-element/theme/index.css'

// 组件数组安装器
const installer = makeInstaller(components);

// 导出组件
export * from "@zj-element/components";

// 导出安装器
export default installer;
