const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const DB = process.env.DATABASE.replace(
  '<PASSWORD>' ,
   process.env.DB_PASSWORD);
mongoose.
  connect(DB,{
    useNewUrlParser : true ,
    useCreateIndex : true,
    useFindAndModify :false
  })
  .then(()=>{
    console.log('connection successfull') ;
  }) ;


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
