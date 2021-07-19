# eslint-config-lifeomic
LifeOmic config standards for using Eslint with TypeScript projects (@typescript-eslint)

## Usage: ESLint

This package contains `eslint` configuration for both backend (Node.js) and
frontend (React) so pick the configuration that is appropriate for your project.

Regardless of target environment, you can always add `.eslintignore` to ignore
certain files in your project.

The current eslint configuration extends the following:

- [eslint:recommended](https://eslint.org/docs/rules/): Built-in recommended
  rules for `eslint`.
- [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs#recommended):
  Opinionated rules that don't require type information.
- [@typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs#recommended-requiring-type-checking):
  Opinionated rules that use typescript type information (requires
  `parserOptions.project` in `eslint` config).

After extending the configurations above, the following rule overrides are
provided by `@lifeomic/typescript-tools`:

- `@typescript-eslint/explicit-function-return-type": "off"`
- `@typescript-eslint/no-explicit-any": "off"`
- `@typescript-eslint/no-inferrable-types": "off"`
- `@typescript-eslint/no-non-null-assertion": "off"`
- `@typescript-eslint/no-require-imports": "off"`
- `@typescript-eslint/no-unused-vars": "off"`
- `@typescript-eslint/no-use-before-define": "off"`
- `@typescript-eslint/no-var-requires": "off"`
- `@typescript-eslint/no-unsafe-return": "off"`
- `@typescript-eslint/no-unsafe-call": "off"`
- `@typescript-eslint/restrict-plus-operands": "off"`
- `@typescript-eslint/restrict-template-expressions": "off"`
- `@typescript-eslint/no-unsafe-assignment": "off"`
- `@typescript-eslint/prefer-string-starts-ends-with": "off"`
- `@typescript-eslint/require-await": "off"`
- `@typescript-eslint/no-unsafe-member-access": "off"`
- `@typescript-eslint/unbound-method": "off"`
- `@typescript-eslint/explicit-module-boundary-types": "off"`

See
<https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin>
for documentation on eslint rules for typescript.

Run `eslint` using the following command:

```sh
yarn eslint --ext .ts,.tsx.js,.jsx .
```

In your `package.json` add the following to the `scripts` section:

```json
  "lint": "eslint --ext .ts,.tsx,.js,.jsx ."
```

**IMPORTANT:** You currently must explicitly add the `--ext` argument because
`eslint` will only check `.js` files by default, and you can't control this from
the eslint configuration.

### ESLint configuration Typescript and Jest

Create `.eslintrc` at root of your project that contains:

```json
{
  ...
  "extends": [
    "@lifeomic/standards"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": "."
  }
}
```

**IMPORTANT:** If you are linting `*.js` files (which are enabled by via `--ext`
argument) then make sure `allowJs: true` is set in your `tsconfig.json`, and
also make sure the `*.js` files are included via the `include`/`exclude`
patterns in your `tsconfig.json` files. If the typescript compiler does not
process the `*.js` files then you'll see eslint errors similar to the following:

```
/Development/my-project/my-file.js
  0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: my-file.js.
The file must be included in at least one of the projects provided
```

### ESLint configuration Typescript only

```json
{
  ...
  "extends": [
    "@lifeomic/standards/lib/typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": "."
  }
}
```

### ESLint configuration for only Javascript

```json
{
  ...
  "extends": [
    "@lifeomic/standards/lib/javascript"
  ]
}
```

### ESLint configuration for React

Create `.eslintrc` at root of your project that contains:

```json
{
  ...
  "extends": [
    "@lifeomic/standards/lib/react"
  ]
}
```


### ESLint configuration for Jest

Create `.eslintrc` at root of your project that contains:

```json
{
  ...
  "extends": [
    "@lifeomic/standards/lib/jest"
  ]
}
```
