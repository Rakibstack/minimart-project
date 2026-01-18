import { ObjectId } from "mongodb";

const { dbConnect } = require("@/app/lib/dbconnect");


const iteamCollection = dbConnect('iteams');


export async function GET(request, { params }) {

    const { id } = await params;

    const query = {_id: new ObjectId(id)};
    const iteam = await iteamCollection.findOne(query);
    return Response.json(iteam);
}


