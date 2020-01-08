<template>
  <div >
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import Bus from "../utils/bus.js"

export default {
  components: {
    ListItem,
  },
  // promise chaining으로 dispatch를 실행한 후, .then으로 이어갈 수 있음.
  created() {
    Bus.$emit('start:spinner')  
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
        .then(() => {
          console.log('fetched')
          Bus.$emit('end:spinner')    
        })
        .catch((error) => {
          console.log(error);
        });      
    }, 2000);      
  }
}
</script>
