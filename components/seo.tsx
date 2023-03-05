import { DefaultSeo } from "next-seo";

const config = {
  title: "Dian Ananda - My personal blog",
  description:
    "Web Developer from Indonesia. Always learning to be a Full Stack Developer, like the new knowledge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.dianananda.site",
    site_name: "Dian Ananda",
    images: [
      {
        url: "https://blog.dianananda.site/og.jpg",
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    handle: "@dionannd",
    site: "@dionannd",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
