# U-TCS Configuration Management Plan

This Configuration Management Plan outlines the processes and tools used to manage the configuration of the United Treatment Control System (U-TCS) project. It ensures that all project artifacts are properly versioned, tracked, and controlled throughout the development lifecycle.

## Plan Scope

This plan covers all configuration items related to the U-TCS project, including:

- Source code
- Documentation
- Build scripts and configuration files
- Third-party libraries and dependencies
- Development and testing tools

## Configuration Management Tools

###  Version Control System

- Tool: [Git](https://git-scm.com/)
- Repository Hosting: [GitHub](https://github.com/)
- Repository URL: [GitHub Repository](https://github.com/Pyramid-Technical-Consultants/u-tcs)

### Issue Tracking

- Tool: GitHub Issues

### Continuous Integration/Continuous Deployment (CI/CD)

- Tool: GitHub Actions

### Dependency Management

- Tool: Yarn

### Documentation

- Tool: Markdown files in the Git repository

## Configuration Items

The following items are under configuration control:

### Source Code Items

- All source code files (`*.js` and `*.jsx`)

### Documentation Items

- README.md
- SECURITY.md
- LICENSE
- docs/*.md (All markdown files in the docs directory)

### Development Configuration Items

- `package.json`
- `yarn.lock`
- `.gitignore`
- `electron-builder.yml`
- `renderer/next.config.js`
- `.prettierrc`
- `.eslintrc.js`

### Development Build Scripts

- Scripts defined in `package.json`

### Third-party Libraries (SOUP)

- All dependencies listed in package.json

### Development and Testing Tools

- Jest configuration
- Cypress configuration (if used)

## Version Control Procedures

### Branching Strategy

- Main branch: `main` (protected, requires pull request and review)
- Development branch: `develop` (protected, requires pull request and review)
- Feature branches: `feature/[feature-name]`
- Release branches: `release/[version-number]`
- Hotfix branches: `hotfix/[issue-number]`

### Commit Messages

- Follow the Conventional Commits specification
- Format: `<type>(<scope>): <description>`
- Types: feat, fix, docs, style, refactor, test, chore

### Pull Requests

- Required for merging into `main` and `develop` branches
- Must be reviewed by at least one other developer
- Must pass all automated checks (linting, tests, builds)

### Release Tagging

- Use semantic versioning for major version and patch number
- Tag all releases in the format `vMAJOR.PATCH` i.e. `v1.2`

## Change Management Process

1. Create an issue in GitHub Issues for the proposed change
2. Create a feature branch from `develop`
3. Implement the change and commit with appropriate commit messages
4. Create a pull request to merge into `develop`
5. Conduct code review
6. Run automated tests and checks
7. Merge into `develop` if approved
8. Merge `develop` into `main` for releases
9. Tag the release

## Build Management

- Builds are triggered automatically on push to `main` and `develop` branches
- Release builds are created when a new tag is pushed
- Build artifacts are stored in GitHub Releases

## Environment Configuration

- Development environment configuration stored in `.env.development`
- Production environment configuration stored in `.env.production`
- Sensitive information (API keys, passwords) stored in GitHub Secrets

## Dependency Management

- Use Yarn for managing dependencies
- Lock file (yarn.lock) must be committed to the repository
- Regular audits of dependencies for security vulnerabilities

## Backup and Recovery

- GitHub repository serves as primary backup

## Training

- All commercial team members to be trained on this configuration management plan

## Roles and Responsibilities

- Configuration Manager: Matthew Nichols
  - Oversees the implementation of this plan
  - Conducts audits and generates reports
- Developers:
  - Follow branching strategy and commit message guidelines
  - Conduct code reviews
- Release Manager: Matthew Nichols
  - Manages the release process
  - Ensures proper tagging and change documentation

## Review and Updates

This Configuration Management Plan will be reviewed and updated annually or when significant changes to the project or processes occur.