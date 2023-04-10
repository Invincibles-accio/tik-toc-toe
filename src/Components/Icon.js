import { FaTimes,FaRegCircle,FaPen } from "react-icons/fa";


const Icon = ({user_icon}) => {
    //   console.log("userIcon", user_icon)
     switch(user_icon){
            case "circle": return <FaRegCircle  className="icon"/>;
            case "cross": return <FaTimes className="icon" />;
            default: return <FaPen className="icon"/>;
     }
}

export default Icon

