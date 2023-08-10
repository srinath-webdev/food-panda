import { useRouteError } from "react-router-dom"

const Error = () => {

const err = useRouteError()
console.log(err) // this will show error in console

  return (
    <div className="text-black text-center">
        <h1>
            Oops!
            error something went wrong🙄
        
        </h1>
        <h2>{err.status}: {err.statusText}</h2>
    </div>
  )
}

export default Error