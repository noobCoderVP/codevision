from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for the frontend (Next.js running on localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow your frontend to communicate
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    try:
        # Read the uploaded file
        content = await file.read()
        print(content)
        # Mock processing the file
        mock_visualization = {
            "nodes": [
                {"id": 1, "label": "Function A"},
                {"id": 2, "label": "Function B"}
            ],
            "edges": [{"from": 1, "to": 2}]
        }

        return JSONResponse(content=mock_visualization, status_code=200)
    except Exception as e:
        print(e)
        return JSONResponse(content={"error": str(e)}, status_code=500)
