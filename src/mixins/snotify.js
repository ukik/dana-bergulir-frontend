module.exports = {
    methods: {
      onSnotifyInput(){
        this.$snotify.create({
          title: 'Perhatian!',
          body: 'Data belum lengkap',
          config: {
            type: "warning",
          }
        });
      },
    }
}
