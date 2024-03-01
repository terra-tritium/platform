# Developer Guide

## Development Workflow

Git Workflow: `develop` branch for proposing, merging features. Features merge to `staging` via pull requests.

## Deployment Process

### Pre-production (Staging)

Terra Tritium uses GitHub Actions to automate deployment. The `staging` branch triggers builds and deploys to Vercel.

### Production

Production deployment mirrors pre-production. The `main` branch triggers builds and deploys to Vercel.

## Getting Started

To get started with Terra Tritium, follow these steps:

1. Clone this repository to local machine;
2. Install the dependencies using `pnpm install`;
3. Start the development server using `pnpx turbo dev --filter web`.

Terra Tritium requires specific dependencies:

- [pnpm](https://pnpm.io)
- [Git](https://git-scm.com)
- [Visual Studio Code](https://code.visualstudio.com)
- [Volta](https://volta.sh)
