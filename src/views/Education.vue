<template>
  <div>
    <h4>My Education</h4>
    <div v-for="education in educations" :key="education.title">
      <div class="card">
        <h5>{{ education.title }}</h5>
        <p>
          {{ education.description }} <br>
          <small>{{ education.date }}</small> 
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
      educations: [
        {
          title: 'BSc in Robotics and Mechatronics Engineering',
          description: 'University of Dhaka, Bangladesh',
          date: '2020 - 2024'
        },
        {
          title: 'Higher Secondary Certificate (HSC)',
          description: 'Notre Dame College, Dhaka, Bangladesh',
          date: '2019'
        },
        {
          title: 'Secondary School Certificate (SSC)',
          description: 'Chittaong Collegiate School, Chittagong, Bangladesh',
          date: '2017'
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