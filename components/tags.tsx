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
    <div className="flex justify-center items-center">
      <ul className="grid grid-cols-4 gap-y-6 gap-x-4 md:flex md:gap-6 items-center animated-list">
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
