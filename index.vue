<template>
  <div class="calc">
    <nuxt-content v-if="page" :document="page" tag="article" />
    <nuxt-link to="/generator" class="btn">Zahl zu Wort</nuxt-link>
    <nuxt-link to="/wordgenerator" class="btn">Wort zu Zahl</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, route }) {
    const title = await $content('infos').fetch()
    return {
      page: title
    }
  },
  head: {
    title: 'Major-Zahlen-System'
  }
}
</script>
