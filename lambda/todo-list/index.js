const { service } = require('./adapters/http')
const { DB } = require('./adapters/db')

async function readItems(payload)
{
    const db = new DB(payload.table_name)

    return await db.read()
}

exports.handler = service
({
    read: readItems,
})

/*
test suit for "To Do List" db operations
========================================

setup: 
------
* create a new table in dynamo db with a unique name
* make key field with name "id" and type "string"
* ensure that your table schema implements IListItem interface

>>>
    read entry test
    ===============
    {
        "action": "read",
        "payload": 
        {
            "table_name": "kiexv1lh"
        }
    }
<<<

*/