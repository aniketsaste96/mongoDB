app.get("/movies/", async (request, response) => {
    const { language, rating } = request.query;
    if (language) {
        const movie = await client.db("b29wd").collection("movies").find({
            $or: [
                { "language": { "$in": [language] } }

            ]
        }).toArray();
        response.send(movie);
    }
    if (rating) {
        const movie = await client.db("b29wd").collection("movies").find({
            $or: [
                { "rating": { "$in": [+rating] } }
            ]
        }).toArray();
        response.send(movie);
    }
    else { response.send(movies) };
    console.log(request.query, language)
});






// app.get("/movies/", async (request, response) => {
//     const { language, rating } = request.query;

//     const movie = await client.db("b29wd").collection("movies").find({
//         $or: [
//             { "language": { "$in": [language] } },
//             { "rating": { "$in": [+rating] } }
//         ]
//     }).toArray();

//     response.send(movie);
//     console.log(request.query, language)
//     // response.send(movies);


// });
