<template>
  <div>
    <p v-for="job in this.$store.state.jobs" :key="job.id">
      <a :href="job.url">
        {{job.title}}
      </a>
      <small>{{job.time_ago}}, {{job.domain}}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(error => console.log(error));
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>