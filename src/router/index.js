import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import GroupView from './chunks';

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
      component: GroupView('Foo'),
    },
    {
      path: '/bar',
      name: 'Bar',
      component: GroupView('Bar'),
    },
  ],
});

