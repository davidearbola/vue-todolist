console.log(`Main collegato`);

const { createApp } = Vue;

createApp({
	data() {
		return {
			// 		toDoList: [
			// 			"Milestone 0",
			// 			"Milestone 1",
			// 			"Milestone 2",
			// 			"Bonus",
			// 			"Bonus 2",
			// 		],
			// 		valoreInput: "",
			// 		removeIcon: "fa-solid fa-x",
			// 	};
			// },
			// methods: {
			// 	addToDo(valore, array) {
			// 		console.log(valore);
			// 		array.push(valore);
			// 		console.log(array);
			// 		this.valoreInput = ""; // valore = ""; non funziona
			// 	},
			// 	removeToDo(array, indice) {
			// 		console.log(array[indice]);
			// 		array.splice(indice, 1);
			// 		console.log(array);
			// 	},
			// },
			toDoList: [
				{ stringa: "Milestone 0", done: true },
				{ stringa: "Milestone 1", done: true },
				{ stringa: "Milestone 2", done: true },
				{ stringa: "Bonus", done: true },
				{ stringa: "Bonus 2", done: true },
			],
			valoreInput: "",
			removeIcon: "fa-solid fa-x",
		};
	},
	methods: {
		addToDo(valore, array) {
			array.push({ stringa: valore, done: true });
			this.valoreInput = ""; // valore = ""; non funziona
		},
		removeToDo(array, indice) {
			array.splice(indice, 1);
		},
	},
	mounted() {
		console.log("Applicazione montata");
	},
}).mount("#app");
