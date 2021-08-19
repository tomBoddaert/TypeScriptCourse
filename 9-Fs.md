<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Fs

["fs"](https://nodejs.org/api/fs.html) is the Node.js "file system" built in module. It allows us to read, write and modify files and information about the file system.

## Reading files

### Reading files synchronously

[`fs.readFileSync()`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) reads files synchronously and returns their contents. If an encoding is specified, it will return a string, and if not, it will return a buffer. Most of the time, the encoding will be `utf-8`, so you can use that

``` typescript
import { readFileSync } from 'fs';

console.log( readFileSync('./resources/exampleFile.txt') ); // With no encoding
console.log( readFileSync('./resources/exampleFile.txt', 'utf-8') ); // With specified encoding
console.log( readFileSync('./resources/exampleFile.txt').toString() ); // With conversion to a string
```
```
<Buffer 54 68 69 73 20 69 73 20 74 68 65 20 65 78 61 6d 70 6c 65 20 66 69 6c 65 0d 0a f0 9f 99 82>
This is the example file
🙂
This is the example file
🙂
```

### Reading files asynchronously

Reading files synchronously is not usually the best idea because it stops your program running until the file has been read. Instead, you can use the [fs callback api](https://nodejs.org/api/fs.html#fs_callback_api) and [`fs.readFile()`](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback).

``` typescript
import { readFile } from 'fs';

readFile( './resources/exampleFile.txt', 'utf-8', ( err, data ) => { // With specified encoding
    if (err) throw err;
    console.log( data );
} );

readFile( './resources/exampleFile.txt', ( err, data ) => {
    if (err) throw err;
    console.log( data.toString() ); // With conversion to a string
} );
```
```
This is the example file
🙂
This is the example file
🙂
```

## Writing files

### Writing files synchronously

[`fs.writeFileSync()`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options) writes files synchronously. The encoding defaults to `utf-8`, so we are not going to change it.

``` typescript
import { writeFileSync } from 'fs';

writeFileSync( './resources/writtenFile.txt', 'This file was written synchronously\n🙂' );
```

### Writing files asynchronously

[`fs.writeFile()`](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) writes files asynchronously, once again the encoding defaults to `utf-8`.

``` typescript
import { writeFile } from 'fs';

writeFile( './resources/writtenFile.txt', 'This file was written asynchronously\n🙂', err => {
    if (err) throw err;
    console.log('File written!');
} );
```
```
File written!
```

## Appending to files

[`fs.appendFile()`](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback) appends data to a file, creating it if it does not already exist. There is a synchronous version, but by now, I'm sure you can figure out how it works!

``` typescript
import { appendFile } from 'fs';

appendFile( './resources/writtenFile.txt', '\nThis was appended to the file!', err => {
    if (err) throw err;
    console.log('File appended!');
} );
```
```
File appended!
```

## Creating directories

[`fs.mkdir()`](https://nodejs.org/api/fs.html#fs_fs_mkdir_path_options_callback) creates a directory (a folder).

``` typescript
import { mkdir } from 'fs';

mkdir( './resources/newDir', err => {
    if (err) throw err;
    console.log('Directory made!');
} );
```
```
Directory made!
```

## Everything else

fs has loads of other functions and ways of doing these ones. It even has a "promise" api. I recommend taking a look at the functions [here](https://nodejs.org/api/fs.html).