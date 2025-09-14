import { raw } from "hono/html";
import { Fonts } from "./fonts";

export const Layout = ({
  children,
  title = "xvyz",
}: {
  children: any;
  title?: string;
}) => (
  <>
    {raw("<!doctype html>")}
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="stylesheet" href="/tailwind.css" />
        <Fonts />
        <script
          dangerouslySetInnerHTML={{
            __html: `const e=document.documentElement.style;e.visibility='hidden';const s=document.querySelector('link[href="/tailwind.css"]');if(s?.sheet||!s){e.visibility='visible'}else{s.addEventListener('load',()=>e.visibility='visible')}`,
          }}
        />
      </head>
      <body class="m-0 flex min-h-dvh w-screen items-center justify-center bg-neutral-50 font-sans text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
        {children}
      </body>
    </html>
  </>
);
