# Website Builder

See it live [here](https://jordan-checkoff.github.io/Website-Builder/).

## Description
Bootstrap is a helpful tool for reducing the repetitiveness of website-building. However, Bootstrap components are bulky and hard to read – they are divs within divs within divs. Also, there is still a lot of repetitiveness that Bootstrap does not reduce, like menus that each must be updated one-by-one when a new page is added. 

To solve this problem, I developed this website builder using React. It is an easy-to-use website template that contains many helpful components for speeding up website-building. With this website builder, the majority of a website can be built just using the included React components and HTML; only some additional CSS is required to finish the design. Each components has several parameters for modifying its design, so very little custom CSS is required. Also, some components automatically adjust based off of the number of children they have.

## Installation
To begin using this website builder, first create a react app using `$ create new-react app [app-name]`. Then download the code from this repository and move it into the folder of your react app to replace the default files.

## How to Use
### Step 1: Create pages
For each webpage you would like on your site (other than the home page):
- Duplicate "Home.js"
- Rename the file to give it a unique name

### Step 2: Set variables in UserData.js
- Open "src/UserData.js"
- For each new page you created, import it below the import for "Home". Import it using `import [page name] from ./sections/[page name]`
- Change the `name` variable to your website's name
- If you want to use a logo in your website, set the `logo` variable to the link to your logo; otherwise, set it to an empty string
- Set the `pages` variable to a list of the pages on your website. Each item in the list should be `{name: "[page name]", link: "[path]", component: [imported page component]`}
- If you would like banners for your website (see [Banner](#banner)) set the `banner` variable to a list of links to the images. This step can be returned to later

### Step 3: Edit Header
- Open `src/sections/Header.js`
- Add all the components you want within `<HeadFootMaker>` (see [HeadFootMaker](#headfootmaker))

Notes:
- Children will automatically line up in a row, so to form a column of components, just wrap those components in a `<div>` tag.
- There are several components that make it easier to make headers (see [Logo](#logo) and [Menu](#menu))

### Step 4: Edit Footer
- Open `src/sections/Header.js`
- Add all the components you want within `<HeadFootMaker>` (see [HeadFootMaker](#headfootmaker))

Notes:
- Children will automatically line up in a row, so to form a column of components, just wrap those components in a `<div>` tag.

### Step 5: Edit Pages
For each page:
- Open the respective file
- Add all the components you want within the top-most `<div>`

Notes:
- The page should be grouped into `<Strip>` components (see [Strip](#strip))
- There are several components that make it easier to make pages (see [Banner](#banner) and [ColLayout](#collayout))

### Step 6: Edit Styles
- Open `src/styles/_vars.scss`
- Edit any of the variables to set the styles for your webpage

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
**Description:** `<HeadFootMaker>` is used to make a customized header or footer easily and quickly. It offers several spacing options, as well as the option to add a navbar. Children will automatically line up in a row, so to form a column of components, just wrap those components in a `<div>` tag.

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

### Image
**Description:** `<Image>` is used to add an image.
- size={"auto" | "icon" | "small" | "medium" | "large"}

**Parameters:**
- size={"auto" | "icon" | "small" | "medium" | "large"}
