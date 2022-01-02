<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>{{ $t("menu.hellow") + " " + currentUser.title }}</h1>
        <piaf-breadcrumb :heading="$t('menu.default')" />

        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-book"
          :title="`6 ${$t('dashboards.courses')}`"
          :detail="$t('dashboards.pending-for-start')"
          :percent="(6 * 100) / 10"
          progressText="6/10"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-book"
          :title="`4 ${$t('dashboards.courses')}`"
          :detail="$t('dashboards.on-process-of-finalizing')"
          :percent="(4 * 100) / 10"
          progressText="4/10"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-bell"
          :title="`3 ${$t('dashboards.notifications')}`"
          :detail="$t('dashboards.unread-alerts')"
          :percent="(3 * 100) / 10"
          progressText="3/10"
        />
      </b-colxx>
    </b-row>
    <sortable-statictics-row></sortable-statictics-row>
    <b-row>
      <b-colxx xl="6" lg="12">
        <icon-cards-carousel></icon-cards-carousel>
        <b-row>
          <b-colxx md="12" class="mb-4">
            <sales-chart-card></sales-chart-card>
          </b-colxx>
        </b-row>
      </b-colxx>
      <b-colxx lg="12" xl="6" class="mb-4">
        <recent-orders></recent-orders>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xl="12" lg="12" class="mb-4">
        <calendar></calendar>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GradientCard from "../../../components/Cards/GradientCard";
import GradientWithRadialProgressCard from "../../../components/Cards/GradientWithRadialProgressCard";
import AdvancedSearch from "../../../containers/dashboards/AdvancedSearch";
import BestSellers from "../../../containers/dashboards/BestSellers";
import Cakes from "../../../containers/dashboards/Cakes";
import Calendar from "../../../containers/dashboards/Calendar";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import Logs from "../../../containers/dashboards/Logs";
import Tickets from "../../../containers/dashboards/Tickets";
import ProductCategoriesPolarArea from "../../../containers/dashboards/ProductCategoriesPolarArea";
import ProfileStatuses from "../../../containers/dashboards/ProfileStatuses";
import RecentOrders from "../../../containers/dashboards/RecentOrders";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import TopRatedItems from "../../../containers/dashboards/TopRatedItems";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";

export default {
  components: {
    "advanced-search": AdvancedSearch,
    "best-sellers": BestSellers,
    cakes: Cakes,
    calendar: Calendar,
    "converconversion-rates-chart-card": ConversionRatesChartCard,
    "icon-cards-carousel": IconCardsCarousel,
    logs: Logs,
    tickets: Tickets,
    "product-categories-polar-area": ProductCategoriesPolarArea,
    "profile-statuses": ProfileStatuses,
    "recent-orders": RecentOrders,
    "sales-chart-card": SalesChartCard,
    "small-line-charts": SmallLineCharts,
    "sortable-statictics-row": SortableStaticticsRow,
    "top-rated-items": TopRatedItems,
    "website-visit-chart-card": WebsiteVisitsChartCard,
    "gradient-card": GradientCard,
    "gradient-with-radial-progress-card": GradientWithRadialProgressCard,
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    }),
  },
};
</script>
