import { Sequelize, DataTypes } from 'sequelize';

// חיבור למסד נתונים מרוחק
export const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'remote-server-address.com', // כתובת השרת המרוחק
  port: 3306, // פורט (ברירת מחדל של MySQL)
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // אפשרויות אבטחה נוספות
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // רק לסביבת פיתוח
    }
  }
});

// הגדרת מודל לדוגמה
export const UserActivity = sequelize.define('UserActivity', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// פונקציה לבדיקת חיבור
export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('החיבור למסד הנתונים המרוחק בוצע בהצלחה!');
  } catch (error) {
    console.error('שגיאה בחיבור למסד הנתונים:', error);
  }
}

// פונקציה לאיתחול הטבלאות
export async function initDatabase() {
  try {
    await sequelize.sync({ force: false });
    console.log('הטבלאות נוצרו בהצלחה במסד הנתונים המרוחק!');
  } catch (error) {
    console.error('שגיאה ביצירת הטבלאות:', error);
  }
}

// פונקציה לשאילתת כל הנתונים
export async function queryAllUsers() {
  try {
    const users = await UserActivity.findAll();
    console.log('כל המשתמשים:', users);
    return users;
  } catch (error) {
    console.error('שגיאה בשאילתת הנתונים:', error);
    return [];
  }
}

// פונקציה להוספת משתמש חדש
export async function addUser(name, activity) {
  try {
    const newUser = await UserActivity.create({
      name: name,
      activity: activity
    });
    console.log('משתמש חדש נוסף:', newUser);
    return newUser;
  } catch (error) {
    console.error('שגיאה בהוספת משתמש:', error);
    return null;
  }
}

// דוגמה לשימוש
async function main() {
  await testConnection();
  await initDatabase();
  
  // הוספת משתמש לדוגמה
  await addUser('יונתן', 'תכנות');
  
  // שאילתת כל המשתמשים
  await queryAllUsers();
}

// הפעלת הפונקציות (רק אם הקובץ מורץ ישירות)
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}