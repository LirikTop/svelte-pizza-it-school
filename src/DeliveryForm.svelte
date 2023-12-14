<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let name = "";
    let phone = "";
    let city = "";
    let address = "";
    let paymentMethod = "";

    const cities = ["Вінниця", "Київ", "Харків", "Одеса", "Дніпро"]; // список міст
    city = cities[0]; // встановити перше місто зі списку за замовчуванням

    function submitForm() {
        // тут можна додати валідацію форми
        const deliveryDetails = { name, phone, city, address, paymentMethod };
        console.log(deliveryDetails);
        closeForm();
    }

    function closeForm() {
        dispatch("close");
    }
</script>

<!-- <div class="delivery-form">
    <div class="container form">
        <div class="form-header title">
            <h2>Форма доставки</h2>
            <button class="close" on:click={closeForm}>X</button>
        </div>
        <div class="form-body delete-all">
            <input bind:value={name} placeholder="Ім'я" />
            <input bind:value={phone} placeholder="Номер телефону" />
            <select bind:value={city}>
                {#each cities as cityOption}
                    <option>{cityOption}</option>
                {/each}
            </select>
            <input bind:value={address} placeholder="Адреса проживання" />
            <div>
                <label>
                    <input
                        type="radio"
                        bind:group={paymentMethod}
                        value="cash"
                    />
                    Готівкою
                </label>
                <label>
                    <input
                        type="radio"
                        bind:group={paymentMethod}
                        value="card"
                    />
                    Без готівки
                </label>
            </div>
            <button on:click={submitForm}>Підтвердити</button>
        </div>
    </div>
</div> -->

<div class="delivery-form">
    <form class="form">
        <div class="title flex">
            <h2>Форма доставки</h2>
            <button class="close" on:click={closeForm}>X</button>
        </div>
        <label>
            <input
                bind:value={name}
                required=""
                placeholder=""
                type="text"
                class="input"
            />
            <span>Ім'я</span>
        </label>

        <!-- <label>
            <input required="" placeholder="" type="email" class="input" />
            <span>email</span>
        </label> -->

        <label>
            <input
                bind:value={phone}
                required=""
                type="tel"
                placeholder=""
                class="input"
            />
            <span>Номер телефону</span>
        </label>
        <select class="form-select" bind:value={city}>
            {#each cities as cityOption}
                <option>{cityOption}</option>
            {/each}
        </select>
        <label
            ><input
                bind:value={address}
                placeholder="Адреса проживання"
                class="input"
            /></label
        >

        <label>
            <input type="radio" bind:group={paymentMethod} value="cash" />
            Готівкою
        </label>
        <label>
            <input type="radio" bind:group={paymentMethod} value="card" />
            Без готівки
        </label>
        <label>
            <textarea required="" rows="3" placeholder="" class="input01"
            ></textarea>
            <span>message</span>
        </label>

        <div>
            <button class="btn black" href="#">
                <span class="top-key"></span>
                <span class="text">Замовити</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
            </button>
        </div>
    </form>
</div>
