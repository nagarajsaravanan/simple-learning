import { GitContributors } from "C:/NGRJ/HUSTLE/Mission possible/simple-learning/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "C:/NGRJ/HUSTLE/Mission possible/simple-learning/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
