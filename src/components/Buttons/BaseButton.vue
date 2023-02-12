<template>
  <div>
    <v-btn depressed v-bind="$attrs" v-on="$listeners"> Test </v-btn>
    {{ $listeners }}
    {{ $attrs }}
  </div>
</template>

<script>
export default {
  name: "base-button",
};
</script>
