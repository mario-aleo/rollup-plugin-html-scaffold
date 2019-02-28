# rollup-plugin-html-scaffold  
Generate HTML file based on a template file
  

## Installation
```yarn add --dev rollup-plugin-html-scaffold```  
or  
```npm install -D rollup-plugin-html-scaffold```  
  
  
## Options
 * input (Required): input html file
 * output (Optional): output html file (default: input html file)
 * template (Optional): key-value of placeholders that will be used to parse the html file
  

## Usage  
index.html  
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

    <title><%= appName %></title>

    <style>
      body {
        position: relative;
        min-height: 100vh;
        padding: 0;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <script type="module" src="<%= es6Bundle %>"></script>
    <%= someCoolScript %>
  </body>
</html>
```  

rollup.config.js  
```
import html from 'rollup-plugin-html-scaffold';

export default {
  input: ['src/index.js'],
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    html({
      input: 'src/index.html',
      output: 'index.html',
      template: {
        'appName': 'my-app',
        'es6Bundle': 'bundle.js',
        'someCoolScript': '<script>console.log('Too cool to live')</script>'
      }
    })
  ]
}
```
Your html file will be parsed and created in the output directory, without any additional code.  