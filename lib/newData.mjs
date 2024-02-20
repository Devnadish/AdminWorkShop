// Import the required module
import { MongoClient } from "mongodb";

// Connection URI
const uri =
  "mongodb+srv://devnadish:Leno_1972123@cluster0.blravpl.mongodb.net/workshop?retryWrites=true&w=majority";
const dbName = "workshop";
const collectionName = "cardNote";

// Function to delete data
async function deleteData(table) {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(table);

    // Specify the criteria for deleting documents
    const deletionFilter = {
      /* Your deletion criteria */
    };

    // Delete the documents that match the deletion filter
    const result = await collection.deleteMany(deletionFilter);
    console.log(`${result.deletedCount} document(s) deleted`);
  } finally {
    await client.close();
  }
}

// Call the deleteData function
deleteData("Car").catch(console.error);
deleteData("Client").catch(console.error);
deleteData("cardNote").catch(console.error);
deleteData("Expence").catch(console.error);
deleteData("Iplog").catch(console.error);
deleteData("PaymentVoucher").catch(console.error);
deleteData("RecietVoucher").catch(console.error);
deleteData("cardNote").catch(console.error);
deleteData("comment").catch(console.error);
deleteData("complain").catch(console.error);
deleteData("fixingOrder").catch(console.error);
deleteData("isLogin").catch(console.error);
deleteData("labor").catch(console.error);
deleteData("transaction").catch(console.error);
deleteData("suggestion").catch(console.error);
deleteData("openFixingOrder").catch(console.error);
deleteData("Expence").catch(console.error);
deleteData("cardImage").catch(console.error);
