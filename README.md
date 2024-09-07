# United Treatment Control System (U-TCS)

The **United Treatment Control System (U-TCS)** is an open-source project designed to provide a modern, minimalist control system for coordinating the operation of medical and industrial devices in delivering radiation therapy treatments. Built entirely in JavaScript using **Electron**, **Next.js**, and **React**, U-TCS offers a high-performance, reliable solution for managing various modalities of radiation treatments.

## Key Features

- **Cross-Platform**: U-TCS works across Windows, macOS, and Linux, ensuring broad compatibility in diverse environments.
- **Minimalist Design**: The system emphasizes simplicity, offering a clean, intuitive user interface while maintaining the flexibility needed for complex device coordination.
- **High-Quality Code**: U-TCS is built on industry-standard frameworks, ensuring robust performance, security, and ease of maintenance.
- **Dependable Control**: Designed with medical and industrial standards in mind, U-TCS ensures precise, coordinated control of radiation therapy devices, making it a dependable solution for high-stakes applications.
- **Modality Support**: U-TCS supports a range of radiation therapy modalities, making it adaptable for various clinical and industrial use cases.

## Project Status: Early Development

It is important to note that **U-TCS** is currently in the **very early stages of development**. While the vision and foundational code are actively being developed, the project is not yet suitable for actual clinical or industrial use. Significant work remains to be done to ensure stability, compliance with industry standards, and full functionality for controlling radiation devices.

We welcome contributions and feedback from the community, but please be aware that **U-TCS is not ready for deployment** in any real-world medical or industrial setting at this time.

## Developer Instructions

To get started writing code for the project, follow the steps below to set up your local development environment and understand the commands required for building and running the project.

### Prerequisites

Before proceeding, ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (Recommended version: 18.x or above)
- [Yarn](https://yarnpkg.com/) (Ensure you have Yarn installed globally. If not, you can install it with `npm install -g yarn`)
- [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) Windows Terminal is highly recommended for Windows developers.

Additionally, make sure to clone the repository from the appropriate source (e.g., GitHub) before continuing.

### Developer Commands

#### Navigate to the Project's Base Directory

Once the project repository has been cloned to your machine, open a terminal and change the directory to the root folder of the project. This directory is typically named `u-tcs`. You can navigate to it by running:

```sh
cd ./u-tcs
```

This ensures you're in the correct location to execute the subsequent commands.

#### Install Project Dependencies

The project relies on several dependencies that are managed through Yarn. To ensure that all required libraries and modules are available, run the following command to install them:

```sh
yarn install
```

This will download and set up all the necessary dependencies specified in the `package.json` file. It's crucial to run this command before attempting to build or run the application to avoid missing modules or errors during development.

#### Run the Development Server

During development, it's important to use a development server that will automatically reload when changes are made to the project. To start the development server, execute:

```sh
yarn dev
```

The server will start and can typically be accessed at `http://localhost:3000` (or the default port specified in your configuration). This will allow you to test changes in real-time without needing to manually restart the server.

#### Generate a Production Build

Once development is complete, you may want to create an optimized production build of the application. This build is minified and optimized for deployment. To create the production build, use the following command:

```sh
yarn build
```

The production build files will be generated and placed in the `./dist` directory (or the directory specified in your build configuration). You can then serve these files with your preferred method, such as using a static file server or deploying to a cloud provider.

#### Troubleshooting

- If you encounter issues with Yarn or dependencies, try running `yarn cache clean` followed by `yarn install` to resolve potential caching problems.
- Ensure that environment variables required by the project are properly configured in a `.env` file in the project's root directory.
