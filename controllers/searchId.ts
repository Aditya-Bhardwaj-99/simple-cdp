import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js";
import CdpError from "../utils/CdpError.js";
import { cdpObjInterface } from "../interfaces/cdpInterfaces.js";
import { Interface } from "readline";

const searchId = async (cdp: CustomerDataPlatfrom,rl: Interface) => {
    try{
        let id: string = await input(rl,'Enter the ID to search:- ')
        let record: cdpObjInterface | undefined = cdp.getById(id)
        if(record){
            console.log(JSON.stringify(record,null,4))
        } else {
            console.log("No record found")
        }
    } catch(err){
        if(err instanceof CdpError){
            console.log(err)
        } else {
            throw err
        }
    }
}

export default searchId