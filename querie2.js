//Find the product price which are between 400 to 800


> db.taskzen.find({
...     'product_price': { '$gt': 400, '$lt': 800}
... })
{ "_id" : ObjectId("61d42a0204569c53dc5fe7dd"), "id" : "1", "product_name" : "Intelligent Fresh Chips", "product_price" : 655, "product_material" : "Concrete", "product_color" : "mint green" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7df"), "id" : "3", "product_name" : "Refined Steel Car", "product_price" : 690, "product_material" : "Rubber", "product_color" : "gold" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7e0"), "id" : "4", "product_name" : "Gorgeous Plastic Pants", "product_price" : 492, "product_material" : "Soft", "product_color" : "plum" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7e2"), "id" : "6", "product_name" : "Awesome Wooden Towels", "product_price" : 474, "product_material" : "Plastic", "product_color" : "orange" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7e3"), "id" : "7", "product_name" : "Practical Soft Shoes", "product_price" : 500, "product_material" : "Rubber", "product_color" : "pink" }
>
