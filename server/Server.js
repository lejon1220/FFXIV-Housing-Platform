const express = require('express');
const app = express();
const path = require('path');

const port = 3000;


app.use(express.json());

app.get('/', (req,res) => {
	return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})






app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});