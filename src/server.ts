import app from './app';
import connectDatabase from './database/connetion';
import 'reflect-metadata';

connectDatabase()

app.listen(process.env.PORT || 3001, () => {
  console.log(`🏃‍ The server is running at port ${process.env.PORT || 3001}`);
});
