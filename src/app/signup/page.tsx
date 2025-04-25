"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
// import { axios } from "axios"

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignup = async () => {}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">SIGNUP PAGE</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="h-8 w-60 rounded-lg p-2 bg-amber-300 text-black my-1.5"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value })
        }}
        placeholder="username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="h-8 w-60 rounded-lg p-2 bg-amber-300 text-black my-1.5"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value })
        }}
        placeholder="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="h-8 w-60 rounded-lg p-2 bg-amber-300 text-black my-1.5"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value })
        }}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className=" focus:border-white m-1.5 h-8 w-60  rounded-lg bg-amber-600 hover:bg-amber-800 text-amber-200"
      >
        Submit
      </button>
      <Link href="/login">
        <button className=" focus:border-white m-1.5 h-8 w-60  rounded-lg bg-red-600 hover:bg-red-700 text-amber-200">
          Visit Login
        </button>
      </Link>
    </div>
  )
}
