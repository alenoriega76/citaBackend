const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const Sequelize = require('./db/dbConexion');
const port = 3500;

const corsOptions = {
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
    methods: 'GET, POST, HEAD, PUT, DELETE, PATCH',
    allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));

app.set('view engine', 'ejs');
//app.use(express.static('public'));
app.use('/img', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    session({
        secret:'Capitan20',
        resave:false,
        saveUninitialized:true,
    })
)


app.use('/', require('./routes/indexRoutes'));
app.use('/contacto',require('./routes/indexRoutes'))
app.use('/ministerios',require('./routes/indexRoutes'))
app.use('/siembra',require('./routes/indexRoutes'))
app.use('/hombres',require('./routes/indexRoutes'));
app.use('/matrimonios',require('./routes/indexRoutes'))
app.use('/citakids',require('./routes/indexRoutes'))
app.use('/musicos',require('./routes/indexRoutes'))
app.use('/motivos',require('./routes/indexRoutes'))
app.use('/eliminarpedido/:id', require('./routes/indexRoutes'))
app.use('/deleteuser/:id',require('./routes/indexRoutes'))

app.listen(port, () => {
    console.log(`SERVER listening on http://localhost:${port}`);
});
