const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const express = require('express');
const path = require('path');
const seedDatabase = require('./seeds/seed');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 900000,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on Port ${PORT}`));
});

seedDatabase();