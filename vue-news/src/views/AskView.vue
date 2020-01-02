<template>
  <div>
    <p v-for="item in fetchedAsk" :key="item.id">
      <router-link :to="`/item/${item.id}`">
        {{item.title}}
      </router-link>
      <small>{{item.time_ago}} by {{item.user}}</small>      
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