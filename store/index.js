export const state = () => ({
  counter: 2
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setcount (state, count) {
    state.counter = count
  }
}
