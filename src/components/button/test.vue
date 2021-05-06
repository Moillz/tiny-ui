<template>
  <div :class="className" @eventName="handleEventFunc">
    <template v-if="showSlot">
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'componentName',
  props: {
    propA: {
      type: [Number], //可以为JS的所有基础类型
      default: 0 // 默认值
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
}
</script>
