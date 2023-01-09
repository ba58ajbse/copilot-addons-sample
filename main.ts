import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = 80

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', message: "Hello, World!" })
})

try {
    app.listen(port, () => {
        console.log(`🚀server running at: http://localhost:${port}`)
    })
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message)
    }
}