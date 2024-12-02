           +-------------------------+
           |      Frontend (UI)      |
           |  (React.js / Next.js)   |
           +-------------------------+
                     |
        +------------|-------------+
        |                          |
+----------------+      +------------------------+
|  Graph Module  |      |  Pseudo-Code Module    |
|  (D3.js/Cytoscape)|   |(Function Viewer, Editor)|
+----------------+      +------------------------+
                     |
           +-------------------------+
           |       Backend API       |
           | (FastAPI / Flask / Node)|
           +-------------------------+
        +-----------------------------+
        |    Code Analysis Engine     |
        |   (AST / Language Parsers)  |
        +-----------------------------+
                     |
  +------------------------------------------+
  |     LLM Integration & Processing Layer   |
  | (OpenAI API / Llama / Fine-tuned Models) |
  +------------------------------------------+
                     |
   +----------------------------------------+
   | Database and Storage                   |
   | (PostgreSQL / MongoDB + S3 for files)  |
   +----------------------------------------+
                     |
        +------------------------+
        | Authentication Layer   |
        | (JWT / OAuth2.0)       |
        +------------------------+
