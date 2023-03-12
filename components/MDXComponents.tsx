import { RatingPlayground } from "components/blog/rating";
import CustomImage from "components/blog/image";
import Video from "components/blog/video";
import Link from "components/Link";
import Warning from "components/warning";
import SegmentedControl from "components/blog/segmentedcontrol";
import Parallax from "components/blog/parallax";
import Greeting from "components/blog/greeting";
import TableImageSize from "components/table/TableImageSize";

interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const href = props?.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link {...props} href={href} legacyBehavior>
        <a>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image: CustomImage,
  Video: Video,
  a: CustomLink,
  Link: CustomLink,
  Rating: RatingPlayground,
  Warning: Warning,
  SegmentedControl: SegmentedControl,
  Parallax: Parallax,
  Greeting: Greeting,
  TableImage: TableImageSize,
};

export default MDXComponents;
