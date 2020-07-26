const express = require('express');
const cors = require('cors');
const db = require('./models');
const response = require('./middlewares/response')
const checkJwt = require('./middlewares/jwt')

const AuthController = require('./controllers/auth');
const LinkController = require('./controllers/link');

const app = express();

app.use(cors());
app.use(response);
app.use(checkJwt);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', AuthController)
app.use('/link', LinkController)

app.get('/', (req,res) => {
  return res.json({
    message: "api runnig"
  })
});

db.sequelize.sync().then(()=>{
  app.listen(3333, () => {
    console.log('listening on port 3333')
  });
});

