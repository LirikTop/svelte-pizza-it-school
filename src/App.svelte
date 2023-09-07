<script>
	import Header from "./Header.svelte";
	import PizzaCart from "./PizzaCart.svelte";
	let arrayPizza = [
		{
			image: "/img/pizza/pizza-1.jpg",
			name: "М'ясна",
			price: 130,
			size: [
				{
					name: "20cm",
					value: 20,
				},
				{
					name: "30cm",
					value: 30,
				},
				{
					name: "40cm",
					value: 40,
				},
			],
		},

		{
			image: "/img/pizza/pizza-2.jpg",
			name: "Сирна",
			price: 150,
			size: [
				{
					name: "20cm",
					value: 20,
				},
				{
					name: "30cm",
					value: 30,
				},
				{
					name: "40cm",
					value: 40,
				},
			],
		},

		{
			image: "/img/pizza/pizza-3.jpg",
			name: "З курятиною",
			price: 110,
			size: [
				{
					name: "20cm",
					value: 20,
				},
				{
					name: "30cm",
					value: 30,
				},
				{
					name: "40cm",
					value: 40,
				},
			],
		},

		{
			image: "/img/pizza/pizza-4.jpg",
			name: "Азійсьа",
			price: 120,
			size: [
				{
					name: "20cm",
					value: 20,
				},
				{
					name: "30cm",
					value: 30,
				},
				{
					name: "40cm",
					value: 40,
				},
			],
		},

		{
			image: "/img/pizza/pizza-5.jpg",
			name: "М'ясна",
			price: 130,
			size: [
				{
					name: "20cm",
					value: 20,
				},
				{
					name: "30cm",
					value: 30,
				},
				{
					name: "40cm",
					value: 40,
				},
			],
		},

		{
			image: "/img/pizza/pizza-7.jpg",
			name: "Сирна",
			price: 150,
			size: [
				{
					name: "20cm",
					value: 20,
				},
				{
					name: "30cm",
					value: 30,
				},
				{
					name: "40cm",
					value: 40,
				},
			],
		},

		{
			image: "/img/pizza/pizza-7.jpg",
			name: "З курятиною",
			price: 110,
			size: [
				{
					name: "20cm",
					value: 20,
				},
				{
					name: "30cm",
					value: 30,
				},
				{
					name: "40cm",
					value: 40,
				},
			],
		},

		{
			image: "/img/pizza/pizza-2.jpg",
			name: "Азійська",
			price: 120,
			size: [
				{
					name: "20cm",
					value: 20,
				},
				{
					name: "30cm",
					value: 30,
				},
				{
					name: "40cm",
					value: 40,
				},
			],
		},
	];
</script>

<Header />
<section id="menu">
	<div class="container">
		{#each arrayPizza as pizza}
			<PizzaCart {...pizza} />
		{/each}
	</div>
</section>
