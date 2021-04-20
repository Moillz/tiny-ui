import Button from './button.vue';
import ButtonGroup from './button-group.vue';

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
}
Button.Group = ButtonGroup;
export default Button;