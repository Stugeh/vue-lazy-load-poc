import { getGlobalThis } from "@vue/shared";

const context = getGlobalThis();
context.__VUE_PROD_DEVTOOLS__ = false;
context.__VUE_OPTIONS_API__ = false;
context.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

import { createApp, defineAsyncComponent } from "vue";

const app = createApp({});

app.component(
  "one",
  defineAsyncComponent(() => import("@/components/one.vue")),
);

app.component(
  "two",
  defineAsyncComponent(() => import("@/components/two.vue")),
);

app.mount("#app");
