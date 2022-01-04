Find products which contain product color indigo  and product price 492.00

> db.taskzen.find( {$or:[
...     {"product_price":{"$in":[492]}},
...     {"product_color":{"$in":["indigo"]}}
... ]})
{ "_id" : ObjectId("61d42a0204569c53dc5fe7de"), "id" : "2", "product_name" : "Practical Fresh Sausages", "product_price" : 911, "product_material" : "Cotton", "product_color" : "indigo" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7e0"), "id" : "4", "product_name" : "Gorgeous Plastic Pants", "product_price" : 492, "product_material" : "Soft", "product_color" : "plum" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7e6"), "id" : "10", "product_name" : "Generic Wooden Pizza", "product_price" : 84, "product_material" : "Frozen", "product_color" : "indigo" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7ed"), "id" : "17", "product_name" : "Incredible Metal Car", "product_price" : 36, "product_material" : "Fresh", "product_color" : "indigo" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7f5"), "id" : "25", "product_name" : "Licensed Steel Car", "product_price" : 20, "product_material" : "Cotton", "product_color" : "indigo" }
>
