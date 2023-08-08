# VexRender
## Description
Large-scale renders using the VexFlow javascript engraving library.

The vexflow library (https://github.com/0xfe/vexflow) has a number of unit test cases for the different features, but not very much 'real music'.  This repository contains some large multi-system renders that can be used to compare different versions of the engraving library for performance, functionality, formatting, etc.

## Usage
The javascript code is generated from a UI application (https://github.com/AaronDavidNewman/Smoosic).  From the Smoosic menu, choose file/'Export to Vex'.  It will produce a javascript file.

Then, in the rendering application, run the following from the command line, at the root level of the project:

```
node gen/generate.js
```

This command will create an HTML file for each version of the Vexflow library with each render in the javascript directory.
