import React from 'react'
import Link from 'next/dist/client/link'

export default function UserBlock(user) {
    return (
        <div  className='userblock' key={user._id}>
                  <p className='login-p'>Логин: {user.name.login}</p>
                  <p className='login-p'>Пароль: {user.name.password}</p>
                  <Link href={`/api/users/${user.name._id}`}><a>перейти</a></Link>
        </div>
    ) 
}
