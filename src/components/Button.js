
import { forwardRef } from "react";

const FancyButton = forwardRef((props, ref) => {
    const handleClick = () => {
        console.log("bawo")
    }
    return (
        <button ref={ref} className="FancyButton" onClick={handleClick}>
        {props.children}
        </button>
    )
})
 
export default FancyButton;