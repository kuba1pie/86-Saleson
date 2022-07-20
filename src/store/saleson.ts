import { defineStore } from 'pinia'
interface Person {
  name: string
  surname: string
  result: boolean
}

export const useSalesonStore = defineStore('SalesonStore', {
  state: () => ({
    list: [] as Person[],
    loading: false,
    filterText: '',
  }
  ),
  actions: {
    async fetchCities() {
      this.list = []
      this.loading = true
      try {
        this.list = await fetch(
          'https://saleson.pl/rekrutacja-it-13218314324/data.json',
        ).then(response => response.json())
      }
      catch (error) {
        console.error('There was an error!', error)
      }
      finally {
        this.loading = false
      }
    },
  },
  getters: {
    filteredPerson(state) {
      const filterValue = state.filterText.toLowerCase()
      const result = state.list.filter((item) => {
        if (item.surname.toLowerCase().includes(filterValue) && filterValue !== '')
          Object.assign(item, { result: true })
        else
          Object.assign(item, { result: false })
        return (
          item
        )
      })
      return result
    },
  },
})
