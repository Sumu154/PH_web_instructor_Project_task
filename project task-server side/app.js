const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');


const app = express();
app.set('View engine', 'ejs');
app.use(cors({
  origin: [
    'http://localhost:5173',
    // 'https://marathon-management-953e9.firebaseapp.com',
    // 'https://marathon-management-953e9.web.app'
  ],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

const port = process.env.PORT || 3000;

const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes')


app.get('/', (req, res) => {
  res.send('hello......chill pill event cholbe');
})

// api routes from database
app.use('/api', eventRoutes);
app.use('/api', userRoutes)



app.listen(port, () => {
  console.log(`server is running at port ${port} `)
})