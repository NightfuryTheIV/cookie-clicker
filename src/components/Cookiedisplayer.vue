<template>
    <div id="pagediv">
        <div class="containers">
            <div id="stats">
                <p>Current click multiplier: x{{ $store.getters['upgrades/currentUpgrade'] }}</p>
                <p v-if="$store.getters['upgrades/currentUpgrade'] != 1000000">The next upgrade will cost {{ $store.getters['upgrades/nextUpgradeCost'] }}</p>
                <p>Current auto multiplier: x{{ $store.getters['upgrades/currentAutoUpgrade'] }}</p>
                <p v-if="$store.getters['upgrades/currentAutoUpgrade'] != 16">Next auto multiplier cost: {{ $store.getters['upgrades/nextAutoUpgradeCost'] }}</p>
                <p>Time since start: {{ $store.getters['timer/formatted'] }}</p>
            </div>
        </div>

        <h2>{{ $store.state.cooki.cookies }}</h2>

        <div class="containers">
            <div id="buttons">
                <button class="btn" @click="$store.commit('cooki/ajouterCookie', $store.getters['upgrades/currentUpgrade'])">Click!</button>

                <button v-if="$store.getters['upgrades/currentUpgrade'] != 1000000" class="btn" @click="$store.dispatch('upgrades/increaseClick')">Buy Multiplier Upgrade</button>
                
                <button v-if="$store.getters['upgrades/currentAutoUpgrade'] == 0.5" class="btn" @click="$store.dispatch('upgrades/autoFarm')">Purchase Auto Production</button>
                
                <button v-if="($store.getters['upgrades/currentAutoUpgrade'] != 16) && ($store.getters['upgrades/currentAutoUpgrade'] != 0.5)" class="btn" @click="$store.dispatch('upgrades/increaseAutoCursor')">Buy Auto Multiplier Upgrade</button>

                <button v-if="$store.getters['upgrades/currentUpgrade'] != 1000000" id="cheat" @click="$store.commit('upgrades/secretBypassCostButton')">DO NOT CLICK!!!! (cheat button)</button>
            </div>
        </div>
    </div>

    <div>
        <h1>The lab specific area:</h1>
        <p>Double cookie value: <a id="style">{{ $store.getters['cooki/doubleCookies'] }}</a></p>

        <button @click="$store.dispatch('cooki/ajouterCookieAvecDelai', 2)">Button that adds after a 2 second delay (you probably don't wanna press this.)</button>
    </div>

</template>

<style scoped>
    h2 {
        color: chocolate;
        font-size: 72px;
    }

    p {
        font-size: 20px;
    }

    #style {
        color: rgb(248, 246, 246);
    }

    .btn {
        font-weight: bolder;
        font-size: 36px;
        border-color: blue;
        border-width: 2px;
        border-style: solid;
        width: 100%;
    }

    #stats {
        min-width: auto;
        text-align: center;
        margin-right: 72px;
    }

    #stats p {
        white-space: nowrap;
    }

    #pagediv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-width: 1000px;
        height: 600px;
    }

    .containers {
        display: block;
        text-align: center;
        flex-shrink: 0;
    }

    h2, #stats, #buttons {
        margin: 0;
    }

    #buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #cheat {
        font-weight: bolder;
        font-size: 36px;
        color: red;
        background-color: black;
        opacity: 0.05; /* this is almost transparent just for fun */
    }
</style>