"use client"
import axios from "axios"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

export default function ProfilePage(this: any) {
  const router = useRouter()
  const [data, setData] = useState("nothing")

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me")
        const userId = res.data.data._id
        setData(userId)
        router.push(`/profile/${userId}`)
      } catch (error: any) {
        console.log(error.message)
        toast.error(error.message)
      }
    }
    fetchUserDetails()
  }, [router])

  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      toast.success("Logout successful")
      router.push("/login")
    } catch (error: any) {
      console.log(error.message)
      toast.error(error.message)
    }
  }
  // useEffect(() => async {
  //   const res = await axios.get("/api/users/me")
  //   console.log(res.data)
  //   setData(res.data.data._id)
  // },[])
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me")
    console.log(res.data)
    setData(res.data.data._id)
  }
  return (
    <div className="h-full w-full">
      <div className=" flex flex-col items-center justify-center h-screen">
        <h1>Profile</h1>
        <h2>
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <button
          onClick={getUserDetails}
          className="hover:bg-orange-500 font-bold absolute top-2 left-2 bg-orange-300 text-white px-4 py-2  transition duration-300 ease-in-out rounded-md"
        >
          Get User Details
        </button>
      </div>

      <button
        onClick={logout}
        className="hover:bg-red-800 font-bold absolute top-2 right-2 bg-blue-500 text-white px-4 py-2  transition duration-300 ease-in-out rounded-md"
      >
        Logout
      </button>
    </div>
  )
}
