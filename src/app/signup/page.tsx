"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import axios from "axios"

export default function SignupPage() {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])
  const [loading, setLoading] = useState(false)

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup success", response.data)
      router.push("/login")
    } catch (error: any) {
      console.log("Signup Failed", error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">
        {loading ? "Processing" : "Signup"}
      </h1>
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
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link href="/login">
        <button className=" focus:border-white m-1.5 h-8 w-60  rounded-lg bg-red-600 hover:bg-red-700 text-amber-200">
          Visit Login
        </button>
      </Link>
    </div>
  )
}
