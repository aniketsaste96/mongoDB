Find the product with a row id of 10

> db.taskzen.find({
     id:{
        $eq:"10"
    }
 })
{ "_id" : ObjectId("61d42a0204569c53dc5fe7e6"), "id" : "10", "product_name" : "Generic Wooden Pizza", "product_price" : 84, "product_material" : "Frozen", "product_color" : "indigo" }
>
