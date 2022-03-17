import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import styles from "~/styles/app.css";
import PageLoading from "~/components/PageLoading";

export const meta: MetaFunction = () => {
  return { title: "Garv Jain" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Karla",
    },
  ];
};

export default function App() {
  const [loading, setLoading] = React.useState(false);

  /* React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []); */

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {!loading ? (
          <>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </>
        ) : (
          <PageLoading />
        )}
      </body>
    </html>
  );
}
