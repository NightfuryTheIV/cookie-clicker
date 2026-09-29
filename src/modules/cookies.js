export const cooki = {

    namespaced: true,

    state() {

        return {

            cookies: 0

        }
    },

    mutations: {

        ajouterCookie(state, multiplier) {

            state.cookies += multiplier;

        },

        deduireCookie(state, qte) {

            state.cookies -= qte;

        }

    },

    actions: {

        ajouterCookieAvecDelai({ commit, rootGetters }, delay) {

            setTimeout(function() {

                const multiplier =
                    rootGetters['upgrades/currentUpgrade'];

                commit('ajouterCookie', multiplier);

            }, delay * 1000);

        }

    },

    getters: {

        doubleCookies: state => state.cookies * 2

    },

}