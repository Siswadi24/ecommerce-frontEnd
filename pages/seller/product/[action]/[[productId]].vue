<template>
  <div>{{ route.params.action }} - {{ route.params.productId }}</div>
</template>

<script setup>
const route = useRoute();
definePageMeta({
  validate: ({ params }) => {
    if (params.action === "add") {
      return !params.productId;
    }
    return params.action === "edit" && !!params.productId;
  },
});
</script>

<style lang="scss" scoped>
</style>