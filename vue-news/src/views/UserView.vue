<template>
  <div>
    <UserProfile :info="userInfo">
        <div slot="username"> {{ userInfo.id }} </div>
        <span slot="time"> {{ 'Joined ' + userInfo.created }}, </span>      
        <span slot="karma"> {{userInfo.karma}} </span>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  // params.id값을 가져와서 dispatch로 actions에 인자와 같이 넘긴다. 그 후 actions에서 받은 인자를 api에 전달해 json을 가져오고
  // json의 데이터를 mutations으로 넘긴 후, mutations에서는 payload로 받아 state로 전달한다. 그리고 computed를 통해 정보를 가져온다.
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName)  
  }
}
</script>

<style>

</style>