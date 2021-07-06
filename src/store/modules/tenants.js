
import axios from 'axios';

const state = {
  tenants: []
};

const getters = {
  alltenants: state => state.tenants
};

const actions = {
  async fetchTenants({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('settenant', response.data);
  },
  async addtenants({ commit }, ownerName) {
    const response = await axios.post(
      '',
      { ownerName}
    );

    commit('newtenant', response.data);
  },
  async deletetenant({ commit }, id) {
    await axios.delete(``);

    commit('removeTenant', id);
  },
  async filterTenant({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `${limit}`
    );

    commit('settenants', response.data);
  },
  async updatetenant({ commit }, updatetenant) {
    const response = await axios.put(
      ``,
      updatetenant
    );

    console.log(response.data);

    commit('updatenant', response.data);
  }
};

const mutations = {
  settenant: (state, tenants) => (state.tenants = tenants),
  newtenant: (state, tenant) => state.tenants.unshift(tenants),
  removeTenant: (state, id) =>
    (state.tenants = state.tenants.filter(tenants => tenant.id !== id)),
  updateTenant: (state, updatenant) => {
    const index = state.tenants.findIndex(tenant => tenant.id === updatenant.id);
    if (index !== -1) {
      state.tenant.splice(index, 1, updateOwner);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
