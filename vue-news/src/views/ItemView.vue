<template>
  <div>
    {{userItem.content}}
  </div>
</template>

<script>
export default {
  computed: {
    userItem() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemList = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemList)
  }
}
</script>

<style>

</style>