import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js";
import CdpError from "../utils/CdpError.js";
import { tagsInterface } from "../interfaces/cdpInterfaces.js";
import { Interface } from "readline";

const addTags = async (cdp: CustomerDataPlatfrom,rl: Interface) => {
    try{
        let id: string = await input(rl,'Enter ID of customer to add Tags to:- ')
        let tags: string =await input(rl,'Enter comma seperated tags to be added:- ')
        let tagsarr: string[];
        let tagsObj: tagsInterface={}
        if(tags){
            tagsarr = tags.split(',')
            for(let tag of tagsarr){
                tagsObj[tag] = 1
            }
        }
        cdp.updateTag(id,tagsObj)
        console.log("Tags added to customer")
    } catch(err){
        if(err instanceof CdpError){
            console.log(err)
        } else {
            throw err
        }
    }
}

export default addTags