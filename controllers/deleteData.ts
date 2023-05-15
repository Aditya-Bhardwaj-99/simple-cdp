import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js";
import CdpError from "../utils/CdpError.js";
import { Interface } from "readline";

const deleteData = async (cdp: CustomerDataPlatfrom,rl: Interface) => {
    try{
        let id: string = await input(rl,'Enter the ID of customer to delete:- ')
        cdp.deleteCust(id)
        console.log("Customer deleted")
    } catch(err){
        if(err instanceof CdpError){
            console.log(err)
        } else {
            throw err
        }
    }
}

export default deleteData