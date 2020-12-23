<template>
  <div class="content">
    <header class="bar-header">
      <div class="container">
        <h3><i class="fab fa-korvue"></i>atalogku</h3>
        <p></p>
      </div>
    </header>
    <div class="outlier">
      <div class="subheader">
        <div>
          <p>Pilih barangmu dari katalogku</p>
          <p>
            temukan barang-barang yang kamu sukai
            <i class="fas fa-archive"></i>
          </p>
        </div>
      </div>
      <div class="grid-container">
        <div
          v-for="item in catalogItems"
          :key="item.id"
          @click="handleClickItem(item.id)"
          class="item"
        >
          <img :src="item.image" alt="" />
          <h5 class="category">{{ item.category }}</h5>
          <p>{{ item.title }}</p>
          <h5 class="price">
            {{
              'IDR ' +
              new Intl.NumberFormat('id').format(parseInt(item.price * 14252))
            }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { ICatalog } from '../interfaces/main'

@Component({})
export default class HomePageComponent extends Vue {
  @Prop({
    required: true,
    type: Array,
    default: [
      {
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      },
    ],
  })
  catalogItems!: Array<ICatalog>

  @Prop({ required: true, type: Function })
  readonly handleClickItem!: Function
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap')
*
  box-sizing: border-box
  margin: 0
  padding: 0

.content
  align-items: center
  justify-content: center

.bar-header
  display: flex
  background-color: $primary
  box-shadow: 3px 3px 10px #888
  position: fix
  h3
    color: $secondary
  input[type='text']
    padding: 7px
    width: 300px
    border-color: #777
    border-radius: 3px
  .container
    width: 90%
    margin: 0 auto
    overflow: none
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 15px 10px

.subheader
  background-color: $deep-primary
  color: $secondary
  box-shadow: 3px 3px 10px #888
  margin: 0 auto 16px
  width: 90%
  font-size: 14
  padding: 10px
  display: flex
  align-items: center
  justify-content: space-between
  p
    margin: 4px

.outlier
  max-width: 500px
  margin: auto

.grid-container
  display: grid
  grid-template-columns: repeat(2, 1fr)
  gap: 1rem
  margin-left: 2rem
  margin-right: 2rem
  .item
    display: flex
    flex-direction: column
    border: 1px #ccc solid
    padding: 10px
    border-radius: 10px
    box-shadow: 1px 1px 2px #ccc
    img
      width: 60%
      height: 60%
      align-self: center
    .category
      margin-top: 10px
      margin-bottom: 5px
    p
      font-size: 12px
      color: $deep-primary
      font-weight: bold
      margin-bottom: 15px
    .price
      font-size: 14px
</style>