const template = `<div>
          <h2>{{title}} <br/> {{name}}</h2>
          </div>`;

const data = function data() {
  return {
    title: "My Vue",
    name: "tonmoy",
  };
};

const App = { data,
  template,
};
const myVue = Vue.createApp(App);

myVue.mount("#vue-app");

console.log();
