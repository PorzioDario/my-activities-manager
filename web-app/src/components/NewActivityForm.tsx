import { useState } from 'react'
import styled from 'styled-components'

import type { Activity } from '../types'

const Form = styled.form`
    maxLenght={500}-width: 70vw;
    padding: 1em;
    margin: 1em auto;
    border: 2px solid #61dafb;
    border-radius: 15px;
`
const Label = styled.label`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem auto;

    p {
        padding: 0;
        margin: 0;
        flex: 1;
        text-align: right;
    }
`
const Input = styled.input`
    margin: 0 1rem;
    flex: 3;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;

    &:focus {
        outline: none;
        border-bottom: 2px solid #61dafb;
    }
`

const TextArea = styled(Input).attrs({ as: "textarea", rows: 3, maxlength: 500})`
    resize: none;
`

const SubmitBtn = styled.input`
    padding: 0.6rem 1.2rem;
    border: 1px solid #61dafb;
    border-radius: 10px;
    background: rgba(97, 218, 251, 0.75);
    color:  #242424;

    &:hover {
        background:  #61dafb;
        color: white;
    }
`

export type NewActivityFormProps = {
    onSavePress: (activity: Activity) => void
}

export function NewActivityForm({ onSavePress }: NewActivityFormProps) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState<Date | undefined>(new Date())

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (!dueDate) return
        onSavePress({ name, description, dueDate })
    }

    return (<Form onSubmit={onFormSubmit}>
        <Label>
            <p>Name:</p>
            <Input name='name' type='text' value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
        </Label>
        <Label>
            <p>Description:</p>
            <TextArea name='description' type='text' value={description} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} />
        </Label>
        <Label>
            <p>Due date:</p>
            <Input name='due date' type='date' value={dueDate ? dueDate.toISOString().substring(0, 10) : ''} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                if (value) {
                    setDueDate(new Date(value))
                } else {
                    setDueDate(undefined)
                }
            }} />
        </Label>
        <SubmitBtn name='save' type='submit' value='Save' />
    </Form>)
}