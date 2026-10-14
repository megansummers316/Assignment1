Art Pieces API

The Art Pieces API is a REST API that allows users to manage information about different types of art. It uses Node.js, Express, TypeScript, and MongoDB to store and manage art piece records.
Each art piece includes a category, title, date, and artist. The available categories are Painting, Sculpture, Pottery, and Craft.

API Endpoints
The API supports the following CRUD operations:
POST: `/api/v1/artPieces` => Add a new art piece 
GET: `/api/v1/artPieces` => Retrieve all art pieces 
GET: `/api/v1/artPieces/:id` => Retrieve one art piece by ID
PUT: `/api/v1/artPieces/:id` => Update an existing art piece
DELETE: `/api/v1/artPieces/:id` => Delete an art piece

API Documentation
Swagger documentation is available at:
`/api/docs`
