<template>
    <div id="pagediv">
        <div class="containers">
            <div id="stats">
                <p>Current click multiplier: x{{ $store.getters['upgrades/currentUpgrade'] }}</p>
                <p>The next upgrade will cost {{ $store.getters['upgrades/nextUpgradeCost'] }}</p>
                <p>Current auto multiplier: x{{ $store.getters['upgrades/currentAutoUpgrade'] }}</p>
                <p>Next auto multiplier cost: {{ $store.getters['upgrades/nextAutoUpgradeCost'] }}</p>
            </div>
        </div>

        <h2>{{ $store.state.cooki.cookies }}</h2>

        <div class="containers">
            <div id="buttons">
                <button class="btn" @click="$store.commit('cooki/ajouterCookie', $store.getters['upgrades/currentUpgrade'])">Click!</button>

                <button class="btn" @click="$store.dispatch('upgrades/increaseClick')">Buy upgrade</button>

                <button class="btn" @click="$store.commit('upgrades/secretBypassCostButton')">Cheat button</button>
                
                <button class="btn" @click="$store.dispatch('upgrades/autoFarm')">Purchase Auto Farm</button>
                
                <button class="btn" @click="$store.dispatch('upgrades/increaseAutoCursor')">increase auto test</button>
            </div>
        </div>
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
        font-size: 72px;
    }

    p {
        font-size: 24px;
    }

    #style {
        color: rgb(248, 246, 246);
    }

    div {
        margin: 10em 0 0 0;
    }

    #buttons {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: auto;
        justify-content: space-between;
    }

    .btn {
        font-weight: bolder;
        font-size: 36px;
        border-color: blue;
        border-width: 2px;
        border-style: solid;
    }

    #stats {
        min-width: auto;
        text-align: center;
    }

    #pagediv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 1000px;
        border: pink 2px solid;
    }

    .containers {
        height: 100%;
        display: block;
        border: green 2px solid;
        text-align: center;
        justify-content: space-between;
        flex-direction: column;
    }

    h2, #stats, #buttons {
        vertical-align: middle;
        border: 2px purple solid;
    }
</style>