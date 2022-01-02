<template>
  <b-card-body>
    <p class="text-muted text-small mb-2">{{ $t("survey.title") }}</p>
    <p class="mb-3">Leccion de prueba</p>
    <p class="text-muted text-small mb-2">
      {{ $t("survey.details-lowercase") }}
    </p>
    <p class="mb-3" v-html="survey.detail" />
    <p class="text-muted text-small mb-2">{{ $t("survey.category") }}</p>
    <p class="mb-3">Leccion Pendiente</p>
    <p class="text-muted text-small mb-2">{{ $t("survey.label") }}</p>
    <div>
      <p class="d-sm-inline-block mb-1">
        <b-badge :variant="survey.labelColor" pill>Piloto Privado</b-badge>
      </p>
      <p class="d-sm-inline-block mb-1" />
    </div>
  </b-card-body>
</template>
<script>
export default {
  props: ["survey"],
};
</script>
