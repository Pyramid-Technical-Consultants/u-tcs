import path from "path"
import fs from "fs"

// Reads the files in a directory and returns the full file paths.
// If an extension is provided, only files with that extension are returned.
// Otherwise, all files are returned.
// Final returned files are full paths.
function readDirectory(directory, extension) {
  // Join the directory path.
  const directoryPath = path.join(directory)

  // Check if the directory exists.
  if (!fs.existsSync(directoryPath)) {
    return []
  }

  // Read the files in the directory.
  const files = fs.readdirSync(directoryPath)

  if (extension) {
    // Filter the files by the extension.
    files = files.filter((file) => file.endsWith(extension))
  }

  // Create full file paths.
  files = files.map((file) => path.join(directoryPath, file))

  // Return the files.
  return files
}

export default readDirectory
