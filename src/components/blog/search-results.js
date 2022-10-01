import { Link } from "gatsby"
import { default as React } from "react"
import {
  // Hits,
  Index,
  connectHits
} from "react-instantsearch-dom"

const Hits = ({ hits }) => (
  <div className="grid gap-5 row-gap-5 mb-8 grid-cols-1 lg:grid-cols-2">
    {hits.map(hit => (
      <article>
        <Link
          to={`/blog/${hit.slug}`}
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={hit.img}
              className="object-cover w-full h-48"
              alt={hit.title}
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h3 className="mb-2 font-semibold leading-5">
                  {hit.title}
                </h3>
                <p className="text-sm text-gray-900">
                  {hit.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    ))}
  </div>
)
const CustomHits = connectHits(Hits)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <CustomHits/>
  </Index>
)

const SearchResult = ({ indices }) => (
  <>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </>
)

export default SearchResult

	


