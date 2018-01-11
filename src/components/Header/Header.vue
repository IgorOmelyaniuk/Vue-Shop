<template>
  <q-toolbar slot="header" color="dark" class="text-center">
      <q-toolbar-title>
        Quasar App
        <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
      </q-toolbar-title>
    </q-toolbar>
</template>

<script>
import {
  QToolbar,
  QToolbarTitle
} from 'quasar'

export default {
  components: {
    QToolbar,
    QToolbarTitle
  }
}
</script>

<style lang="stylus">

</style>

