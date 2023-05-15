import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js";
import CdpError from "../utils/CdpError.js";
import { cdpObjInterface, tagsInterface } from "../interfaces/cdpInterfaces.js";
import { Interface } from "readline";

const searchTags = async (cdp: CustomerDataPlatfrom,rl: Interface) => {
    try{
        let tags: string = await input(rl,'Enter comma seperated tags to search with:- ')
        let tagsarr: string[];
        let tagsObj: tagsInterface={}
        if(tags){
            tagsarr = tags.split(',')
            for(let tag of tagsarr){
                tagsObj[tag] = 1
            }
        }
        let records: cdpObjInterface[] = cdp.searchTag(tagsObj)
        if(records){
            console.log(JSON.stringify(records,null,4))
        } else {
            console.log("No records found");
        }
    } catch(err){
        if(err instanceof CdpError){
            console.log(err)
        } else {
            throw err
        }
    }
}

export default searchTags