<template>
<nav class="navbar navbar-light navbar-expand-md  d-flex">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navcol-1">
        <ul class="navbar-nav mx-auto expa">
          <li :class="{ active:is_about_me }"  class="nav-item">
            <router-link to="/" class="nav-link">About me</router-link>
          </li>
          <li :class="{ active:is_skills }" class="nav-item">
            <router-link  to="/skills" class="nav-link">Skills</router-link>
          </li>
           <li :class="{ active:is_education }" class="nav-item">
            <router-link  to="/education" class="nav-link">Education</router-link>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Experiences</a></li>
        </ul>
      </div>
      <ul class="navbar-nav d-print-none float-none d-md-none d-lg-none d-xl-none flex-row mx-auto colap">
        <li class="nav-item ">
          <router-link to="/" class="nav-link"><i class="fa fa-user"></i></router-link>
        </li>
        <li class="nav-item ">
          <router-link to="/skills" class="nav-link"><i class="fa fa-check-square-o"></i></router-link>
        </li>
        <li class="nav-item ">
          <router-link to="/education" class="nav-link"><i class="fa fa-graduation-cap"></i></router-link>
        </li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-th-list"></i></a></li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-eye"></i></a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="outside">
      <div class="inside">
          <transition name="route" mode="out-in">
            <router-view :key="$route.fullPath"/>
          </transition>
      </div>
    </div>
  </div>

  <br><br><br><br>
  <div class="fab-container">
    <div class="fab shadow">
      <div class="fab-content">
        <span class="material-icons">contacts</span>
      </div>
    </div>
    <div class="sub-button shadow">
      <a href="https://github.com/saadman-sakib" target="_blank">
        <span class="material-icons"><i class="fa fa-github" aria-hidden="true"></i></span>
      </a>
    </div>
    <div class="sub-button shadow">
      <a href="mailto:saadman.sakib@gmail.com" target="_blank">
        <span class="material-icons">mail</span>
      </a>
    </div>
    <div class="sub-button shadow">
      <a href="https://facebook.com" target="_blank">
        <span class="material-icons">facebook</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    is_about_me () {
      return this.$route.path === '/'
    },
    is_skills () {
      return this.$route.path === '/skills'
    },
    is_education () {
      return this.$route.path === '/education'
    }
  }
}
</script>

<style>
.expa > .nav-item > a.router-link-exact-active {
    color: #8fbcbb !important;
}

.nav-item > a.router-link-exact-active > i {
    color: #8fbcbb !important;
}

.nav-item:has(a.router-link-exact-active){
    background: #eceff4 ;
    border-radius: 4px ;
}
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.route-enter-active {
  transition: all .1s ease-in;
}

.route-leave-active {
  transition: all .1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

</style>
