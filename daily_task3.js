//update intersteller movie rating to 9


app.put("/", async (request, response) => {

    const data = await client
        .db("b29wd")
        .collection("movies").updateOne({ name: "Interstellar" }, { $set: request.bdoy })


    console.log(data);
    response.send(data)
})
