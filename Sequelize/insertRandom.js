import { UserActivity, sequelize } from "./db.js";
import { randomUserActivity } from "./utils/random.js";

async function insertRandom() {
  try {
    const names = ["Charlie", "Dana", "Eva", "Frank"];
    const activities = ["Comment", "Like", "Share", "Logout"];
    const randomData = randomUserActivity(names, activities);

    await UserActivity.create(randomData);
    console.log("data inserted:", randomData);
  } catch (error) {
    console.error("not inserting data:", error);
  }
}

export default insertRandom;