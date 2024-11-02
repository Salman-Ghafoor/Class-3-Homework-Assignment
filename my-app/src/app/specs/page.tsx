import image from "next/image"
export default function specs(){
    return(
        <div>
            <div className="bg-gray-300 w-full h-28"></div>


            <div >
                <h1 className="text-3xl text-center uppercase"><u> <strong>toyota corolla 2024 price in pakistan, images, reviews & <br /> specs</strong></u></h1>
                <div className="flex justify-center mt-3 ">
               <img className="" src="https://th.bing.com/th?id=OIP.AH5wFkPUDoSZCEGQUwEFIAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
                    </div>
               <div className=" flex justify-center items-center mt-10 gap-4 w-full">
                <button className="border border-violet-800 w-40 h-10 bg-blue-800 text-white">Book a test drive</button>
                <button className="border border-blue-800 h-10  text-purple-800 w-52"> request bank finance </button>
                <button className="border  border-blue-800 text-purple-800  h-10 w-28 "> visit palce </button>
                <button className="border border-blue-900  text-purple-800  h-10 w-32"> car inspection </button>

               </div>
             <div className="m ">
             <h3 className="text-center " >Vehicle Description </h3><br />
             <div className="text-centre">
             <pre  > <strong> Number of Doors</strong> 4  <strong> Engine </strong> 1800cc  <strong> Condition</strong> 8.5/10   <strong> Drive </strong> 9500KM   <strong>Suspension Type:</strong> Soft Suspension  </pre> 
             <br />
             <pre> <strong>Avg</strong> 13 Km per Litre  <strong> Transmission </strong>Automatic  <strong>Fuel Type </strong> High Octane  </pre> 
             </div>
             </div>
            </div>

   
        </div>
    )
}