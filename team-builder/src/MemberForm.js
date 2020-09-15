import React from 'react'

export default function TeamBuilderForm(props){
    const { values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target

        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className = 'form-container' onSubmit = {onSubmit}>
            <h2>Add a Team Member</h2>
            <div className = 'submit-btn'>
                <button disabled = {  !values.username || !values.email || !values.role ? true: false} >submit</button>
            </div>

            <div className = 'member-details-input'>
            <label>username:
                <input 
                value = {values.username}
                onChange={onChange}
                name='username'
                placeholder='username input'
                maxLength=''
                type='text'
                />
            </label>

            <label> Email:
                <input 
                value = {values.email}
                onChange={onChange}
                name='email'
                placeholder='email input'
                maxLength=''
                type='email'
                />
            </label>


            <label> Role:
            <select onChange ={onChange} value = {values.role} name="role" >
                <option value ="">--Select a role</option>
                <option value ="Software Engineer I">Software Engineer I</option>
                <option value ="Software Engineer II">Software Engineer II</option>
                <option value ="Data Scientist">Data Scientist</option>
                <option value ="Software Architect">Software Architect</option>
            </select>
            
            </label>
            </div>
        </form>
    )
    
}