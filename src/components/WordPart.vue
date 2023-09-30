<template>
    <div class="wordpart">
      <div v-show="!showSummary">
        <WordCard v-show="!showDetails"/>
        <DetailsCard v-show="showDetails"/>
      </div>
      <BriefSummary v-show="showSummary"/>
    </div>
</template>

<script>

import { mapState } from 'vuex'

import DetailsCard from '../components/DetailsCard.vue';
import WordCard from '@/components/WordCard.vue';
import BriefSummary from './BriefSummary.vue';

export default {
  name: 'WordPart',
  components:{
    DetailsCard,
    WordCard,
    BriefSummary
  },
  computed: mapState(['showDetails','showSummary']),
}
</script>
<style>
.wordpart{
  width:100%;
  height: 100%;
}
</style>