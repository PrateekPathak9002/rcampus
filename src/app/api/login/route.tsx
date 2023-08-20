import { NextResponse } from "next/server";
import { connectToDb } from '@/utils/db'
import { redirect } from 'next/navigation'
const brcrypt = require('bcrypt')

export async function POST(req: Request): Promise<NextResponse> {
    const res = await req.formData()
    let enrno: string = String(res.get("enrno"));
    let password: string = String(res.get("password"));
    let con = connectToDb("rcampus")
    con.connect((err: any) => {
        if (err) throw err;

        var sql = "SELECT * FROM users WHERE enrno=? ";
        con.query(sql, [enrno], (err: any, result: any) => {
            if (err) {
                console.error("Error executing query:", err);
            } else {
                if ( brcrypt.compare(password, result[0]['password']) ) {
                    NextResponse.redirect(process.env.DEV_URL+'/home')
                    console.log(process.env.DEV_URL+'/home')
                }else{
                    console.log(brcrypt.compare(password, result[0]['password']))
                }
            }
        });
    });
    return new NextResponse("nice")
}