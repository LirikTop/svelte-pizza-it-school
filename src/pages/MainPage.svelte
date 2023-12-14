<script>
	import axios from "axios";
	import FiltrationList from "../FiltrationList.svelte";
	import SorterList from "../SorterList.svelte";
	import PizzaCart from "../PizzaCart.svelte";
	import { onMount } from "svelte";
	import FloatingComponent from "../FloatingComponent.svelte";

	let url = "http://localhost:3000/pizzas";
	// let url = "https://raw.githubusercontent.com/LirikTop/Json_pizza/main/db.json";
	// let url = "/.netlify/functions/db";

	let arrayPizza = [];
	let arrayFilter = [
		{
			name: "Всі",
			value: "",
		},
		{
			name: "М'ясні",
			value: "0",
		},
		{
			name: "Вегетеріанські",
			value: "1",
		},
		{
			name: "Ґриль",
			value: "2",
		},
		{
			name: "Гострі",
			value: "3",
		},
		{
			name: "Закриті",
			value: "4",
		},
	];

	let selectFilter = arrayFilter[0].value;
	let selectSort = 0;
	$: updatePizzas(selectFilter, selectSort);

	function updatePizzas(filter, sort) {
		axios({
			method: "get",
			dataType: "json",
			url: url,
		})
			.then((response) => {
				let pizzas = response.data;
				if (filter !== "") {
					pizzas = pizzas.filter((pizza) =>
						pizza.types.includes(Number(filter)),
					);
				}
				switch (sort) {
					case 0:
						pizzas.sort((a, b) => b.rating - a.rating);
						break;
					case 1:
						pizzas.sort((b, a) => b.price - a.price);
						break;
					case 2:
						pizzas.sort((a, b) => a.name.localeCompare(b.name));
						break;
				}
				arrayPizza = pizzas;
			})
			.catch((e) => {
				console.warn(e);
			});
		// let newUrl = url;
		// if (selectFilter !== "") {
		// 	axios({
		// 		method: "get",
		// 		url: newUrl,
		// 	})
		// 		.then((response) => {
		// 			arrayPizza = response.data.filter((pizza) =>
		// 				pizza.types.includes(Number(filter)),
		// 			);
		// 		})
		// 		.catch((e) => {
		// 			console.warn(e);
		// 		});
		// }
		// let partl = "&";
		// if (selectFilter == "") {
		// 	partl = "?";
		// }
		// switch (selectSort) {
		// 	case 0:
		// 		newUrl += partl + "_sort=rating&_order=desc";
		// 		break;
		// 	case 1:
		// 		newUrl += partl + "_sort=price&_order=desc";
		// 		break;
		// 	case 2:
		// 		newUrl += partl + "_sort=name&_order=asc";
		// 		break;
		// }
		// axios({
		// 	method: "get",
		// 	url: newUrl,
		// })
		// 	.then((response) => {
		// 		arrayPizza = response.data;
		// 	})
		// 	.catch((e) => {
		// 		console.warn(e);
		// 	});
	}
	function getSorter(e) {
		selectSort = e.detail.value;
	}
</script>

<section id="main">
	<div class="container filter">
		<FiltrationList arrayList={arrayFilter} bind:selectFilter />
		<SorterList on:select={getSorter} />
	</div>
	<div class="container">
		{#each arrayPizza as pizza (pizza.id)}
			<PizzaCart {...pizza} />
		{/each}
	</div>
</section>
