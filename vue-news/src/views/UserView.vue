<template>
  <div>
    <p>name:{{userInfo.id}}</p>
    <p>created: {{userInfo.created}}</p>
    <p>karma: {{userInfo.karma}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  // params.id값을 가져와서 dispatch로 actions에 인자와 같이 넘긴다. 그 후 actions에서 받은 인자를 api에 전달해 json을 가져오고
  // json의 데이터를 mutations으로 넘긴 후, mutations에서는 payload로 받아 state로 전달한다. 그리고 computed를 통해 정보를 가져온다.

  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName)  
  }
}
</script>

<style>

</style>