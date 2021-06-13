import  {createApp}  from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/style.css";

createApp(App).mount('#app')


/*
Vue.use(VueAnalytics, {
    // [Required] The name of your app as specified in Google Analytics.
    appName: 'karpad2',
    // [Required] The version of your app.
    appVersion: '1.0.1',
    // [Required] Your Google Analytics tracking ID.
    trackingId: 'UA-37379369-3',
    // If you're using vue-router, pass the router instance here.
    vueRouter: router,
  
    // Global Dimensions and Metrics can optionally be specified.
    globalDimensions: [
      { dimension: 1, value: 'FirstDimension' },
      { dimension: 2, value: 'SecondDimension' }
      // Because websites are only 2D, obviously. WebGL? What's that?
    ],
  
    globalMetrics: [
      { metric: 1, value: 'MyMetricValue' },
      { metric: 2, value: 'AnotherMetricValue' }
    ]
  });*/
