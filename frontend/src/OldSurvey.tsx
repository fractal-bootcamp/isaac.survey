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
        event.preventDefault() // Prevent the default form submission behavior
        try {
            const res = await axios.post(SERVER_URL, { name, age })
            console.log(res)
            console.log(res.data)
            setIsSubmitted(true)
            setName("")
            setAge("")
            setTimeout(() => {
                setIsSubmitted(false)
            }, 3000)
        } catch (error) {
            console.error("Error submitting the form:", error)
        }
    }

    useEffect(() => {
        async function fetchMessages() {
            try {
                const res = await axios.get(`${SERVER_URL}/results`)
                setMessages(res.data)
            } catch (error) {
                console.error("Error fetching messages:", error)
            }
        }
        fetchMessages();
    }, [])

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    required
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    name="age"
                    required
                />
                <button type="submit">Submit Survey</button>
            </form>
            {isSubmitted && <div className="success">Form submitted successfully!</div>}
            <div>
                {JSON.stringify(messages)}
            </div>
        </>
    )
}

export default Survey
