<template>
  <div class="icon-cards-row">
    <glide-component :settings="glideIconsOption">
      <icon-card
        :title="$t('dashboards.courses-taken')"
        icon="iconsminds-book"
        :value="10"
      />
      <icon-card
        :title="$t('dashboards.courses-pending')"
        icon="iconsminds-bell"
        :value="6"
      />
      <icon-card
        :title="$t('dashboards.courses-progress')"
        icon="iconsminds-arrow-refresh"
        :value="4"
      />
    </glide-component>
  </div>
</template>
<script>
import GlideComponent from "../../components/Carousel/GlideComponent";
import IconCard from "../../components/Cards/IconCard";

export default {
  components: {
    "glide-component": GlideComponent,
    "icon-card": IconCard,
  },
  data() {
    return {
      glideIconsOption: {
        gap: 5,
        perView: 4,
        type: "carousel",
        breakpoints: {
          320: {
            perView: 1,
          },
          576: {
            perView: 2,
          },
          1600: {
            perView: 3,
          },
          1800: {
            perView: 4,
          },
        },
        hideNav: true,
      },
    };
  },
};
</script>
