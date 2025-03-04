import BigHeader from "../texts/big-header-text";


export default function SignIn() {
    return (
        <div className=" justify-center flex flex-col gap-4  ">
            <BigHeader text="Sign In"></BigHeader>
            <form>
              <div className="mb-4">
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="email" 
                  type="email" 
                  placeholder="partner@example.com" 
                />
              </div>
              <div className="mb-6">
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="password">
                  Password
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="password" 
                  type="password" 
                  placeholder="******************" 
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-3">
                <button className="w-full bg-[#5754AD] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 mt-3" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
        </div>
    )
}