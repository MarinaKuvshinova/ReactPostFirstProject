import React from 'react'

export default function NewComponent({ message, children }) {
    return (
        <div>
            {message}
            <div>{children}</div>
        </div>
    )
}
