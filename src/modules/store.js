import { createStore } from 'vuex';

import { cooki } from './cookies'
import { upgrades } from './upgrades'
import { timer } from './timer'

const store = createStore({

    modules: {

        cooki: cooki,

        upgrades: upgrades,

        timer: timer

    }

});

store.dispatch('timer/start');

export default store;