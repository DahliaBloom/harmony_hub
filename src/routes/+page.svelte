<script lang="ts">
    import Home from "$lib/views/Home.svelte";
    import Login from "$lib/views/Login.svelte";

    let isLoggedIn = false;
</script>

{#if isLoggedIn}
    <Home/>
{:else}
    <Login on:loggedIn={() => {isLoggedIn = true}}/>
{/if}