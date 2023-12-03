Open a terminal and run the MongoDB shell by typing mongo.
Create a new database using the use command. Replace <database_name> with your desired database name

use <database_name>

Insert records into a collection within the database. Replace <collection_name> with your desired collection name and provide the data:

db.<collection_name>.insertMany([
    { key1: 'value1', key2: 'value2' },
    { key1: 'value3', key2: 'value4' },
    // Add more records as needed
])
