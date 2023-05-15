import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js"
import {v4 as uuidv4} from 'uuid'
import constants from "../utils/constants.js"
import { cdpObjInterface, tagsInterface } from "../interfaces/cdpInterfaces.js"
import CdpError from "../utils/CdpError.js"
import { Interface } from "readline"

const addData = async (cdp: CustomerDataPlatfrom,rl: Interface) => {
    try{
        let id: string = uuidv4()
        let firstName: string = await input(rl,'Enter First name:- ')
        let lastName: string = await input(rl,'Enter Last name:- ')
        let email:string='', email_val:boolean = false;
        while(!email_val){
            email = await input(rl,'Enter valid Email:- ')
            email_val=constants.validEmail.test(email)
        }
        let phone:string='', phone_val:boolean = false;
        while(!phone_val){
            phone = await input(rl,'Enter valid Phone:- ')
            phone_val=constants.validPhone.test(phone)
        }
        let street_add: string = await input(rl,'Enter Street address:- ')
        let city: string = await input(rl,'Enter City:- ')
        let state: string = await input(rl,'Enter State:- ')
        let zip: string = await input(rl,'Enter Zip:- ')
        let tags: string = await input(rl,'Enter comma seperated tags if required else leave empty:- ')
        let tagsarr: string[];
        let tagsObj: tagsInterface={}
        if(tags){
            tagsarr = tags.split(',')
            for(let tag of tagsarr){
                tagsObj[tag] = 1
            }
        }
        let finalData: cdpObjInterface = {
            id:id,
            firstName:firstName,
            lastName: lastName,
            email:email,
            phone:phone,
            address:{
                street:street_add,
                city:city,
                state:state,
                zip:zip
            },
            tags:tagsObj,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        cdp.addCust(finalData)
        console.log('Customer added')
        return true
    } catch(err){
        if(err instanceof CdpError){
            console.log(err.message)
            return false
        } else {
            throw err
        }
    }
}

export default addData