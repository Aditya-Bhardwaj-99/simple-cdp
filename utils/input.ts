import { Interface } from "readline";

const input  = (rl:Interface,message: string): Promise<string> => {
 return new Promise(resolve=>{
    rl.question(message,(answer: string)=>{
        resolve(answer)
    })
 })
}

export default input