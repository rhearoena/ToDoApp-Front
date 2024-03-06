import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/todotasks",
    name: "todotasks",
    component: () => import("./components/TodoTasksList")
  },
  {
    path: "/todotasks/:id",
    name: "todotask-details",
    component: () => import("./components/TodoTask")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTodoTask")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;