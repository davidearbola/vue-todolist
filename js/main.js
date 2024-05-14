console.log(`Main collegato`);

const { createApp } = Vue;

createApp({
	data() {
		return {
			toDoList: [
				"Milestone 0",
				"Milestone 1",
				"Milestone 2",
				"Bonus",
				"Bonus 2",
			],
		};
	},
	methods: {},
	mounted() {
		console.log("Applicazione montata");
	},
}).mount("#app");
