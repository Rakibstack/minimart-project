

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.uri;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const dbConnect = (collection) => {

    const database = client.db(process.env.database);
    return database.collection(collection);
}

