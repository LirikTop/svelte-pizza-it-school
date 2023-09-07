<script>
    import PizzaSiizeSelector from "./PizzaSiizeSelector.svelte";

    export let name;
    export let image;
    export let price;

    export let size = [];
</script>

<div class="pizza-cart">
    <div class="img">
        <img src={image} alt="jpg" />
    </div>
    <div class="name">{name}</div>

    <PizzaSiizeSelector size={size}/>

    <div class="price-block">
        <div class="price">від {price}грн</div>
        <div class="button">
            <div class="btn orange">Купити</div>
        </div>
    </div>
</div>
