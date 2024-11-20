//Mongo Shell commands:
db.products.insertOne(
    {
        "name" : "Product 1",
        "desc" : "Black Lab",
        "price" : 45000 ,
        "url" : "https://picsum.photos/id/237/200"
    }
);
db.products.insertMany(
    [
        {
            "name" : "Product 3",
            "desc" : "Description of Product 3",
            "price" : 75000 ,
            "url" : "https://picsum.photos/id/2/200"
        },
        {
            "name" : "Product 4",
            "desc" : "Description of Product 4",
            "price" : 35000 ,
            "url" : "https://picsum.photos/id/100/200"
        } 
    ]
);
db.products.insertMany(
    [
        {
            "name" : "Product 5",
            "desc" : "Description of Product 5",
            "price" : 7000 ,
            "url" : "https://picsum.photos/id/2/200"
        },
        {
            "name" : "Product 6",
            "desc" : "Description of Product 6",
            "price" : 5000 ,
            "url" : "https://picsum.photos/id/100/200"
        } 
    ]
);