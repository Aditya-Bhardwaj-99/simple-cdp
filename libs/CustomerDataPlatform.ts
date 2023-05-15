import { cdpObjInterface,cdpUpdtObjInterface, tagsInterface,keyStringInterface,cdpFilterObjInterface } from '../interfaces/cdpInterfaces.js'
import CdpError from '../utils/CdpError.js';

export default class CustomerDataPlatfrom {
    private cdpObj : cdpObjInterface[];
    constructor(){
        this.cdpObj = []
    }

    addCust = (cdpCust : cdpObjInterface) => {
        this.cdpObj.push(cdpCust)
    }

    deleteCust = (id: string) => {
        let index: number = this.cdpObj.findIndex(obj => obj.id === id)
        if (index === -1){
            throw new CdpError("No record found","NoREC")
        }
        this.cdpObj.splice(index,1)
    }

    getById = (id: string) => {
        let record: cdpObjInterface | undefined = this.cdpObj.find(obj => obj.id === id)
        return record
    }

    getAll = (page: number, size: number) => {
        let records: cdpObjInterface[] = this.cdpObj.slice((page-1)*size , page*size)
        return records
    }

    updateTag = (id: string, tag: tagsInterface) => {
        let index: number = this.cdpObj.findIndex(obj => obj.id === id)
        if (index === -1){
            throw new CdpError("No record found","NoREC")
        }
        this.cdpObj[index].tags = {...this.cdpObj[index].tags,...tag}
    }

    searchTag = (tags: tagsInterface) => {
        let records: cdpObjInterface[] = this.cdpObj.filter(
            obj => Object.keys(tags).every(
                key => tags[key] === obj.tags[key]
            )
        )
        return records
    }

    searchFilters = (filter: cdpFilterObjInterface) => {
        let records: cdpObjInterface[] = this.cdpObj.filter(
            obj => Object.keys(filter).every(
                key => (filter as keyStringInterface)[key] === (obj as keyStringInterface)[key]
            )
        )
        return records
    }

    search = (param: string, word: string) => {
        let records: cdpObjInterface[] = this.cdpObj.filter(obj => (obj as keyStringInterface)[param].includes(word))
        return records;
    }

    updateCust = (id: string,updateObj: cdpUpdtObjInterface) => {
        let index: number = this.cdpObj.findIndex(obj => obj.id === id)
        if (index === -1){
            throw new CdpError("No record found","NoREC")
        }
        let elem: string;
        let addelem: string;
        for(elem in updateObj){
            console.log(elem)
            if(elem === 'address'){
                for(addelem in updateObj.address){
                    (this.cdpObj[index].address as keyStringInterface)[addelem] = (updateObj.address as keyStringInterface)[addelem]
                }
            } else {
                (this.cdpObj[index] as keyStringInterface)[elem] = (updateObj as keyStringInterface)[elem]
            }
        }
    }
}