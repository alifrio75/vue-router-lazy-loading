import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
// import Foo from '@/components/Foo';
import {
  Foo,
  Bar,
} from './chunks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo,
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar,
    },
  ],
});

