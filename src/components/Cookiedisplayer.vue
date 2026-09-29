<template>
    <div>
        <h2>{{ $store.state.cooki.cookies }}</h2>
        <p>Current click multiplier: x{{ $store.getters['upgrades/currentUpgrade'] }}</p>

        <button @click="$store.commit('cooki/ajouterCookie', $store.getters['upgrades/currentUpgrade'])">AJOUTE UN COOKIE LAAAAAAA</button>

        <button @click="$store.dispatch('upgrades/increaseClick')">Buy upgrade</button>

        <p>The next upgrade will cost {{ $store.getters['upgrades/nextUpgradeCost'] }}</p>

        <button @click="$store.commit('upgrades/secretBypassCostButton')">Cheat button</button>
        
        <button @click="$store.dispatch('upgrades/autoFarm')">Purchase Auto Farm</button>
        
        <button @click="$store.dispatch('upgrades/increaseAutoCursor')">increase auto test</button>

        <p>Current auto multiplier: x{{ $store.getters['upgrades/currentAutoUpgrade'] }}</p>
        <p>Next auto multiplier cost: {{ $store.getters['upgrades/nextAutoUpgradeCost'] }}</p>
    </div>

    <div>
        <h1>The lab specific area:</h1>
        <p>Double cookie value: <a id="style">{{ $store.getters['cooki/doubleCookies'] }}</a></p>

        <button @click="$store.dispatch('cooki/ajouterCookieAvecDelai', 2)">Button that adds after a 2 second delay (you probably don't wanna press this.)</button>
    </div>

</template>

<style>
    h2 {
        color: chocolate;
    }

    #style {
        color: rgb(248, 246, 246);
    }

    div {
        margin: 10em 0 0 0;
    }
</style>