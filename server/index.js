const express = require('express');
const process = require('process');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Schema = mongoose.Schema;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
var options = { replset: { socketOptions: { connectTimeoutMS : 1000 }}};
mongoose.connect(
  'mongodb://mongo:27017/platform',
  function (err, db) {
    if(err) {
      console.log(err)
    }
    db.collection('boats').insertMany([{ model: 'Boat_1' }, { model: 'Boat_2' }, { model: 'Boat_3' }])
},options)
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const boatSchema = new Schema({
  model: {
    type: String,
  }
})
const Boat = mongoose.model('boats', boatSchema)


app.get('/boats', (req, res) => {
  
 Boat.find().then((data) => {
  //  console.log(data)
    res.send(data)

  }).catch(err => console.log(err))

});
app.get('/boats/:id', (req, res) => {
     Boat.findById(req.params.id).then((data) => {
       console.log(data)
       res.send(data)
     }).catch(err => console.log(err))
})


app.listen(5000, () => {
  console.log('Listening on port 5000');
});
