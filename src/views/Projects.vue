<template>
  <div class="education">
    <h4>My Projects</h4>
    <div v-for="project in projects" :key="project.title">
      <div class="card">
        <h5>{{ project.title }}</h5>
        <p>
          {{ project.description }} <br>
          <small>{{ project.date }}</small> 
        </p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Gesture Controlled Manipulatior',
          description: 'An IoT based gesture controlled Manipulator with Deeplearning',
          date: '2023'
        },
        {
          title: 'Cat Feeder',
          description: 'An IoT based Cat feeder, including a mobile application',
          date: '2022'
        },
        {
          title: 'Video Calling App',
          description: 'Peer to Peer connecting video calling application',
          date: '2020'
        }
      ]
    }
  },
  created() {
    // get request from url
    // this.getData();
  }
}
</script>


<style scoped>
.card {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>