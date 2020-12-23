<template>
  <div class="content">
    <header class="bar-header">
      <div class="container">
        <h3><i class="fab fa-korvue"></i>atalogku</h3>
        <p></p>
      </div>
    </header>
    <div class="outlier">
      <div class="back" @click="handleButtonClick('back')">
        <i class="fas fa-arrow-left"></i>
      </div>
      <div class="grid-container">
        <div class="item">
          <img :src="catalogItem.image" alt="" />
          <h5>{{ catalogItem.category }}</h5>
          <p class="title">{{ catalogItem.title }}</p>
          <h4>
            {{
              'IDR ' +
              new Intl.NumberFormat('id').format(
                parseInt(catalogItem.price * 14252)
              )
            }}
          </h4>
          <p>{{ catalogItem.description }}</p>
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
    type: Object,
    default: {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
    },
  })
  catalogItem!: ICatalog

  @Prop({ required: true, type: Function })
  readonly handleButtonClick!: Function
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap')

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

.container
    width: 90%
    margin: 0 auto
    overflow: none
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 15px 10px

.outlier
    max-width: 500px
    margin: auto

.grid-container
    display: grid
    grid-template-columns: repeat(1, 1fr)
    gap: 1rem
    margin-top: 2rem
    margin-left: 2rem
    margin-right: 2rem
    .item
        display: flex
        flex-direction: column
        border: 1px $deep-primary solid
        padding: 10px
        border-radius: 10px
        box-shadow: 1px 1px 3px #ccc
        img
            width: 50%
            align-self: center
        h5
            margin-top: 10px
            margin-bottom: 5px
        .title
            font-size: 17px
            font-family: 'Old Standard TT', serif
            color: $deep-primary
            font-weight: bold
            margin-bottom: 13px

        h4
            margin-bottom: 10px

        p
            font-size: 14px
            font-family: 'Karla', sans-serif
            text-align: justify
            margin-bottom: 20px

.back
    margin-top: 1rem
    margin-left: 2rem
    margin-right: 2rem
</style>