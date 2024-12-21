import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { motion } from "motion/react";
import MainNav from "./components/MainNav";
import AnimatedCursor from "react-animated-cursor"
import "./tailwind.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <motion.body initial={{
        opacity: 0
      }}
        animate={
          {
            opacity: 1,

          }
        }
        transition={{
          duration: 2
        }
        }>
          <AnimatedCursor  innerSize={30}/>
        <MainNav />


        {children}

        <ScrollRestoration />
        <Scripts />
  
      </motion.body>
    </html>
  );
}



export default function App() {
  return <Outlet />;
}
