export const upgrades = {

    namespaced: true,

    state() {

        return {

            upgrades: [
                1, 2, 5, 10, 20, 50, 100, 200, 500,
                1000, 2000, 5000, 10000, 20000, 50000,
                100000, 200000, 500000, 1000000
            ],

            cost: [
                10, 20, 50, 100, 200, 500, 1000, 2000, 5000,
                10000, 20000, 50000, 100000, 200000, 500000,
                1000000, 2000000, 5000000, 10000000
            ],

            cursor: 0
        }
    },

    mutations: {

        increaseClick(state) {
            state.cursor++;
        },

        secretBypassCostButton(state) {

            if (state.cursor >= state.upgrades.length - 1) {

                window.alert("Max upgrade! x1000000 (million)");

            } else {

                state.cursor++;

                console.log('cursor index: ', state.cursor);
                console.log('upgrades length: ', state.upgrades.length);
                console.log('upgrade number: ', state.upgrades[state.cursor]);
            }
        }
    },

    actions: {

        increaseClick({ commit, rootState, state }) {

            // Already at maximum upgrade
            if (state.cursor >= state.upgrades.length - 1) {

                window.alert("Max upgrade! x1000000 (million)");
                return;
            }

            // Not enough cookies
            if (rootState.cooki.cookies < state.cost[state.cursor]) {

                window.alert("Not enough cookies!");
                return;
            }

            // Remove the cookies from the cookies module
            commit(
                'cooki/deduireCookie',
                state.cost[state.cursor],
                { root: true }
            );

            // Move to the next upgrade
            commit('increaseClick');

            console.log('cursor index: ', state.cursor);
            console.log('upgrades length: ', state.upgrades.length);
            console.log('upgrade number: ', state.upgrades[state.cursor]);
        }
    },

    getters: {

        currentUpgrade: state => state.upgrades[state.cursor],

        nextUpgradeCost: state => state.cost[state.cursor]

    },

}