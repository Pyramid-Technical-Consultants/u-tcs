# U-TCS Release Plan

## Release Strategy

U-TCS follows a simplified release strategy with two types of releases:

1. Major Releases: Contain new features and significant improvements.
2. Patch Releases: Address bugs and security issues.

We aim for one major release per year, with patch releases as needed throughout the year.

## Version Numbering

We use a simplified semantic versioning scheme:

- Major Releases: X.0 (e.g., 1.0, 2.0, 3.0)
- Patch Releases: X.Y (e.g., 1.1, 1.2, 2.1)

Where X is the major version number and Y is the patch number.

## Release Schedule

- Major Release: Annually or bi-annually, typically in Q4
- Patch Releases: As needed, typically monthly or bi-monthly

## Release Procedure

### Major Release

1. Feature Freeze (6 weeks before release)
   - No new features added after this point
   - Focus on stabilization and bug fixes

2. Code Freeze (2 weeks before release)
   - Only critical bug fixes allowed
   - Begin intensive testing phase

3. Release Candidate (1 week before release)
   - Final testing in production-like environment
   - User acceptance testing

4. Release Day
   - Final go/no-go decision made by project owner
   - Update version number in all relevant files
   - Create release branch from `develop`
   - Merge release branch into `main`
   - Tag the release (e.g., `v2.0`)
   - Build and publish release artifacts

5. Post-Release
   - Monitor for any critical issues
   - Begin planning for next major release

### Patch Release

1. Identify critical bugs or security issues
2. Develop and test fixes on a `hotfix` branch
3. Code review and approval
4. Update version number (e.g., from 2.0 to 2.1)
5. Merge `hotfix` into `main` and `develop`
6. Tag the release (e.g., `v2.1`)
7. Build and publish release artifacts

## Release Artifacts

Each release will include:

1. Executable files for Windows, macOS, and Linux
2. Source code (GitHub release)
3. Release notes
4. Updated user manual

## Testing Requirements

Before each major and minor release:

1. All unit tests must pass
2. Integration tests must pass
3. System tests must pass
4. Performance benchmarks must meet or exceed previous release
5. Security scan must not reveal any high or critical vulnerabilities

## Documentation Updates

For each release:

1. Update `README.md` with major new features or changes
2. Update `release-reports/release-vX.md` with detailed list of changes and release status. Changes should be in reverse chronological order with recent changes first.
3. Update `docs/user-manual.md` to reflect new features or changes