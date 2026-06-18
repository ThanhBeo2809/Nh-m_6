**Books CRUD Activity Diagram**

```mermaid
flowchart TD
  Start([Start]) --> CreateReq["User: POST /books\n(create payload)"]
  CreateReq --> CreateService["BooksController.create() -> BooksService.create()"]
  CreateService --> Persist["(in-memory) add Book, assign id"]
  Persist --> RespondCreate["Return created Book (201)"]
  RespondCreate --> End([End])

  %% Read flow
  ReadAllReq["User: GET /books"] --> ReadAllService["BooksController.findAll()"]
  ReadAllService --> RespondAll["Return list of books (200)"]

  ReadOneReq["User: GET /books/:id"] --> ReadOneService["BooksController.findOne()"]
  ReadOneService --> IfFound{Book exists?}
  IfFound -->|yes| RespondOne["Return book (200)"]
  IfFound -->|no| Respond404["Throw 404 NotFound"]

  %% Update flow
  UpdateReq["User: PUT /books/:id\n(update payload)"] --> UpdateService["BooksController.update() -> BooksService.update()"]
  UpdateService --> IfFoundUpd{Book exists?}
  IfFoundUpd -->|yes| PersistUpd["Apply changes and return updated book"]
  IfFoundUpd -->|no| Respond404Upd["Throw 404 NotFound"]

  %% Delete flow
  DeleteReq["User: DELETE /books/:id"] --> DeleteService["BooksController.remove() -> BooksService.remove()"]
  DeleteService --> IfFoundDel{Book exists?}
  IfFoundDel -->|yes| PersistDel["Remove book and return removed record"]
  IfFoundDel -->|no| Respond404Del["Throw 404 NotFound"]

  RespondAll --> End
  RespondOne --> End
  PersistUpd --> End
  PersistDel --> End

```

File: docs/books-crud.md
