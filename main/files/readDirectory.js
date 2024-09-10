import path from "path"
import fs from "fs/promises"

/**
 * Reads the files in a directory and returns the full file paths.
 * @param {string} directory - The directory to read.
 * @param {string} [extension] - Optional file extension to filter by.
 * @returns {Promise<string[]>} A promise that resolves to an array of full file paths.
 */
async function readDirectory(directory, extension) {
  // Resolve the directory path to an absolute path
  const directoryPath = path.resolve(directory)

  try {
    // Read the directory contents with additional file type information
    const files = await fs.readdir(directoryPath, { withFileTypes: true })

    // Filter and map the files in a single pass
    const filteredFiles = files
      .filter(
        (dirent) =>
          // Keep only files (not directories) and optionally filter by extension
          dirent.isFile() && (!extension || dirent.name.endsWith(extension))
      )
      .map((dirent) =>
        // Convert each file to its full path
        path.join(directoryPath, dirent.name)
      )

    return filteredFiles
  } catch (error) {
    // Handle the case where the directory doesn't exist
    if (error.code === "ENOENT") {
      return []
    }
    // Re-throw any other errors
    throw error
  }
}

export default readDirectory
