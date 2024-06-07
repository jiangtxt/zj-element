import Button from "./Button.vue";
import { withInstall } from "../../utils/index";

// 加上intsall方法，方便按需引入
export const ZjButton = withInstall(Button);
