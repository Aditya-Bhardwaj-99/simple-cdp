import CustomerDataPlatfrom from "./libs/CustomerDataPlatform.js"
import CdpError from "./utils/CdpError.js"
import addData from "./controllers/addData.js"
import deleteData from "./controllers/deleteData.js"
import updateData from "./controllers/updateData.js"
import addTags from "./controllers/addTags.js"
import deleteTags from "./controllers/deleteTags.js"
import searchId from "./controllers/searchId.js"
import searchdata from "./controllers/searchData.js"
import searchTags from "./controllers/searchTags.js"
import getAllData from "./controllers/getAllData.js"
import { createInterface } from 'readline'
import input from "./utils/input.js"

const main = async() => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const cdp: CustomerDataPlatfrom = new CustomerDataPlatfrom()
    while(1){
        let choice: string = await input(rl,`Enter a choice:
        1. Add customer data
        2. Delete customer data
        3. Update customer data
        4. Add tags to customer data
        5. Remove tags from customer data
        6. Search customer ID
        7. Search customer by data
        8. Search customer by tags
        9. Search customer by filter
        10. Retrive all data
        0. Exit
        `)

        switch(choice){
            case '1': await addData(cdp,rl)
                break;
            case '2': await deleteData(cdp,rl)
                break;
            case '3': await updateData(cdp,rl)
                break;
            case '4': await addTags(cdp,rl)
                break;
            case '5': await deleteTags(cdp,rl)
                break;
            case '6': await searchId(cdp,rl)
                break;
            case '7': await searchdata(cdp,rl)
                break;
            case '8': await searchTags(cdp,rl)
                break;
            case '9': console.log('Unclear');
                break;
            case '10': await getAllData(cdp,rl);
                break;
            case '0': process.exit(0);
                break;
            default:
                console.log('Unidentified request');
                break;
        }
    }
}

try{
    main()
} catch(err){
    if(err instanceof CdpError){
        console.log(err.message)
    } else {
        throw err
    }
}

export default main