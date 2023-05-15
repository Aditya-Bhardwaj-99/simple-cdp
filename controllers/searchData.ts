import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js";
import CdpError from "../utils/CdpError.js";
import constants from "../utils/constants.js";
import { cdpFilterObjInterface, keyStringInterface } from "../interfaces/cdpInterfaces.js";
import { Interface } from "readline";

const searchdata = async (cdp: CustomerDataPlatfrom,rl: Interface) => {
    try{
        let paramNum: string = await input(rl,`Select 1 from following:
        1. First Name
        2. Last Name
        3. Email
        `)
        let param = (constants.enumSearch as keyStringInterface)[paramNum]
        let word: string = await input(rl,'Enter search word:- ')
        let records: cdpFilterObjInterface[] = cdp.search(param,word)
        if(records){
            console.log(JSON.stringify(records,null,4))
        } else {
            console.log("No records found")
        }
    } catch(err){
        if(err instanceof CdpError){
            console.log(err)
        } else {
            throw err
        }
    }
}

export default searchdata