<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- <transition name="page"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import Bus from "./utils/bus.js"

export default {
  data() {
    return {
      loadingStatus: false,
    }
  },
  components: {
    ToolBar,
    Spinner,
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  // 라이프 사이클 훅을 통해 중간 통로 Bus.js를 이용해서 다른 컴포넌트에서 $emit한 이벤트 이름을 on을 통해 받는다. 두번째 인자는 이벤트를 받고 실행할 함수를 지정할 수 있음.
  created() {
    Bus.$on('start:spinner', this.startSpinner);
    Bus.$on('end:spinner', this.endSpinner);
    console.log(process.env.VUE_APP_TITLE);
  },
  // 이벤트 버스는 이벤트 객체가 계속 쌓이기 때문에 오프롤 꼭 해줘야 한다. 
  beforeDestroy() {
    Bus.$off('start:spinner', this.startSpinner);
    Bus.$off('end:spinner', this.endSpinner);
  },
}
</script>

<style>
body {
  padding: 0; 
  margin: 0;
}

a {
  color: #35495e;
  text-decoration: none;
}

a.router-link-exact-active {
  text-decoration: underline;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
