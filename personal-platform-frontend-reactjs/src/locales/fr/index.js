import blog from "./blog.json";
import common from "./common.json";
import dashboard from "./dashboard.json";
import header from "./header.json";
import home from "./home.json";

export default {
  ...common,
  ...header,
  ...dashboard,
  ...home,
  ...blog,
};
