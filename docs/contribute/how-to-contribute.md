# How to Contribute

Hi! I'm really excited that you are interested in contributing to Web Clipper.
## Contributing to Web Clipper

There are many ways to contribute to the Web Clipper project: logging bugs, submitting pull requests, reporting issues, and creating suggestions.

Please be sure to read the contribution guidelines before making or requesting a change.

### Issue Reporting Guidelines

Web Clipper project tracks issues and feature requests using the [GitHub issue tracker](https://github.com/webclipper/web-clipper/issues) for the Web Clipper repository.

Please do a search in [open issues](https://github.com/webclipper/web-clipper/issues) to see if the issue or feature request has already been filed.

If you find your issue already exists, make relevant comments and add your reaction. 

If you cannot find an existing issue that describes your bug or feature, submit an issue using the guidelines below.


### Writing Good Bug Reports

The more information you can provide, the more likely someone will be successful reproducing the issue and finding a fix.

Please include the following with each issue.

- Which browser you are using.
- Which extension or image host has encountered a problem.
- Reproducible steps (1... 2... 3...) and what you expected versus what you actually saw.
- Images, animations, or a video.

Don't feel bad if we can't reproduce the issue and ask for more information!


### Development Setup

If you are interested in fixing issues and contributing directly to the code base, please see the document [how to setup](./install.md).


### Pull Request Guidelines

- Make sure npm test passes. (see [development setup](#development-setup))
- Work in the src folder and DO NOT checkin dist in the commits.
- It's OK to have multiple small commits as you work on the PR - GitHub will automatically squash it before merging.
- If fixing bug:
    - If you are resolving a special issue, add (fix #xxxx[,#xxxx]) (#xxxx is the issue id) in your PR title for a better release log.
    - Provide a detailed description of the bug in the PR. Live demo preferred.
    - Add appropriate test coverage if applicable.
