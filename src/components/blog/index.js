import algoliasearch from "algoliasearch/lite"
import { default as React, useState, useMemo } from "react"
import { InstantSearch, SearchBox, connectMenu, Pagination } from "react-instantsearch-dom"
import SearchResult from "./search-results"

// Components
import AboutBlog from "./sidebar/about-blog"
import AboutAuthor from "./sidebar/about-author"

export default function Search({ indices }) {
  const [query, setQuery] = useState()
  const [hasFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  const Menu = ({ items, currentRefinement, refine, title}) => (
    <div className="bg-gray-100 p-4 my-2 rounded-lg shadow">
      <h2 className="underline underline-offset-8 text-gray-900 font-bold">{title}</h2>
      <ul className="my-2 p-2">
        {items.map(item => (
          <li 
            key={item.value}
            className="my-2 py-2 border-b"
          >
            <button
              onClick={event => {
                event.preventDefault();
                refine(item.value);
              }}
              className={item.label === currentRefinement ? "text-primary-800" : "text-gray-900 hover:text-primary-800"}
            >
              {item.label} ({item.count})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  const CustomMenu = connectMenu(Menu)

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <div className="grid gap-5 row-gap-5 grid-cols-1 lg:grid-cols-4">
        <section className="col-span-3">
          <h2 className="hidden">Latest Posts</h2>
          <SearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />
	

          <Pagination
            translations={{
              previous: '‹',
              next: '›',
              first: '«',
              last: '»',
              page(currentRefinement) {
                return currentRefinement;
              },
              ariaPrevious: 'Previous page',
              ariaNext: 'Next page',
              ariaFirst: 'First page',
              ariaLast: 'Last page',
              ariaPage(currentRefinement) {
                return `Page ${currentRefinement}`;
              },
            }}
          />

        </section>
        <aside class="flex flex-col my-4 order-first lg:order-last">
          <SearchBox />
          <AboutBlog />
          <AboutAuthor />
          <CustomMenu attribute="category" title="Categories"/>
          <CustomMenu attribute="tags" title="Tags"/>
        </aside>
      </div>

    </InstantSearch>

  )
}