This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Configure Jest and Testing Library

```
yarn add --dev @testing-library/jest-dom @testing-library/react @testing-library/us
er-event jest jest-environment-jsdom ts-jest
```

### create jest.config.ts file

```
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
```

### create jest.setupt.ts file

```
import '@testing-library/jest-dom/extend-expect'
```

### configure eslint to work with jest

```
yarn add --dev eslint-plugin-jest-dom  eslint-plugin-testing-library
```

### update .eslintrs.json

```
{
  "extends": [
    "next/core-web-vitals",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
```

### update package.json with scripts to run tests

```
    "lint": "next lint --fix",
    "format": "prettier --write .",
    "test": "jest --passWithNoTests",
    "test:w": "jest --passWithNoTests --watchAll",
    "clean": "find . -name 'node_modules' -type d -exec rm -rf {} + && rm yarn.lock &&yarn cache clean && yarn install"
```

### configure prettier

```
yarn add --dev --exact prettier
yarn add --dev eslint-plugin-prettier eslint-config-prettier
```

### create .editorconfig file

```
root = true

[*]
indent_style = spaces
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### configure vscode editor .vscode/settings.json

```
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}

```
