<template>
  <div>
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
  created() {
    Bus.$emit('start:spinner')  
    setTimeout(() => {
    this.$store.dispatch('FETCH_ASK')
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
