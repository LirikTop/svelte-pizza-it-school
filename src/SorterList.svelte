<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";

    let dispatcher = createEventDispatcher();

    let sorterList = [
        {
            name: "популярність",
            val: 1,
        },
        {
            name: "ціна",
            val: 2,
        },
        {
            name: "алфавіт",
            val: 3,
        },
    ];

    let selectSort = 0;

    let openList = false;

    $: selectName = sorterList[selectSort].name;

    function sendSelectSort(index) {
        selectSort = index;

        dispatcher("select", {
            value: sorterList[index].val,
        });
    }
</script>

<div class="sorter-list">
    <div class="selected">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        сортувати за:
        <span
            class="name"
            on:click={() => {
                openList = !openList;
            }}>{selectName}</span
        >
    </div>

    {#if openList}
        <div class="list" transition:fade={{ duration: 200 }}>
            <ul>
                {#each sorterList as sort, index}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li
                        class:active={selectSort === index}
                        on:click={() => {
                            sendSelectSort(index);
                            selectName = sort.name;
                        }}
                    >
                        {sort.name}
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>
