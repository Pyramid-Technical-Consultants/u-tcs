# U-TCS System Architecture

The United Treatment Control System (U-TCS) is designed to provide secure and efficient management of users, patients, DICOM data, RT ion plan data, and system logs. The architecture is composed of several interdependent systems that communicate to achieve these objectives.

## Overview

The U-TCS is divided into the following main systems:

1. **User Management System (UMS)**
2. **Patient Management System (PMS)**
3. **RT Ion Plan System (RIPS)**
4. **Logging Accountability Control System (LACS)**

Each system is responsible for specific functionality within the U-TCS, and they work together to ensure a secure and compliant environment for managing sensitive medical data and treatment plans.

## System Components

### 1. User Management System (UMS)

The **UMS** handles the authentication and authorization of users accessing the U-TCS.

- **Local User Module (LUM)**: Stores user data in a securely encrypted JSON file. Handles user authentication and maintains access controls.
- **Key Functions**:
  - User authentication via email and password.
  - Secure storage and encryption of user data.
  - Logging of user authentication attempts and access to user data.

### 2. Patient Management System (PMS)

The **PMS** manages patient data required for treatment planning and documentation.

- **Core Functions**:
  - Storage of patient information such as ID, name, birth date, sex, and QC status.
  - Searching and retrieving patient data.
  - Ensuring patient data is not stored in non-volatile memory.
  - Logging of all patient data creation, updates, and retrieval actions.

### 3. DICOM Patient Module (DPM)

The **DPM** extracts patient data from DICOM files, ensuring compliance with DICOM standards.

- **Core Functions**:
  - Parsing DICOM files to extract patient data.
  - Handling multiple patients within a single DICOM file.
  - Supporting local file uploads and DICOMweb services.
  - Verifying file integrity and managing errors.
  - Logging of all DICOM file interactions and errors.

### 4. RT Ion Plan System (RIPS)

The **RIPS** manages RT ion beam treatment plans extracted from DICOM files.

- **Core Functions**:
  - Parsing RT Ion Plan data to extract treatment parameters.
  - Validating the integrity of RT Ion Plan data.
  - Supporting various ion types for treatment.
  - Extracting beam parameters, including energy, dose, spatial coordinates, and beam fractions.
  - Providing a read-only interface for visualizing RT Ion Plan data.
  - Ensuring compliance with DICOM standards.
  - Logging of all actions related to RT Ion Plan data.

### 5. Logging Accountability Control System (LACS)

The **LACS** manages secure logging of all actions and events across the U-TCS.

- **Core Functions**:
  - Securely storing log files using AES-256 encryption.
  - Integrating with a file server for long-term storage and archival of logs.
  - Providing an interface for querying and reviewing logs, accessible only to authorized administrators.
  - Ensuring logs comply with standards such as Syslog or Common Event Format (CEF).

## Interactions and Data Flow

1. **UMS**:

   - Authenticates users and logs authentication attempts.
   - Sends logs of user actions to the **LACS**.

2. **PMS**:

   - Manages patient data and ensures data integrity.
   - Interacts with the **DPM** for importing patient data from DICOM files.
   - Logs all patient data operations to the **LACS**.

3. **DPM**:

   - Extracts and verifies patient data from DICOM files.
   - Supports RT Ion Plan data extraction for **RIPS**.
   - Logs file interactions and integrity checks to the **LACS**.

4. **RIPS**:

   - Processes RT Ion Plan data for treatment delivery.
   - Validates and visualizes treatment plans.
   - Logs all operations related to RT Ion Plan data to the **LACS**.

5. **LACS**:
   - Centralized logging repository for all U-TCS systems.
   - Ensures secure storage and accessibility of logs for system monitoring and audits.

## Security and Compliance

- All systems within the U-TCS must adhere to strict security protocols, including data encryption, access control, and secure logging.
- The **LACS** provides a robust framework for tracking all actions and ensuring accountability across the system.
- Compliance with DICOM standards and relevant data protection regulations is mandatory to ensure patient privacy and data integrity.

## Conclusion

The U-TCS architecture is designed to be modular, secure, and compliant, with each system contributing to the overall functionality and reliability of the platform. Through well-defined interactions and a centralized logging system, U-TCS provides a robust solution for managing medical treatment data and ensuring secure operations.
