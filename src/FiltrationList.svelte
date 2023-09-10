<script>
    export let arrayList = [];

    export let selectFilter;
</script>

<div class="filter-list">
    {#each arrayList as item}
        <label>
            <input
                type="radio"
                name="filter"
                value={item.value}
                bind:group={selectFilter}
            />
            <span class="btn black">{item.name}</span>
        </label>
    {/each}
</div>

