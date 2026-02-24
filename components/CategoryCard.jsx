import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ category }) {
  // WordPress term fields
  const title = category.name || "Category";
  const description = category.description || "";
  const count = category.count || 0;

  // OPTIONAL: if you later add ACF term image
  const image =
    category.acf?.taxonomy_image || "/placeholder.png";

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-grid">
        {/* Image */}
        <div className="image d-flex justify-content-center">
          <Link href={`/category/${category.slug}`} className="thumbnail">
            <Image
              src={image}
              alt={title}
              width={50}
              height={50}
              
              unoptimized
            />
          </Link>
        </div>

        {/* Content */}
        <div className="content text-center">
          <div className="top-content">
            <Link href={`/category/${category.slug}`} className="tag">
              Category
            </Link>

            <h3 className="title">{title}</h3>

            {description && (
              <p
                className="update-time"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>

          <div className="bottom-content d-flex justify-content-center align-items-center gap-2">
            <p className="price">
              Events: <span>{count}</span>
            </p>

            <Link
              href={`/category/${category.slug}`}
              className="like"
            >
              <i className="lni lni-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}