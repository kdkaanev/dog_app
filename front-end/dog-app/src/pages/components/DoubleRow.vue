<script>
export default {
  props: {
    gap: {
      type: String,
      default: '1rem',
      validator: value => typeof value === 'string' && value.includes('rem'),
    },
  },
};
</script>

<template>
  <div class="d">
    <slot />
  </div>
</template>

<style scoped>
.d{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: v-bind(gap);
}
</style>