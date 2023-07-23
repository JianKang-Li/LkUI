import LkButton from './src/button.vue';

LkButton.install = function (Vue) {
  Vue.component(LkButton.name, LkButton);
};

export default LkButton;