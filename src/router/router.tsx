import { APP_ROUTES } from "../constants";
import Trees from "../pages/Trees/Trees";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: APP_ROUTES.HOME,
        element:
          (
            <Home
              imageSrc="https://media.istockphoto.com/id/503310392/photo/trees-in-pots.jpg?s=612x612&w=0&k=20&c=KQ-6-VZ94kmu_78RYYYiljaJW9cu80a-k1ZhxbLYcco="
              altText="A nursery with trees in pots"
              title="~ For all your tree needs, visit Alpine Tree Nursery Farm ~"
              linkHref="https://example.com"
            />
          ),
      },
      {
        path: APP_ROUTES.ABOUT,
        element:
          (
            <About
              title="Alpine Nursery"
              imageSrc="https://media.istockphoto.com/id/1193721496/photo/planting-cocoa-seedlings-from-cocoa-plantations.jpg?s=612x612&w=0&k=20&c=5DfMMtoRhDP3_PjQnkGZKuztCvKaTejU5OwvfdYNBzg="
              imageAlt="Cocoa seedlings being planted at a plantation"
              description="Alpine farm was founded in 2021 with the aim of producing high-quality seedlings. Our goal is to restore the environment through soil erosion prevention and increased soil fertility while generating income through the sale of seedlings."
            />
          ),
      },
      {
        path: APP_ROUTES.TREES,
        element:
          (
            <Trees
              treeData={
                [
                  { title: "Windbreak", img: "https://images.unsplash.com/photo-1441312221958-d9779fc175ed?w=260&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxXaW5kYnJlYWslMjBUcmVlc3xlbnwwfHwwfHx8MA%3D%3D" },
                  { title: "Fruit", img: "https://plus.unsplash.com/premium_photo-1665455301909-0e0ab6f0fcea?w=270&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJ1aXQlMjBUcmVlc3xlbnwwfHwwfHx8MA%3D%3D" },
                  { title: "Shade", img: "https://images.unsplash.com/photo-1592846459932-c8b602cfbd0b?w=280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hhZGUlMjBUcmVlc3xlbnwwfHwwfHx8MA%3D%3D" },
                  { title: "Ornamental", img: "https://images.unsplash.com/photo-1685714391914-0c3a8faa6471?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fE9ybmFtZW50YWwlMjBUcmVlc3xlbnwwfHwwfHx8MA%3D%3D" },
              ]
              }
              heading="Our Trees"
              description="   We offer a wide variety of trees for different purposes whether you need windbreak, fruit, shade, or ornamental trees, we have you covered. Our trees are grown with care and are of the highest quality to ensure that they thrive in your garden."
            />
          ),
      },
      {
        path: APP_ROUTES.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);