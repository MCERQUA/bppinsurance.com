import type { Metadata } from "next";

// page.tsx here is a client component AND the route is dynamic, so neither a
// metadata export on the page nor a static one in this layout can carry the
// canonical. generateMetadata in the segment layout receives params, so each
// post canonicalises to its own path rather than to the site root.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
