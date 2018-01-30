<template src="./popup.html"></template>

<script>
  import TableSuzanne from '@/assets/svg/svg-components/table_suzanne.svg';

  export default {
    name: 'block-content-popup',
    components: {
      TableSuzanne,
    },
    data() {
      return {
        isPopupOpen: false,
      };
    },
    watch: {
      '$route.query.popup'() {
        this.checkPopupHashes();
      },
    },
    methods: {
      checkPopupHashes() {
        const hash = this.$route.query.popup;
        if (hash === 'pacific-study' || hash === 'median-benefit') {
          this.openPopup();
        } else {
// eslint-disable-next-line no-lonely-if
          if (!this.$route.query.screentest) {
            this.closePopup();
          }
        }
      },
      openPopup() {
        this.isPopupOpen = true;
        this.$store.commit('setScrollLock', true);
      },
      closePopup() {
        this.isPopupOpen = false;
        if (!this.$route.query.screentest) {
          this.$router.push({ query: '' });
        } else {
          this.$router.push({ hash: '', query: { screentest: true } });
        }
        this.$store.commit('setScrollLock', false);
      },
    },
    mounted() {
      this.checkPopupHashes();
    },
  };
</script>

<style lang="scss" src="./popup.scss"></style>
