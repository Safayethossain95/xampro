import { Link } from "react-router-dom"


const CreatePackageComp = () => {
  return (
    <>
   <div className="createpackagecomp bg-white py-[100px]">
  <div className="container">
    <div className="grid grid-cols-12 items-center gap-8 p-6 lg:p-12 bg-white">
      {/* Text Section */}
      <div className="col-span-12 lg:col-span-5 space-y-4">
        <h1 className="text-3xl font-sora lg:text-[51px] font-bold lg:leading-[60px] text-[#19245E]">
          Create your own package
        </h1>
        <p className="py-[15px] text-[20px] text-[#516986] font-sora ">
          If you wish to purchase a combo package, you can choose your own
          selections from this page and purchase it.
        </p>
        <button className=" bg-[#0052CC] font-sora font-semibold text-white py-3 px-6 rounded-lg text-lg hover:bg-[#003EA6]">
          <Link to="/create-package">
          Create Package
          </Link>
        </button>
      </div>

      {/* Image Section */}
      <div className="col-span-12 lg:col-span-7 flex justify-center">
        <img
          src="assets/images/createpackageimg.png"
          alt="Create Package"
          className="max-w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CreatePackageComp