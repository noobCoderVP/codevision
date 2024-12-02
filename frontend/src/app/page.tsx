'use client';

import React, { useState } from "react";

const HomePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please upload a file.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error processing the file");
      }

      // handle success
      alert("File uploaded successfully!");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">CodeVision</h1>
        <p className="description">Upload your code file to visualize its structure.</p>
        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
        />
        {error && <div className="error">{error}</div>}
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
