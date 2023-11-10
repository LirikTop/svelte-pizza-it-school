<script>
    import { createEventDispatcher } from "svelte";
    export let name = "";
    export let size = "0";
    export let number = 0;
    export let img = "/img/pizza/pizza-1.jpg";

    export let startPrise = 100;

    let dispatcher = createEventDispatcher();

    $: countPrice = startPrise * number;
</script>

<div class="item cart">
    <div class="image">
        <img src={img} alt="X" />
    </div>
    <div class="info">
        <div class="name">{name}</div>
        <div class="type">{size}cm.</div>
    </div>
    <div class="number">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="button"
            on:click={() => {
                number == 0 ? number : number--;
                dispatcher("change", {
                    count: number,
                });
            }}
        >
            -
        </div>
        <div class="count">{number}</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="button"
            on:click={() => {
                number++;
                dispatcher("change", {
                    count: number,
                });
            }}
        >
            +
        </div>
    </div>
    <div class="price">{countPrice} грн</div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="delete"
        on:click={() => {
            dispatcher("delete");
        }}
    >
        ✖
    </div>
</div>
