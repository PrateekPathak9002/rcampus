const bcrypt = require("bcrypt");

// export function Hash(plaintext: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         bcrypt.hash(plaintext, 10, (err:any, hash:any) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(hash);
//             }
//         });
//     });
// }

// export function Compare(enteredPass:string,oldPass:string):boolean{
//     return bcrypt.compare(enteredPass, oldPass)
// }