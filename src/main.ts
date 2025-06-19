require('dotenv').config({ path: `${ process.cwd() }/.env` });
import sequelize from './infrastructure/database/db-connection';
import app from './app';

const port = process.env.PORT || 3000;


(async () => {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${ port }`);
    });
  } catch (error) {
    console.error(error);
  }

})();
