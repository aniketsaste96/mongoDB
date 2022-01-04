List the four product which are grater than 500 in price 

> db.taskzen.find({product_price:{
...     $gte:500
... }})


{ "_id" : ObjectId("61d42a0204569c53dc5fe7dd"), "id" : "1", "product_name" : "Intelligent Fresh Chips", "product_price" : 655, "product_material" : "Concrete", "product_color" : "mint green" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7de"), "id" : "2", "product_name" : "Practical Fresh Sausages", "product_price" : 911, "product_material" : "Cotton", "product_color" : "indigo" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7df"), "id" : "3", "product_name" : "Refined Steel Car", "product_price" : 690, "product_material" : "Rubber", "product_color" : "gold" }
{ "_id" : ObjectId("61d42a0204569c53dc5fe7e3"), "id" : "7", "product_name" : "Practical Soft Shoes", "product_price" : 500, "product_material" : "Rubber", "product_color" : "pink" }
>
