# Website Builder

See it live here.

## Description
Bootstrap is a helpful tool for reducing the repetitiveness of website-building. However, Bootstrap components are bulky and hard to read – they are divs within divs within divs. Also, there is still a lot of repetitiveness that Bootstrap does not reduce, like menus that each must be updated one-by-one when a new page is added. 

To solve this problem, I developed this website builder using React. It is an easy-to-use website template that contains many helpful components for speeding up website-building. With this website builder, the majority of a website can be built just using the included React components and HTML; only some additional CSS is required to finish the design. Each components has several parameters for modifying its design, so very little custom CSS is required. Also, some components automatically adjust based off of the number of children they have.

## Installation
To begin using this website builder, just download the code and open it in a text editor. Then, navigate to the folder in the command-line and run `$ npm start`.

## How to Use
### Step 1: Create Header
First, open `src/UserData.js`. Change the `name` variable to your website's name, the `logo` variable to the link to your logo, and the 'pages' variable to a list of the pages on your website. If you do not have a logo, set the variable to an empty string. Next, open `src/sections/Header.js`, and add all the components you want within `<HeadFootMaker>`. There are several components specifically useful for headers: `<Logo>` and `<Menu>`. The components will automatically line up in a row, so to form a column of components, just wrap those components in a `<div>` tag. Finally, apply any specifications to the `<HeadFooter>` component.

## Documentation
### Strip
**Description:** `<Strip>` is a grouping component used for creating each section of the page.

**Parameters:**
- center={false | true} - centers children
- width={"thin" | "wide"} - adjusts padding to set maximum content width
- bg={"transparent" | color} - sets background-color

### ColLayout
**Description:** `<ColLayout>` automatically generates a column layout for however children it contains.

**Parameters:**
- center={false | true} - centers children
- width={"thin" | "wide"} - adjusts padding to set maximum content width
- bg={["transparent"] | [...colors]} - sets background-color of each column

### HeadFootMaker
**Description:** `<HeadFootMaker>` is used to make a customized header or footer easily and quickly. It offers several spacing options, as well as the option to add a navbar.

**Parameters:**
- spacing={"center" | "left" | "right"} - sets horizontal spacing of components
- align={"center" | "top" | "bottom"} - sets vertical spacing of components
- navbar={false | true} - adds a navbar
- width={"thin" | "wide"} - sets the width of the header

### Banner
**Description:** `<Banner>` is used to add an image spanning the width of the screen with optional children. Banner images are set in UserData.js.

**Parameters:**
- num={0 | num} - specifies image
- height={400 | px} - sets height
- top={"center" | pos} - sets vertical position of text
- left={"center" | pos} - sets horizontal position of text


### Logo
**Description:** `<Logo>` is used for either text or image logos. By default, it will display the image logo specified in UserData.js and make the name screen-reader-only. However, if the logo is set to an empty string, it will display the name instead.

### Menu
**Description** `<Menu`> is used for creating a navigation menu. It automatically generates a menu based off of the pages listed in UserData.js.
