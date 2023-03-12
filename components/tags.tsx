import slugify from "slugify";
import Link from "./Link";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps): JSX.Element | null => {
  if (!tags?.length) {
    return null;
  }
  return (
    <div className="flex justify-center max-w-full">
      <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 animated-list">
        {tags.map((tag) => (
          <li key={tag} className="transition-opacity">
            <Link
              href={`/blog/tag/${slugify(tag, { lower: true })}`}
              underline
            >{`#${tag}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
