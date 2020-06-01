import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    fields: []
  }),

  computed: {
    ...mapGetters([
      'getFields'
    ]),
    form () {
      return this.getFields(this.fields)
    }
  },

  methods: {
    ...mapMutations([
      'updateSettings'
    ]),
    sync () {
      this.updateSettings(this.form)
    }
  }
}
