<script>
    import { onMount } from "svelte";

    export let size = [];

    let selectedValue = "1";

    $: windowPosition = getPosition(selectedValue);

    function getPosition(selectedValue) {
        let value = size.findIndex((fn) => {
            if (fn.value == selectedValue) {
                return true;
            }
        });

        return (33.333 * value).toString() + "%";
    }

    onMount(function () {
        if (!!size[0]) {
            selectedValue = size[0].value;
        }
    });
</script>

<div class="selector">
    <div class="type" />
    <div class="size">
        {#if size.length > 0}
            <span class="window" style="left: {windowPosition};" />
        {/if}

        {#each size as item}
            <label>
                <input
                    type="radio"
                    bind:group={selectedValue}
                    name="size"
                    value={item.value}
                />
                {item.name}
            </label>
        {/each}
    </div>
</div>
