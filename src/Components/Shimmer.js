export  const Shimmer = () => {
    return (
       <div>
         <div className="flex justify-center">
        <div className=" m-2 bg-[#f1f1f1] border-[#f1f1f1] w-[400px] h-[40px]  "></div>
        <div className=" m-2 bg-[#f1f1f1] border-[#f1f1f1] w-[100px] h-[40px]  "></div>

    </div>
      <div className="pt-14 flex flex-wrap justify-evenly">
        
         {Array(15).fill("").map((e , index)=><div key={index} className="m-5 w-[280px] h-[330px] mb-11 p-5 border-2 border-[#f1f1f1] rounded-lg">
          <div className="w-[235px] h-[160px] rounded-lg bg-[#f1f1f1]  pr-2"></div>
          <div className="rounded-lg mt-3.5 h-5 w-[180px] bg-[#f1f1f1] "></div>
          <div className="rounded-lg mt-3.5 h-3.5 w-[200px] bg-[#f1f1f1]"></div>
          <div className="rounded-lg mt-5 h-4 w-[180px] bg-[#f1f1f1]"></div>
         </div>)}
      </div>
       </div>
    )
  }