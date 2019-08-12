## Zen : React + WordPress
This is a framework that enables the connection between React and WordPress swiftly.

## Motivation
Zen: React + WordPress is a minimal framework focuses on speeding up the WordPress blogs by integrating with React. Developers can transform the existing blog to React seamlessly at a less cost and time

## Build status

[![Build status](https://ci.appveyor.com/api/projects/status/2cmqa4cafxl3p8r7?svg=true)](https://ci.appveyor.com/project/rushjayz/zen-react-wordpress)

## Code documentation
![js-standard-style](http://inch-ci.org/github/rushjayz/zen-react-wordpress.svg?branch=master)

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

MIT © [Rashain Jayanetty](https://github.com/rushjayz)
