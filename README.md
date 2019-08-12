## Zen : React + WordPress
This is a framework that enables the connection between React and WordPress swiftly.

## Motivation


## Build status
Build status of continus integration i.e. travis, appveyor etc. Ex. - 

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)

## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) 

## Tech/framework used

- [Create React App](https://reactjs.org)
- [Styled Components](https://www.styled-components.com)

## Features
- Seamless integration by only updating the WordPress Url in 'information.js'
- Theming with styled-components
- More coming soon

## Code Example
Defining WordPress Url
``` react
const wordPressUrl = "http://dev.zen-react-wp.com";
```
Getting page contents through REST  
````
componentDidMount() {
    let postUrl = `${blogUrl}`;
    fetch(postUrl)
    .then(data => data.json())
    .then(data => {
        this.setState({
            pageContent: data.content.rendered
        });
    });
}
````
Displaying the contents in page
````
  <span dangerouslySetInnerHTML={{ __html: this.state.pageContent }} />
  <AddToHomescreen
    onAddToHomescreenClick={this.handleAddToHomescreenClick}
  />
````

## Installation
- Clone the Project

- Navigate to the project root  

- Run `npm install` to install the dependencies

- Run `npm start` 
to run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- Run `npm run build`
To builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
<br/><br/>The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## API Reference

- REST API

```javascript
const wordPressUrl = "http://dev.zen-react-wp.com/wp-json/wp/v2/";
```

## License

MIT © [Rashain Jayanetty](rashainjayanetty.com)
