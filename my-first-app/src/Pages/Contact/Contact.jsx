import React from 'react'
import { Link } from 'react-router-dom'
import MyForm from '../../Components/Form/form'

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
            <MyForm />
            <br />
            <Link to='/'>Back to home page</Link>
        </div>
    )
}

export default Contact