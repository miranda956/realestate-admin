import axios from 'axios';

const state = {
  leases: [],
  owners :[],
  tenants :[],
  properties:[]
};

const getters = {
  alleases: state => state.leases,
  allowners: state => state.owners,
  alltenants: state => state.tenants,
  allproperties :state=>state.properties


};

const actions = {
  async fetchleases({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setLeases', response.data);
  },
async fetchOwners({commit}){
    const response =await axios.get(
        ""
    )
   commit('setowners', response.data)

},

  async fetchTenants({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setTenants', response.data);
  },

  async fetchProperties({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setProperties', response.data);
  },
};

const mutations = {
setLeases: (state, leases) => (state.leases = leases),
setTenants: (state, tenants) => (state.tenants = tenants),
setowner: (state, leases) => (state.leases = leases),
setProperties: (state, leases) => (state.leases = leases),





};

export default {
  state,
  getters,
  actions,
  mutations
};
