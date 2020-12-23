<template>
  <div>
    <LazyHydrate when-visible>
      <HomePageComponent
        :catalog-items="catalogItems"
        :handle-click-item="handleClickItem"
      />
    </LazyHydrate>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { ICatalog } from '../interfaces/main'
import LazyHydrate from 'vue-lazy-hydration'

@Component({
  components: {
    HomePageComponent: () => import('@/components/HomePageComponent.vue'),
    LazyHydrate,
  },
})
export default class Index extends Vue {
  // layout
  layout() {
    return 'DefaultLayout'
  }

  // mounted
  mounted() {
    this.$store.dispatch('GET_CATALOG_ITEMS')
  }

  // computed
  get catalogItems(): Array<ICatalog> {
    return this.$store.state.catalogItems
  }

  // methods
  handleClickItem(itemId: number) {
    const itemFound = this.catalogItems.find((item) => item.id === itemId)
    this.$store.commit('SET_CATALOG_ITEM', itemFound)
    this.$router.push(`/detail/${itemId}`)
  }
}
</script>
