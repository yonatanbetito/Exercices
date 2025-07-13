import {
  getDatabyCountry,
  fullNameByNumReport,
  sumOfProductsByCategory,
} from "../controles/controlQuery.js";

const routsinit = (app) => {
  app.use("/question1", getDatabyCountry);
  app.use("/question2", fullNameByNumReport);
  app.use("/question3", sumOfProductsByCategory);
};
export default routsinit;
