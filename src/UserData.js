import Home from "./sections/Home";
import About from './sections/About'

export const name = "Your Website Title";

export const logo = "https://placeholder.co/wp-content/uploads/2020/02/PlaceHolder-Logo-blk-1.png"

export const pages = [{
    name: "Home",
    link: "/",
    component: <Home />
    },
  {
    name: "About",
    link: "/about",
    component: <About />
  }
  ]

export const banners = ["https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1200&fit=crop&crop=faces",
  "https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg"]