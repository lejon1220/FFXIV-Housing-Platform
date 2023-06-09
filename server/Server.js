const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;
const loginRouter = require ('./routes/loginRouter')

app.use(express.json());

//send html file?
app.get('/', (req,res) => {
	return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})

//temp pathway
app.use('/assets', (req, res) => {
	return res.status(200);
})

//send it to login route
app.use('/login', loginRouter)


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});