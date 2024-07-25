import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const links = await builder.getAll("nav-link", { prerender: false });
  console.log('links', links);
  const builderModelName = "page";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || "/"),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      <header>
        <nav>
          {links.map((link, index) => (
            <a key={index} href={link.data?.url}>
              {link.data?.label}
            </a>
          ))}
        </nav>
      </header>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
