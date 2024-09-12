/**
 * Formats a DICOM name string into a human-readable format.
 *
 * @param {string} nameString - The DICOM name string to format.
 * @returns {string} The formatted name string.
 */
function dicomFormatName(nameString) {
  // Check for invalid input
  if (!nameString || typeof nameString !== "string") {
    console.warn("Invalid DICOM name string provided")
    return ""
  }

  // Split the name string into its components
  const [lastName, firstName, middleName, prefix, suffix] =
    nameString.split("^")

  // Create an array of name parts in the desired order
  const nameParts = [
    prefix,
    firstName,
    middleName,
    lastName,
    suffix && `, ${suffix}`, // Add comma before suffix if it exists
  ].filter(Boolean) // Remove any falsy values (undefined, empty strings)

  // Join the parts with spaces and trim any leading/trailing whitespace
  return nameParts.join(" ").trim()
}

export default dicomFormatName
