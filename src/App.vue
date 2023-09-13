<template>
	<main class="container">
		<div class="grid row">
			<div class="col-md col1">
				<div>
					<div class="center-cropped">
					</div>
					<div class="heading">
						<h1>Saadman Sakib</h1>
					</div>
					<RouterLink to="/">About</RouterLink> /
					<RouterLink to="/education">Education</RouterLink> /
					<RouterLink to="/projects">Projects</RouterLink> /
					<br>
					<RouterLink to="/publications">Publications</RouterLink> / 
					<RouterLink to="/contact">Contact</RouterLink>
					<br><br> 
					<!-- <h2>{{ text }}</h2> -->
				</div>
			</div>
			<div class="col-md col1">
				<!-- <div class="scroll"> -->
					<RouterView />
				<!-- </div> -->
			</div>
		</div>
	</main>
</template>


<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
	name: 'App',
	components: {
		RouterLink,
		RouterView
	},
	methods: {
		// get request from url
		async getData() {
			const url = 'https://jsonplaceholder.typicode.com/todos/1'
			const response = await fetch(url)
			const data = await response.text()
			const obj = JSON.parse(data)
			this.text = obj.title
		}
	},
	data() {
		return {
			text: ''
		}
	},
	created() {
		// invoke('fetch_data').then((message) => this.text = message)
	}
}


</script>




<style scoped>
.heading{
	margin-top: 20px;
	margin-bottom: 20px;
}

.grid {
	margin-top: 15%;
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
}

.col1{
	margin-right: 0%;
}

.col2{
	margin-left: 0%;
}

.scroll {
	overflow-y: scroll;
	height: 500px;
	padding: 5%;
	border-radius: 5px;
}

.center-cropped {
	height: 260px;
	width: 260px;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url('./assets/sakib.jpg');
	background-size: cover;
	border-radius: 2%;
	/* shadow */
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

a {
	color: #4c90b8;
	text-decoration: none;
}
a.router-link-active {
	color: #3b6886;
	/* underline text */
	text-decoration: underline;
}

</style>