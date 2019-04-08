<template>
  <div class="tab bg-white p-4">
    <div class="input-group mb-3">
      <input v-model="iSearch" type="text" class="form-control form form_not_shadow" placeholder="Поиск..." aria-label="Recipient's username" aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn_theme_primary text-white btn_waves_effect" type="button" id="button-addon2" @click="changeLists()">Применить</button>
      </div>
    </div>
    <div class="tab__panel">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Class</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(list, key) in listsTab"
          :key="key"
          :class="'table-'+list.class">
          <th scope="row">{{list.class}}</th>
        </tr>

        </tbody>
      </table>
      <div class="tab__content">
        <div
          class="active animation-slide-left"
          role="tabpanel"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TabPanel',
    props: {
      //входной параметр
      name: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        search: this.name ? this.name : '',
        iSearch: this.name ? this.name : '',
      }
    },
    computed: {
      ...mapGetters(['user', 'lists', 'uid']),
      listsTab () {
        return (this.lists.filter(list => String(list.class).indexOf(this.search) !== -1))
      },
    },
    methods: {
      changeLists () {
        this.search = this.iSearch
        if (this.search)
          this.$router.push('/tab?name='+this.search)
        else
          this.$router.push('/tab')
      },
    },
  }
</script>
