import store from "@/store";
import { createRouter, createWebHashHistory } from "vue-router";
import { appRoutes } from "@/router/routes";

const routes = [
  appRoutes.BasketPageRoute,
  appRoutes.MainPageRoute,
  appRoutes.LoginPageRoute,
  appRoutes.RegistrationPageRoute,
  appRoutes.DetailPageRoute,
  appRoutes.CompletedPageRoute,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        path: "/",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
