<script>
    import { onMount } from "svelte";
    import { onDestroy } from "svelte";
    import PizzaSiizeSelector from "./PizzaSiizeSelector.svelte";
    import { cart } from "./store/store.js";
    import { fade } from "svelte/transition";

    export let name = "Pizza";
    export let imageUrl = "";
    export let price = 100;
    export let sizes = [];
    export let sweet = [];

    let showSweet = false;
    function toggleSweet() {
        showSweet = !showSweet;
    }

    let selectSize = "1";

    let formatedSize = [];

    let cartList;
    let unsub = cart.subscribe((value) => {
        cartList = value;
    });

    function buyPizza() {
        let newPrice = price;
        if (selectSize == sizes[1]) {
            newPrice += 10;
        } else if (selectSize == sizes[2]) {
            newPrice += 25;
        }
        let newPizza = {
            name: name,
            img: imageUrl,
            price: newPrice,
            count: 1,
            size: selectSize,
        };

        let findPizza = cartList.findIndex(
            (fn) => fn.name == name && fn.size == selectSize,
        );

        if (findPizza >= 0) {
            cartList[findPizza].count++;
            cart.set([...cartList]);
        } else {
            cart.set([...cartList, newPizza]);
        }
        localStorage.setItem("pizzaCart", JSON.stringify(cartList));
    }

    onMount(function () {
        if (typeof sizes[0] == "object") {
            formatedSize = sizes;
        } else {
            formatedSize = sizes.map((fn) => {
                return {
                    name: fn,
                    value: fn,
                };
            });
        }
    });

    onDestroy(unsub);
</script>

<div class="pizza-cart">
    <div class="img">
        <img src={imageUrl} alt="jpg" />
    </div>
    <div class="name">{name}</div>

    <div class="sweet">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={toggleSweet}>
            {#if showSweet}
                Згорнути склад
            {:else}
                Показати склад
            {/if}
        </span>
        {#if showSweet}
            <ul>
                <li transition:fade={{ duration: 200 }}>{sweet.join(", ")}</li>
            </ul>
        {/if}
    </div>

    {#if formatedSize.length > 0}
        <PizzaSiizeSelector
            size={formatedSize}
            bind:selectedValue={selectSize}
        />
    {/if}

    <div class="price-block">
        {#if selectSize == sizes[1]}
            <div class="price">{price + 25} грн</div>
        {:else if selectSize == sizes[2]}
            <div class="price">{price + 75} грн</div>
        {:else}
            <div class="price">{price} грн</div>
        {/if}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="button" on:click={buyPizza}>
            <div class="btn orange">Купити</div>
        </div>
    </div>
</div>
