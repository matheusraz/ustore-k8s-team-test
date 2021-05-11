import app from './app';
import './database/connection';
import 'reflect-metadata';


app.listen(process.env.PORT || 3001, () => {
  console.log(`🏃‍ The server is running at port ${process.env.PORT || 3001}`);
});
