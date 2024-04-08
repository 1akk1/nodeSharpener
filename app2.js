const express = require('express');

const adminRoutes = require('./routes/admin')

const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser');

const app = express()


app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes)
app.use(bodyParser.urlencoded({extended:false}));

// 404 error page
app.use((req,res,next) => {
    res.status(404).send('<h1> page not found</h1>')
})

app.listen(5000)


