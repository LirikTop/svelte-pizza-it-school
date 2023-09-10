<script>
	import axios from "axios";
	import { onMount } from "svelte";
	import FiltrationList from "./FiltrationList.svelte";
	import Header from "./Header.svelte";
	import PizzaCart from "./PizzaCart.svelte";
	import SorterList from "./SorterList.svelte";
	let arrayPizza = [
		// {
		// 	image: "/img/pizza/pizza-1.jpg",
		// 	name: "М'ясна",
		// 	price: 130,
		// 	sizes: [
		// 		{
		// 			name: "20cm",
		// 			value: 20,
		// 		},
		// 		{
		// 			name: "30cm",
		// 			value: 30,
		// 		},
		// 		{
		// 			name: "40cm",
		// 			value: 40,
		// 		},
		// 	],
		// },
		// {
		// 	image: "/img/pizza/pizza-2.jpg",
		// 	name: "Сирна",
		// 	price: 150,
		// 	sizes: [
		// 		{
		// 			name: "20cm",
		// 			value: 20,
		// 		},
		// 		{
		// 			name: "30cm",
		// 			value: 30,
		// 		},
		// 		{
		// 			name: "40cm",
		// 			value: 40,
		// 		},
		// 	],
		// },
		// {
		// 	image: "/img/pizza/pizza-3.jpg",
		// 	name: "З курятиною",
		// 	price: 110,
		// 	sizes: [
		// 		{
		// 			name: "20cm",
		// 			value: 20,
		// 		},
		// 		{
		// 			name: "30cm",
		// 			value: 30,
		// 		},
		// 		{
		// 			name: "40cm",
		// 			value: 40,
		// 		},
		// 	],
		// },
		// {
		// 	image: "/img/pizza/pizza-4.jpg",
		// 	name: "Азійсьа",
		// 	price: 120,
		// 	sizes: [
		// 		{
		// 			name: "20cm",
		// 			value: 20,
		// 		},
		// 		{
		// 			name: "30cm",
		// 			value: 30,
		// 		},
		// 		{
		// 			name: "40cm",
		// 			value: 40,
		// 		},
		// 	],
		// },
		// {
		// 	image: "/img/pizza/pizza-5.jpg",
		// 	name: "М'ясна",
		// 	price: 130,
		// 	sizes: [
		// 		{
		// 			name: "20cm",
		// 			value: 20,
		// 		},
		// 		{
		// 			name: "30cm",
		// 			value: 30,
		// 		},
		// 		{
		// 			name: "40cm",
		// 			value: 40,
		// 		},
		// 	],
		// },
		// {
		// 	image: "/img/pizza/pizza-7.jpg",
		// 	name: "Сирна",
		// 	price: 150,
		// 	sizes: [
		// 		{
		// 			name: "20cm",
		// 			value: 20,
		// 		},
		// 		{
		// 			name: "30cm",
		// 			value: 30,
		// 		},
		// 		{
		// 			name: "40cm",
		// 			value: 40,
		// 		},
		// 	],
		// },
		// {
		// 	image: "/img/pizza/pizza-7.jpg",
		// 	name: "З курятиною",
		// 	price: 110,
		// 	sizes: [
		// 		{
		// 			name: "20cm",
		// 			value: 20,
		// 		},
		// 		{
		// 			name: "30cm",
		// 			value: 30,
		// 		},
		// 		{
		// 			name: "40cm",
		// 			value: 40,
		// 		},
		// 	],
		// },
		// {
		// 	image: "/img/pizza/pizza-2.jpg",
		// 	name: "Азійська",
		// 	price: 120,
		// 	sizes: [
		// 		{
		// 			name: "20cm",
		// 			value: 20,
		// 		},
		// 		{
		// 			name: "30cm",
		// 			value: 30,
		// 		},
		// 		{
		// 			name: "40cm",
		// 			value: 40,
		// 		},
		// 	],
		// },
	];

	let arrayFilter = [
		{
			name: "Всі",
			value: "",
		},

		{
			name: "М'ясні",
			value: 0,
		},

		{
			name: "Вегатеріянскі",
			value: 1,
		},

		{
			name: "Ґриль",
			value: 2,
		},

		{
			name: "Гострі",
			value: 3,
		},

		{
			name: "Закриті",
			value: 4,
		},
	];

	let url = "http://localhost:3000/pizzas";

	let selectFilter = arrayFilter[0].value;

	let selectSort = 0;

	$: updatePizzas(selectFilter, selectSort);
	function updatePizzas(filter, sort) {
		let newUrl = url;
		if (selectFilter !== "") {
			newUrl += "?category=" + filter;
		}
		let partl = "&";
		if (selectFilter == "") {
			partl = "?";
		}
		switch (selectSort) {
			case 0:
				newUrl += partl + "_sort=rating&_order=desc";
				break;
		}
		axios({
			method: "get",
			url: newUrl,
		})
			.then((response) => {
				arrayPizza = response.data;
			})
			.catch((e) => {
				console.warn(e);
			});
	}
	function getSorter(e) {
		selectSort = e.detail.value;
	}

	//
	// onMount(function () {
	// 	axios({
	// 		method: "get",
	// 		url: "http://localhost:3000/pizzas",
	// 	})
	// 		.then((response) => {
	// 			arrayPizza = response.data;
	// 		})
	// 		.catch((e) => {
	// 			console.warn("Error", e);
	// 		});
	// });
</script>

<Header />
<section id="menu">
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
