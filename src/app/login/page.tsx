"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import axios from "axios"

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    // username: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post("api/users/login", user)
      console.log("Login successful", response.data)
      toast.success("Login successful")
      router.push("/profile")
    } catch (error: any) {
      console.log("Login Failed", error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">{loading ? "processing" : "Login"}</h1>
      <hr />

      <label htmlFor="email">Email</label>
      <input
        className="h-8 w-60 rounded-lg p-2 bg-purple-400 text-black my-1.5"
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
        className="h-8 w-60 rounded-lg p-2 bg-purple-400 text-black my-1.5"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value })
        }}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className=" focus:border-white m-1.5 h-8 w-60  rounded-lg bg-gray-500 hover:bg-gray-800 text-shadow-white"
      >
        {buttonDisabled ? "Fill in details" : "Login"}
      </button>
      <Link href="/signup">
        <button className=" focus:border-white m-1.5 h-8 w-60  rounded-lg bg-green-300 hover:bg-green-800 hover:text-white text-black">
          Visit Signup
        </button>
      </Link>
    </div>
  )
}
