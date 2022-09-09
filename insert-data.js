/* - Insert data
Insert at least 3 authors with the following fields

Name: String
Last name: String
Date of Birth: Date
Date of death: Date
Country: String*/

/* - Insert at least 10 books with the following fields:

- Title: String
- Release Year: [Date]
- Category: String
- Authors (id, name, lastName): [{id, name, lastName}, … ]*/


//!use books (insertOne) - Authors

db.authors.insertOne({ Name: "Alex", LastName: "Feijo", DateOfBirth: 1980, DateOfDeath: 2000, Country: "Spain", Age: 20, });

db.authors.insertOne({ Name: "Pedro", LastName: "Filloa", DateOfBirth: 1970, DateOfDeath: 2010, Country: "Spain", Age: 40, });

db.authors.insertOne({ Name: "Giovani", LastName: "Pasta", DateOfBirth: 1960, DateOfDeath: 2020, Country: "Italia", Age: 50, });

//!use books (insertMany) - Books

db.books.insertMany([{Name:"MongoDB:Powerful and Scalable Data", Authors:"Shannon Bradshaw, Eoin Brazil, Kristina Chodorow", Price:49}, {Name:"Cracking the Coding Interview, 189 Programming Questions and Solutions", Authors:"Gayle Laakmann McDowell", Price:34}, {Name:"Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems", Authors:"Martin Kleppmann", Price:44}, {Name:"Programming TypeScript: Making Your JavaScript Applications Scale", Authors:"Boris Cherny", Price:41}, {Name:"JavaScript - The Definitive Guide: Master the World's Most-Used Programming Language", Authors:"David Flanagan", Price:43}, {Name:"C++ Primer", Authors:"Josée Lajoie, Barbara E. Moo", Price:42}, {Name:"A Project Guide to UX Design: For user experience designers in the field or in the making (Voices That Matter)", Authors:"Carolyn Chandler, Russ Unger", Price:34}, {Name:"HTML and CSS: Design and Build Websites", Authors:"Jon Duckett", Price:35}, {Name:"The Linux Command Line, 2nd Edition: A Complete Introduction", Authors:"William E. Shotts", Price:40}, {Name:"Clean Architecture: A Craftsman's Guide to Software Structure and Design", Authors:"Robert C. Martin, Kevlin Henney", Price:30}]);