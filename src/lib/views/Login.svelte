<script lang="ts">
    import Logo from "$lib/images/icon.svg";
    import Key from "$lib/images/key.svg";
    import Mail from "$lib/images/mail.svg";
    import {createEventDispatcher} from 'svelte';

    let email = "";
    let password = "";
    let error = false;
    let loading = false;
    let zoomTransition = false;
    let circleTransition = false;

    const dispatch = createEventDispatcher();

    function handleSubmit(event: Event) {
        event.preventDefault();
        zoomTransition = true;

        setTimeout(() => {
            circleTransition = true;
            setTimeout(() => {
                dispatch('loggedIn')
            }, 800)
        }, 1000);
    }
</script>

<div class="h-screen flex flex-col items-center place-content-center gap-16 overflow-hidden">
    <img src={Logo} alt="Logo"
         class="w-1/2 transition-transform ease-in duration-1000 transform z-40 {zoomTransition ? 'scale-[20]' : ''}"/>
    <div class="w-2/3">
        <form on:submit={handleSubmit}>
            <div class="relative">
                <input type="email" placeholder="Email" bind:value={email}/>
                <img src={Mail} alt="" class="icon">
            </div>
            <div class="h-3"></div>
            <div class="relative">
                <input type="password" placeholder="Password" bind:value={password}/>
                <img src={Key} alt="" class="icon">
            </div>
            <div class="h-8"></div>
            <button type="submit" class="bg-primary text-white py-2 px-4 rounded" disabled={loading}>
                Login
            </button>
        </form>
    </div>
    <div class="fixed w-screen z-50 grid place-items-center {circleTransition ? '' : 'opacity-0'}">
        <div class="aspect-square w-[1px] bg-bg rounded-full transition-transform duration-1000 ease-in transform {circleTransition ? 'scale-[2000]' : ''}"></div>
    </div>
</div>

<style lang="postcss">
    input {
        width: 100%;
        background-color: theme("colors.bg");
        border: 0.07rem solid theme("colors.primary");
        border-radius: 999px;
        padding: 0.5rem 1rem;
        font-family: "Playwrite US Modern", cursive;
        font-size: 0.9rem;
        color: white;
    }

    input:focus {
        outline: none;
    }

    input:not(:placeholder-shown) + .icon {
        filter: brightness(90);
    }

    button {
        font-family: "Playwrite US Modern", cursive;
        width: 100%;
        border-radius: 999px;
    }

    .icon {
        position: absolute;
        right: 0.5rem;
        top: 0;
        height: 100%;
        padding: 0.7rem;
    }
</style>