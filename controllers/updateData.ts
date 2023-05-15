import input from "../utils/input.js"
import CustomerDataPlatfrom from "../libs/CustomerDataPlatform.js";
import CdpError from "../utils/CdpError.js";
import constants from "../utils/constants.js";
import { cdpUpdtObjInterface,addressupdtInterface } from "../interfaces/cdpInterfaces.js";
import { Interface } from "readline";

const updateData = async (cdp: CustomerDataPlatfrom,rl: Interface) => {
    try{
        let id: string = await input(rl,'Enter the ID of customer to update:- ')
        let firstName: string = await input(rl,'Enter First name if updated else leave empty:- ')
        let lastName: string = await input(rl,'Enter Last name if updated else leave empty:- ')
        let email:string='n', email_val:boolean = false;
        while(!email_val && email){
            email = await input(rl,'Enter valid email if updated else leave empty:- ')
            email_val=constants.validEmail.test(email)
        }
        let phone:string='n', phone_val:boolean = false;
        while(!phone_val && phone){
            phone =await input(rl,'Enter valid phone if updated else leave empty:- ')
            phone_val=constants.validPhone.test(phone)
        }
        let street_add: string = await input(rl,'Enter Street address if updated else leave empty:- ')
        let city: string = await input(rl,'Enter City if updated else leave empty:- ')
        let state: string = await input(rl,'Enter State if updated else leave empty:- ')
        let zip: string = await input(rl,'Enter zip code if updated else leave empty:- ')
        let finalData: cdpUpdtObjInterface = {updatedAt:new Date()}
        let address: addressupdtInterface = {}
        if(firstName)finalData.firstName=firstName
        if(lastName)finalData.lastName=lastName
        if(email)finalData.email=email
        if(phone)finalData.phone=phone
        if(street_add)address.street=street_add
        if(city)address.city=city
        if(state)address.state=state
        if(zip)address.zip=zip
        if(zip||city||state||street_add){
            finalData.address=address
        }
        cdp.updateCust(id,finalData)
        console.log("Customer data updated")
    } catch(err){
        if(err instanceof CdpError){
            console.log(err)
        } else {
            throw err
        }
    }
}

export default updateData