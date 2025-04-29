export default function UserProfilePage({ params }: any) {
  return (
    <div>
      <h1 className=" absolute top-0 left-1/2 text-4xl font-bold">Profile</h1>
      <div className="flex flex-col items-center justify-center h-screen">
        <hr />
        <p className="text-4xl">
          Profile Page
          <span className=" m-3 p-2 rounded bg-amber-300 text-gray-400">
            {params.id}
          </span>
        </p>
      </div>
    </div>
  )
}
