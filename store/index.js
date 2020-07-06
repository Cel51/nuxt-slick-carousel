export const state = () => ({
  store_ssr: [
    '/media/images/7-1920x500.jpg',
    '/media/images/8-1920x500.jpg',
    '/media/images/9-1920x500.jpg',
  ],
  store_no_ssr: [
    '/media/images/10-1920x500.jpg',
    '/media/images/11-1920x500.jpg',
    '/media/images/12-1920x500.jpg',
  ],
  store_netplus_ssr: [
    '/media/images/13-1920x500.jpg',
    '/media/images/14-1920x500.jpg',
    '/media/images/15-1920x500.jpg'
  ]
});

export const getters = {
  GET_STORE_SSR: state => {
    return state.store_ssr;
  },
  GET_STORE_NO_SSR: state => {
    return state.store_no_ssr;
  },
  GET_STORE_NETPLUS_SSR: state => {
    return state.store_netplus_ssr;
  }
}

export const mutations = {
}
