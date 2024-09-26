import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const SERVER_URL = "http://localhost:3001"

function Survey() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [messages, setMessages] = useState([])

    const onFormSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        const res = await axios.post(SERVER_URL, { name, age })
        console.log(res)
        console.log(res.data)
    }

    useEffect(() => {
        async function fetch() {
            const res = await axios.get(SERVER_URL + '/results')
            const messages = res.data
            setMessages(res.data)
        }
        fetch();
    }, [])


    return (
        <>
            <form onSubmit={onFormSubmit}>
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" />
                <label>Age</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} name="age" />
                <button type="submit">submit survey</button>
            </form>
            <div>
                {JSON.stringify(messages)}
            </div>
        </>
    )
}

export default Survey
