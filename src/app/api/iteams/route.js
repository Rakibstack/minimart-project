import { dbConnect } from "@/app/lib/dbconnect";


const iteamCollection = dbConnect('iteams');

export async function GET(request) {

    const iteams = await iteamCollection.find({}).toArray();
    return  Response.json(iteams);
}

export async function POST(request) {

    const  iteam  = await request.json();

    const newIteam = {
        ...iteam,
        date: new Date().toISOString()
    }
    try {
        const result = await iteamCollection.insertOne(newIteam);
        return Response.json(result)
    }
    catch (error) {
        return new Response("Failed to add item", { status: 500 });
 
    }
}