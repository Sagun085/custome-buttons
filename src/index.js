import * as components from "./components";

const Buttons = components?.default;
const CustomButtons = {
  install(Vue) {
    Object.keys(Buttons).forEach((name) => {
      Object.keys(Buttons[name]).forEach((_name) => {
        Vue.component(_name, Buttons[name][_name]);
      });
    });
  },
};

export default CustomButtons;
