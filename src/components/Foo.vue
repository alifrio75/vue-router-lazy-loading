<template>
  <div>
    <span>Foo</span>
    <foo-1></foo-1>
  </div>
</template>

<script>
import FooSub1 from '@/components/FooSub1';

export default {
  name: 'foo',
  components: {
    'foo-1': FooSub1,
  },
};
</script>
