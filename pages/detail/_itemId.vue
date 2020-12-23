<template>
  <div>
    <LazyHydrate when-visible>
      <ItemDetailComponent
        :catalog-item="item"
        :handle-button-click="handleButtonClick"
      />
    </LazyHydrate>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { ICatalog } from '../../interfaces/main'
import LazyHydrate from 'vue-lazy-hydration'

@Component({
  components: {
    ItemDetailComponent: () => import('@/components/ItemDetailComponent.vue'),
    LazyHydrate,
  },
})
export default class ItemDetail extends Vue {
  // layout
  layout() {
    return 'DefaultLayout'
  }

  // computed
  get item(): ICatalog {
    return this.$store.state.catalogItem
  }

  // methods
  handleButtonClick(value: string) {
    console.log('test')
    if (value === 'back') {
      this.$store.commit('RESET_CATALOG_ITEM')
      this.$router.replace('/')
    }
  }
}
</script>
