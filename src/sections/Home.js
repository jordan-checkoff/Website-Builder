import React from 'react';
import {Banner, Strip, Image, ColLayout} from '../myComponents.js';

const Page = () => {
  return (
    <div className="App">

      <Banner num={0} height={200}><h1>Website Builder</h1></Banner>

      <Strip>
          <ColLayout>
            <div>
              <h3>Column 1</h3>
              <Image size="small" file={"https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
              <h3>Column 2</h3>
              <Image size="small" file={"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
              <h3>Column 3</h3>
              <Image size="small" file={"https://www.seekpng.com/png/full/80-803501_javascript-logo-logo-de-java-script-png.png"} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </ColLayout>
      </Strip>

      <Strip bg="lightpink">
          <ColLayout>
            <div>
              <h3>This strip stands out</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            {/* <Image size="small" file={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"} /> */}
          </ColLayout>
      </Strip>

      <Strip>
        <ColLayout>
          <div>
            <h2>This is another thin strip</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <Image size="large" file={"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png"} />
        </ColLayout>
      </Strip>

    </div>
  );
}

export default Page;
