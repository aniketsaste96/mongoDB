Delete the products which product price value are same
// > db.taskzen.createIndex({product_price:1},{unique:true,dropDups:true})
// {
//         "ok" : 0,
//         "errmsg" : "Index build failed: 7cb869e6-9910-49c2-8770-dac55f7e9614: Collection taskzen.taskzen ( 45a978f6-eb91-442f-8eec-f973f84aad0f ) :: caused by :: E11000 duplicate key error collection: taskzen.taskzen index: product_price_1 dup key: { product_price: 36.0 }",
//         "code" : 11000,
//         "codeName" : "DuplicateKey",
//         "keyPattern" : {
//                 "product_price" : 1
//         },
//         "keyValue" : {
//                 "product_price" : 36
//         }
// }
// >
  
  // 
