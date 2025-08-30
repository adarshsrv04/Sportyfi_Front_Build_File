import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Convert import.meta.url to __dirname equivalent in ES module
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Serve static files from the build folder
app.use(express.static(path.join(dirname, "dist")));

// Serve index.html for all routes
app.get("*", (req, res) => {
    res.sendFile(path.join(dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));