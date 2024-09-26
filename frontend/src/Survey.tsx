import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const SERVER_URL = "http://localhost:3001"

function Survey() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [messages, setMessages] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

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

            setIsSubmitted(true)

            setTimeout(() => {
                setIsSubmitted(false)
            }, 3000)
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
            {isSubmitted && <div>Form submitted successfully!</div>}
            <div>
                {JSON.stringify(messages)}
            </div>
        </>
    )
}

export default Survey
