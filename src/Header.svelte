<script>
    import Button from "./Button.svelte";
    import { link } from "svelte-spa-router";
    import { cart } from "./store/store.js";

    let cartList;
    let unsub = cart.subscribe((value) => {
        cartList = value;
    });

    $: sumPrice = countSumPrice(cartList);
    function countSumPrice(array) {
        let price = 0;
        array.forEach((element) => {
            price += element.price * element.count;
        });

        return price;
    }
</script>

<header id="header">
    <div class="container">
        <div class="logo">
            <div class="img">
                <a href="/"><img src="/img/logo.png" alt="logo.png" /></a>
            </div>
            <div class="text">
                <div class="name">Svelte pizza</div>
                <div class="description">найсмачніша піца</div>
            </div>
        </div>
        <div class="card-button">
            <a href="/cart" class="btn orange" use:link>
                <b>$</b>{sumPrice} | <span>{cartList.length}</span>
            </a>
        </div>
    </div>
</header>
