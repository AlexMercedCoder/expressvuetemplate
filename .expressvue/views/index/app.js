import Vue from "vue";
import App from "/home/alexmerced/development/Personal/Templates3/expressvuetemp/views/index.vue";

export function createApp(data) {
    const mergedData = Object.assign(App.data ? App.data() : {}, data);
    App.data = () => (mergedData)
 
    const app = new Vue({
        data,
        render: h => h(App),
    });
    return { app };
}