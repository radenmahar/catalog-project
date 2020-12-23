import createPersistedState from 'vuex-persistedstate';

export default (persist: any) => {
  createPersistedState({
    key: 'catalogs',
    paths: [
      'catalogItems',
      'catalogItem',
      'isErrorRequest'
    ]
  })(persist.store);
};
