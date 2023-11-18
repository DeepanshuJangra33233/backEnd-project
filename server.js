import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app = express();


app.get('/', (req, res) => {
    res.send('server is ready')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First joke',
            content: 'This is the first joke',
        },
        {
            id: 2,
            title: 'Second joke',
            content: 'This is the Second joke',
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is the Third joke',
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is the Fourth joke',
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is the Fifth joke',
        }
    ]
    res.send(jokes)

})


const port = process.env.PORT // || 3000

app.listen(port, () => {
    console.log(`server listening on ${port}`)
})