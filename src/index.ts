import express, {Request, Response} from 'express'

const app = express()
const port = process.env.Port || 3001

app.get('/', (req: Request, res: Response) => {
    res.send('Hello HELLLLLLLLLLOOOOOO')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})