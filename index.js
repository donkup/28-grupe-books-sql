const db = require('./db');
const Author = require('./Author');
const Books = require('./Books');

const app = {}

app.init = async () => {
    // prisijungti prie duomenu bazes
    const conn = await db.init({
        host: 'localhost',
        user: 'root',
        database: 'books',
    });

    // LOGIC BELOW
    const paula = await Author.create(conn, 'Paula', 'Paulaviciute')

    const vardenis = await Author.create(conn, 'Vardenis', 'Pavardenis');
    const mike = await Author.create(conn, 'Mike', 'Pukuotas');
    console.log(vardenis);
    console.log(mike);
    console.log(paula);

    const authors = await Author.listAll(conn);
    console.log(authors);


    const uniqAuthor = await Author.findById(conn, 1);
    console.log(uniqAuthor);

    const uniqAuthor2 = await Author.findById(conn, 99);
    console.log(uniqAuthor2);


}

app.init();

module.exports = app;