<template>
  <draggable class="row">
    <b-colxx xl="3" lg="6" class="mb-4">
      <radial-progress-card :title="$t('dashboards.new-tasks')" :percent="75" />
    </b-colxx>
    <b-colxx xl="3" lg="6" class="mb-4">
      <radial-progress-card
        :title="$t('dashboards.tasks-pending')"
        :percent="64"
      />
    </b-colxx>
    <b-colxx xl="3" lg="6" class="mb-4">
      <radial-progress-card
        :title="$t('dashboards.tasks-completed')"
        :percent="32"
      />
    </b-colxx>

    <b-colxx xl="3" lg="6" class="mb-4">
      <radial-progress-card
        :title="$t('dashboards.general-progress')"
        :percent="65"
      />
    </b-colxx>
  </draggable>
</template>
<script>
import Draggable from "vuedraggable";
import RadialProgressCard from "../../components/Cards/RadialProgressCard";
export default {
  components: {
    draggable: Draggable,
    "radial-progress-card": RadialProgressCard,
  },
};
</script>
