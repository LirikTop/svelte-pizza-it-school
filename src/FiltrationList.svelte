<script>
    export let arrayList = [];

    export let selectFilter;
</script>

<div class="filter-list">
    {#each arrayList as filter}
        <label>
            <input
                type="radio"
                name="filter"
                value={filter.value}
                bind:group={selectFilter}
            />
            <span class="btn black">{filter.name}</span>
        </label>
    {/each}
</div>

