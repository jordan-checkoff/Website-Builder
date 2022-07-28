# Website Builder

See it live here.

## Description
Bootstrap is a helpful tool for reducing the repetitiveness of website-building. However, Bootstrap components are bulky and hard to read – they are divs within divs within divs. Also, there is still a lot of repetitiveness that Bootstrap does not reduce, like menus that each must be updated one-by-one when a new page is added. 

To solve this problem, I developed this website builder using React. It is an easy-to-use website template that contains many helpful components for speeding up website-building. With this website builder, the majority of a website can be built just using the included React components and HTML; only some additional CSS is required to finish the design. Each components has several parameters for modifying its design, so very little custom CSS is required. Also, some components automatically adjust based off of the number of children they have.

## Installation
To begin using this website builder, just download the code and open it in a text editor. Then, navigate to the folder in the command-line and run `$ npm start`.

## How to Use
### Step 1: Create Header
First, open `src/UserData.js`. Change the `name` variable to your website's name, the `logo` variable to the link to your logo if applicable, and the 'pages' variable to a list of the pages on your website. Next, open `src/sections/Header.js`, and add all the components you want within `<HeadFootMaker>`. There are several components specifically useful for headers: `<Logo>` and `<Menu>`. The components will automatically line up in a row, so to form a column of components, just wrap those components in a `<div>` tag. Finally, apply any specifications to the `<HeadFooter>` component.

## Documentation
### HeadFootMaker
**Description:** 
spacing ("center" | "left" | "right")
align=("center" | "top" | "bottom"}
navbar={false|true}
width=("thin" | "wide")
