const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();
app.use(express.static(path.join(__dirname, '.', 'client/dist')));

app.listen(PORT, ()=>{
  console.log('listening on localhost:3000');
});

app.get('/', (req, res) => {
  //TODO fdakkjk
})

