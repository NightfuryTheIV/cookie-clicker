export const upgrades = {

    namespaced: true,

    state() {
        return {
            upgrades: [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000],
            cost: [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000],
            cursor: 0,
            autofarms: [0.5, 1, 2, 4, 8, 16],
            autocosts: [100, 1000, 10000, 100000, 1000000],
            autocursor: 0,
            autofarmon: false
        }
    },

    mutations: {
        increaseClick(state) {
            state.cursor++;
        },

        secretBypassCostButton(state) {
            if (state.cursor >= state.upgrades.length - 1) {
                return;
            } else {
                state.cursor++;
            }
        }, 

        increaseAutoCursor(state) {
            state.autocursor++;
        },

        startAutoFarm(state) {
            state.autofarmon = true;
            state.autocursor = 1;
        }
    },

    actions: {
        increaseClick({ commit, rootState, state }) {
            if (state.cursor >= state.upgrades.length - 1) {
                return;
            }

            if (rootState.cooki.cookies < state.cost[state.cursor]) {
                window.alert("Not enough cookies!");
                return;
            }

            commit('cooki/deduireCookie', state.cost[state.cursor], { root: true });
            commit('increaseClick');
        },

        startAutoFarm({ commit, rootState, state }) {
            if (rootState.cooki.cookies < 100) {
                window.alert("Nuh uh grind some more.");
                return false;
            }

            if (state.autofarmon) {
                return false;
            } // after the change I just made to the display of the buttons I realized that this check is most likely useless but I'll leave it in for now just in case it's useful again later

            commit('cooki/deduireCookie', 100, { root: true });
            commit('startAutoFarm');
            return true;
        },

        async autoFarm({ dispatch, commit, state }) {
            const purchase = await dispatch('startAutoFarm');
        
            if (!purchase) {
                return;
            }

            setInterval(() => {
                commit('cooki/ajouterCookie', state.autofarms[state.autocursor] * state.upgrades[state.cursor], { root: true });
            }, 1000);
        },

        increaseAutoCursor({ commit, rootState, state }) {
            if (state.autocursor >= state.autofarms.length - 1) {
                return;
            }

            if (rootState.cooki.cookies < state.autocosts[state.autocursor]) {
                window.alert("Not enough cookies!");
                return;
            }
            commit('cooki/deduireCookie', state.autocosts[state.autocursor], { root: true });
            commit('increaseAutoCursor');
        }
    },

    getters: {
        currentUpgrade: state => state.upgrades[state.cursor],
        nextUpgradeCost: state => state.cost[state.cursor],
        currentAutoUpgrade: state => state.autofarms[state.autocursor],
        nextAutoUpgradeCost: state => state.autocosts[state.autocursor]
    },
}