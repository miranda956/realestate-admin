import axios from 'axios';

const state = {
  staff: []
};

const getters = {
  allstaff: state => state.staff
};

const actions = {
  async fetchStaff({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setStaff', response.data);
  },
  async addstaff({ commit }, name) {
    const response = await axios.post(
      '',
      { name }
    );

    commit('newstaff', response.data);
  },
  async deleteStaff({ commit }, id) {
    await axios.delete(``);

    commit('removeStaff', id);
  },
  async filterStaff({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `${limit}`
    );

    commit('setstaff', response.data);
  },
  async updatestaff({ commit }, updatestaff) {
    const response = await axios.put(
      ``,
      updatestaff
    );

    console.log(response.data);

    commit('updatestaff', response.data);
  }
};

const mutations = {
  setstaff: (state, staff) => (state.staff = staff),
  newstaff: (state, staff) => state.staff.unshift(staff),
  removeStaff: (state, id) =>
    (state.staff = state.staff.filter(staff => staff.id !== id)),
  updatestaff: (state, updatestaff) => {
    const index = state.staff.findIndex(staff => staff.id === updatestaff.id);
    if (index !== -1) {
      state.staff.splice(index, 1, updatestaff);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
