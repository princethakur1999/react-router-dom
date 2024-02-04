import { Link } from "react-router-dom";

export default function Navigation() {


    return (

        <div className="text-white bg-green-500 w-[100%] h-[60px] flex justify-start items-center gap-8 px-8">

            <Link to="/">Home</Link>

            <Link to="/skills">Skills</Link>

            <Link to="/projects">Projects</Link>

            <Link to="/education">Education</Link>

        </div>
    )
}
