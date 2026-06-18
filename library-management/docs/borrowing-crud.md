## Borrowing CRUD Activity Diagram

```mermaid
flowchart TD
  Start([Start]) --> Create{Create ?}
  Create -->|Yes| CreateAction[Create borrowing record<br/> (POST /borrowings)] --> Decision1
  Create -->|No| Read{Read ?}

  Read -->|List| ListAction[GET /borrowings] --> Decision1
  Read -->|Single| SingleAction[GET /borrowings/:id] --> Decision1

  Decision1 --> Update{Update ?}
  Update -->|Yes| UpdateAction[Update record<br/> (PUT /borrowings/:id)] --> Decision2
  Update -->|No| Delete{Delete ?}

  Delete -->|Yes| DeleteAction[Delete record<br/> (DELETE /borrowings/:id)] --> Decision2
  Delete -->|No| Decision2

  Decision2 --> End([End])

  style CreateAction fill:#e6ffed,stroke:#2f8f4b
  style UpdateAction fill:#fff4e6,stroke:#b86b00
  style DeleteAction fill:#ffe6e6,stroke:#c12b2b
  style ListAction fill:#e6f0ff,stroke:#2b59c1
  style SingleAction fill:#e6f0ff,stroke:#2b59c1
```

Description: Lưu đồ minh họa luồng CRUD cho `Borrowing` — tạo, đọc (danh sách hoặc theo id), cập nhật, xóa.
