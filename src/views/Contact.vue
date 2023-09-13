<template>
    <!-- card with logo -->

    <!-- for loop-->
    <div v-for="info in infos" :key="info.name">
        <div class="card">
            <div class="card__name">
                <!-- bootstrap icon -->
                <i :class=info.logo ></i>
                {{ info.name }}
            </div>
            <div class="card__email">{{ info.data }}</div>
        </div>
    </div>


    
</template>
  
<script lang="ts">
export default {
    data() {
        return {
            infos: [
                {
                    name: "mail",
                    data: "saadman.sakib2020@gmail.com",
                    logo: "fa fa-envelope",
                },
                {
                    name: "linked-in",
                    data: "https://www.linkedin.com/in/sdmn-skb/",
                    logo: "fa fa-linkedin",
                },
                {
                    name: "github",
                    data: "github.com/saadman-sakib",
                    logo: "fa fa-github",
                },
                {
                    name: "address",
                    data: "Dhaka, Bangladesh",
                    logo: "fa fa-home",
                }
            ]
        }
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