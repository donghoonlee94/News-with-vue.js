<template>
  <div>
    <p v-for="item in fetchedAsk" :key="item.id">
      {{item.title}}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      fetchedAsk: 'fetchedAsk',
    })
  },
  created() {
    // fetchAskList()
    //   .then(response => this.ask = response.data)
    //   .catch(error => console.log(error));
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>