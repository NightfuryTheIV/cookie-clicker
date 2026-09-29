import { createStore } from 'vuex';

import { cooki } from './cookies'
import { upgrades } from './upgrades'

export default createStore({

    modules: {

        cooki: cooki,

        upgrades: upgrades

    }

});