<script>
	import FiltrationList from "../FiltrationList.svelte";
	import SorterList from "../SorterList.svelte";
	import PizzaCart from "../PizzaCart.svelte";
	import { onMount } from "svelte";
	import FloatingComponent from "../FloatingComponent.svelte";
	import {arrayPizza as originalArrayPizza} from "../dataBase/db_pizza.js"

	let arrayPizza = [...originalArrayPizza];
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
		let pizzas = [...originalArrayPizza];
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
