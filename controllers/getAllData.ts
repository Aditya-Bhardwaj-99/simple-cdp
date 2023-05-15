import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js";
import CdpError from "../utils/CdpError.js";
import { cdpObjInterface } from '../interfaces/cdpInterfaces.js';
import { Interface } from "readline";

const getAllData = async (cdp: CustomerDataPlatfrom,rl: Interface) => {
    try{
        let page: string = await input(rl,'Enter the page number:- ')
        let size: string = await input(rl,'Enter the page size:- ')
        let records: cdpObjInterface[] = cdp.getAll(parseInt(page),parseInt(size))
        if(records){
            console.log(JSON.stringify(records,null,4))
        } else {
            console.log('No records')
        }
    } catch(err){
        if(err instanceof CdpError){
            console.log(err)
        } else {
            throw err
        }
    }
}

export default getAllData