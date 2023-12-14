<script>
    import { clickOutside } from "./directive/clickOutside.js";
    import { fade } from "svelte/transition";

    let openList = false;

    let themes = [
        { id: "light", icon: "fa-brands fa-telegram", label: "Telegram" },
        { id: "dark", icon: "fa-solid fa-phone", label: "Phone" },
    ];
</script>

<!-- on:mouseenter={toggleHover}
on:mouseleave={toggleHover} -->
<div
    class="theme-popup"
    use:clickOutside
    on:click-outside={() => {
        openList = false;
    }}
>
    {#each themes as { id, icon, label }}
        <input type="radio" name="theme" {id} />
    {/each}
    <input type="checkbox" id="checkbox" />

    <label for="checkbox" class="theme-popup__button">
        <span class="theme-popup__icons">
            <i class="fa-solid fa-bars"></i>
        </span>
        <!-- Contact -->
    </label>

    <div
        class="theme-popup__list-container"
        transition:fade={{ duration: 200 }}
    >
        <ul class="theme-popup__list">
            {#each themes as { id, icon, label }}
                <li>
                    <label for={id}>
                        <span class="theme-popup__icons">
                            <i class={icon}></i>
                        </span>
                        <span>{label}</span>
                    </label>
                </li>
            {/each}
        </ul>
    </div>
</div>
