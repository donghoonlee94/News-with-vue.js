<template>
  <div >
    <p v-for="user in this.$store.state.news" :key="user.id">
          {{user}}
    </p>
  </div>
</template>

<script>

export default {
  created() {
    // 원래 비동기 함수 내에서 this를 사용하기 위해서는 vm = this를 만들고 vm.users로 접근했으나, 화살표 함수에서 this는 상위를 보기 때문에 아래처럼 가능하다.
    // fetchNewsList()
    //   .then(response => this.users = response.data)
    //   .catch(error => console.log(error));

    this.$store.dispatch('FETCH_NEWS');
  },
}
</script>

<style>

</style>