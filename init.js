import { sequelize, UserActivity } from "./db.js";
import insertRandom from "./insertRandom.js";
try {
  await sequelize.sync();
  console.log("insert in progress...");

  //אם אני רוצה להכניס כמות המכה
  // const initialData = [
  //   { name: "Alice", activity: "Login" },
  //   { name: "Bob", activity: "Upload Photo" },
  // ];

  // await UserActivity.bulkCreate(initialData);
  // console.log("Initial data inserted.");
  let count = 0;
  const max = 3;

  const intervalId = setInterval(async () => {
    await insertRandom();
    count++;

    if (count === max) {
      clearInterval(intervalId);
      await sequelize.close();
    }
  }, 5000);
} catch (error) {
  //console.error("Error inserting data:", error);
  await sequelize.close();
}
console.table(await UserActivity.findAll({raw:true}));
