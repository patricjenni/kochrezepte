# Yarn Command Reference

This project uses **yarn** as the package manager.

## Common Commands

### Installing Dependencies

```bash
yarn                    # Install all dependencies from package.json
yarn install            # Same as above
```

### Adding Packages

```bash
yarn add [package]                  # Add to dependencies
yarn add [package] --dev            # Add to devDependencies (development only)
```

### Removing Packages

```bash
yarn remove [package]               # Remove a package
```

### Running Scripts

```bash
yarn dev                            # Run dev script (astro dev)
yarn build                          # Run build script (astro build)
yarn preview                        # Run preview script
```

### Other Useful Commands

```bash
yarn list                           # List installed packages
yarn outdated                       # Check for outdated packages
yarn upgrade [package]              # Upgrade a specific package
yarn upgrade-interactive            # Interactive upgrade of packages
```

## ⚠️ Important: DO NOT Use npm

Since this project uses yarn, **always use yarn commands**. Do not use:

- ❌ `npm install`
- ❌ `npm i [package]`
- ❌ `npm run dev`

This prevents creating `package-lock.json` and keeps dependencies consistent.

## Key Files

- `package.json` - Lists project dependencies and scripts
- `yarn.lock` - Locks exact versions (committed to git)
- `.gitignore` - Ignores `package-lock.json` to prevent mixing package managers
