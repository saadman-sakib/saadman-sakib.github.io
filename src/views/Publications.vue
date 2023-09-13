<template>
    <div>
      <h4>My Publications</h4>
      <div v-for="publication in publications" :key="publication.title">
        <div class="card">
          <h5>{{ publication.title }}</h5>
          <p>
          {{ publication.description }} <br>
          <small>{{ publication.date }}</small> 
        </p>
        </div>
      </div>
  
    </div>
  </template>
  
  
  <script lang="ts">
  
  export default {
    name: 'Publications',
    data() {
      return {
        publications: [
          {
            title: 'Intracranial Hemorrhage Classification from CT Scan Using Deep Learning and Bayesian Optimization',
            description: "Our model will help doctors make better-informed decisions and provide better patient care by ensuring accurate and reliable diagnosis",
            date: '2022'
          },
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