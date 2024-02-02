import { ReactComponent as CheckSVG } from "../../assets/check.svg";
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg";

const icontTypes = {
    "check": (color) => <CheckSVG 
    className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG 
    className="Icon-svg" fill={color}/>,
};


function TodoIcon( {type, color, onClick}) {
        return (
            <span 
                className= {`Icon Icon-svg Icon-container-${type}`}
                onClick={onClick}> 

                {icontTypes[type](color)}


            </span>
        );
}

export { TodoIcon }