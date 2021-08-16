/*

The Node Package Manager (npm) allows us to install packages and modules
  for use in Node.js
It can also install related JavaScript programs (Node Package eXecutables)

We can use 'npm install x' (or 'npm i x') to install a package called 'x'
Then, executables in the package can be called with 'npx x', where 'x' is
  the command; these usually take command-line arguments

The TypeScript Compiler (tsc) transpiles TypeScript files ('.ts'
  extension) to JavaScript ('.js' extension), which can be run with node
To install the TypeScript package, we use 'npm i typescript'
To run tsc, we use 'npx tsc path/to/file.ts', which generates a JavaScript
  file at 'path/to/file.js'

If packages are predefined in 'package.json' or 'package-lock.json', they
  can be installed by running 'npm i' in the directory

*/