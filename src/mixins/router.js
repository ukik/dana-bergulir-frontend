module.exports = {
    methods: {
        gotoPage(path){
            if(path !== this.$route.path) {
                this.$router.push(path)
            }
        }
    }
}
