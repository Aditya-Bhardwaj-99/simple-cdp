import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js";
import CdpError from "../utils/CdpError.js";

const searchFilters = async (cdp: CustomerDataPlatfrom) => {
    try{

    } catch(err){
        if(err instanceof CdpError){
            console.log(err)
        } else {
            throw err
        }
    }
}

export default searchFilters