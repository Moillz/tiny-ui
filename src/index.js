import TiButton from './components/button';

const components = {
  TiButton,
};

const TinyUI = {
    TiButton: TiButton,
}

const install = function(Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(TinyUI).forEach(key => {
      Vue.component(key, TinyUI[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    ...components
};

export default API

