<template>
    <div class="page-index">
        <header-block></header-block>
        <router-view></router-view>
        <footer-block></footer-block>
    </div>
</template>

<script>
import Header from '@/components/blocks/Header/Header';
import Footer from '@/components/blocks/Footer/Footer';
import { mapState } from 'vuex';

export default {
  name: 'Index',
  components: {
    'header-block': Header,
    'footer-block': Footer,
  },
  computed: {
    ...mapState([
      'userAgent',
    ]),
  },
  mounted() {
  },
};
</script>
