import type { App, Plugin } from "vue"
import { each } from "lodash-es"

// 定义一个函数，接收一个数组，返回一个install函数
export function makeInstaller(components: Plugin[]) {
  const install = (app: App) => {
    each(components,(com) => {app.use(com)})
  }
  return install
}

type SFCWithInstall<T> = T & Plugin
// 定义一个函数，接收一个组件，返回一个带有install方法的组件
export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    app.component(name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};
