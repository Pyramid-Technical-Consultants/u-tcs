# U-TCS Verification Plan

This document outlines the verification plan for the United Treatment Control System (U-TCS), an open-source control system for coordinating medical and industrial devices in radiation therapy treatments. The plan is designed to ensure compliance with IEC 62304 standards for medical device software.

## Scope

This verification plan covers all software components of the U-TCS, including:

- User Management System (UMS)
- Patient Management System (PMS)
- RT Ion Plan System (RIPS)
- Logging Accountability Control System (LACS)
- Main application and user interface

## Verification Approach

The verification process will follow a multi-tiered approach:

1. Unit Testing
2. Integration Testing
3. User Acceptance Testing

## Test Environment

- Development Environment: As specified in the README.md file
- Test Environment: As specified in the README.md file

- Testing Frameworks: Jest for unit testing, Cypress for end-to-end testing
- Continuous Integration: GitHub Actions

## Unit Testing Activities

Objective: Verify individual components and functions work as expected.

Approach:
- Use Jest for JavaScript/React components
- Aim for >80% code coverage
- Mock external dependencies and services

Key areas:
- UMS functions (user authentication, data encryption)
- PMS data handling and DICOM parsing
- RIPS treatment plan processing
- LACS logging mechanisms

## Integration Testing Activities

Objective: Verify interactions between different modules and systems.

Approach:
- Use Cypress for end-to-end testing of key workflows
- Test API integrations and data flow between systems

Key areas:
- UMS integration with PMS and RIPS
- DICOM file processing through PMS and RIPS
- Logging system integration across all modules

### Integration Test Cases

The following test cases are considered the most important to verify the system's correctness and safety. Each test case must have its own Markdown file in the `docs/integration-tests` directory. The test case file must contain detailed instructions for executing the test case, and the latest results of the test case. Previous test results are retained in the git history of the file.

#### UMS Test Cases

1. User Authentication
   - Test valid login credentials
   - Test invalid login attempts
   - Verify password hashing using Argon2

2. User Data Security
   - Verify encryption of user data in JSON file
   - Test access controls for user data

#### PMS Test Cases

1. Patient Data Management
   - Test creation, retrieval, and updating of patient records
   - Verify unique patient ID generation
   - Test patient search functionality

2. DICOM Integration
   - Test DICOM file parsing and data extraction
   - Verify handling of multiple patients in a single DICOM file
   - Test error handling for corrupted DICOM files

#### RIPS Test Cases

1. RT Ion Plan Processing
   - Test extraction of treatment parameters from DICOM files
   - Verify support for various ion types (protons, carbon ions)
   - Test visualization of beam paths and dose distributions

2. Treatment Plan Validation
   - Verify integrity checks on RT Ion Plan data
   - Test error handling for incomplete or invalid plans

#### LACS Test Cases

1. Logging Functionality
   - Verify secure storage of log files with AES-256 encryption
   - Test log querying and review functionality
   - Verify compliance with logging standards (e.g., Syslog, CEF)

2. Audit Trail
   - Test comprehensive logging of all system actions
   - Verify log integrity and non-repudiation

## User Acceptance Testing Activities

Objective: Verify the system meets user needs and is usable in real-world scenarios.

Approach:
- Involve actual end-users (medical professionals, researchers)
- Conduct usability testing sessions
- Gather and incorporate user feedback

## Verification Traceability

- Maintain a traceability matrix linking requirements to test cases and results
- Ensure all software requirements and safety requirements are covered by verification activities

## Defect Management

- Use GitHub Issues for tracking and managing defects
- Classify defects by severity and impact on safety
- Implement a process for defect resolution and re-verification

## Continuous Verification

- Integrate automated tests into the CI/CD pipeline
- Conduct regular manual verification cycles, especially after significant updates

## Verification Closure

- Final verification report to be reviewed and approved by the project lead and quality assurance team
- Any open issues or deviations to be documented and risk-assessed before release

## References

- IEC 62304: Medical device software life cycle processes
- ISO 14971: Application of risk management to medical devices
- Project Requirements Document
- U-TCS Software Architecture Document
- U-TCS Risk Management Plan