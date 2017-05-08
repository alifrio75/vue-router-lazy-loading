/* eslint-disable */

// const view = (com) => r => require([`@/components/${com}.vue`], r);

/**
 * NOT WORKING!!
 * Get a warning from webpack if we require modules dynamically.
 * Critical dependency: require function is used in a way in which dependencies cannot be statically extracted!!
 */
const groupView = (com) => r => {
  console.log(com, `group-${com}`);
  return require.ensure([`@/components/${com}.vue`], function (require) {
    r(require(`@/components/${com}.vue`))
  }, `group-${com}`);
};

/** Successful solution */
export const Foo = r => require.ensure([], () => r(require('@/components/Foo.vue')), 'group-foo');
export const Bar = r => require.ensure([], () => r(require('@/components/Bar.vue')), 'group-bar');
