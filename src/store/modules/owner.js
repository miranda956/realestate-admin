
import axios from 'axios';

const state = {
  owners: []
};

const getters = {
  allowners: state => state.owners
};

const actions = {
  async fetchOwners({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setowner', response.data);
  },
  async addOwners({ commit }, ownerName) {
    const response = await axios.post(
      '',
      { ownerName}
    );

    commit('newOwner', response.data);
  },
  async deleteOwner({ commit }, id) {
    await axios.delete(``);

    commit('removeOwner', id);
  },
  async filterOwner({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `${limit}`
    );

    commit('setowner', response.data);
  },
  async updateOwner({ commit }, updateOwner) {
    const response = await axios.put(
      ``,
      updProperty
    );

    console.log(response.data);

    commit('updateOwner', response.data);
  }
};

const mutations = {
  setowner: (state, owners) => (state.owners = owners),
  newOwner: (state, owner) => state.owners.unshift(owners),
  removeOwner: (state, id) =>
    (state.owners = state.owners.filter(owners => owner.id !== id)),
  updateOwner: (state, updProperty) => {
    const index = state.owners.findIndex(owner => owner.id === updateOwner.id);
    if (index !== -1) {
      state.owners.splice(index, 1, updateOwner);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
