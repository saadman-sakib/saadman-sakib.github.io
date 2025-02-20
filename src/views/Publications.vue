<template>
  <div>
    <h4>My Publications</h4>
    <div v-for="publication in publications" :key="publication.title">
      <div class="card">
        <a :href=publication.link >{{ publication.title }}</a>
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
          date: '2022',
          link:'https://ieeexplore.ieee.org/abstract/document/10198438'
        },
        {
          title: 'Deep learning for mango leaf disease identification: A vision transformer perspective',
          description: "we evaluated the performance of vision transformers in identification of mango leaf diseases and compare them with popular CNNs. ",
          date: '2024',
          link:'https://www.cell.com/heliyon/fulltext/S2405-8440(24)12392-4'
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

a {
  color: #4c90b8;
  text-decoration: none;
}

a:hover {
  color: #3b6886;
  /* underline text */
  text-decoration: underline;
}
</style>