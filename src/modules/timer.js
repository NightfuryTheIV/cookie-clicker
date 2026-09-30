export const timer = {
    namespaced: true,

    state() {
        return {
            elapsed: 0, // in seconds
            intervalId: null
        }
    },

    mutations: {
        setElapsed(state, seconds) {
            state.elapsed = seconds;
        },

        setIntervalId(state, id) {
            state.intervalId = id;
        }
    },

    actions: {
        start({ commit, state }) {
            if (state.intervalId !== null) return;

            const startTime = Date.now();

            const id = setInterval(() => {
                commit('setElapsed', Math.floor((Date.now() - startTime) / 1000));
            }, 1000);

            commit('setIntervalId', id);
        }
    },

    getters: {
        formatted: state => {
            const h = Math.floor(state.elapsed / 3600);
            const m = Math.floor((state.elapsed % 3600) / 60);
            const s = state.elapsed % 60;
            const pad = n => String(n).padStart(2, '0');

            return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
        }
    }
}