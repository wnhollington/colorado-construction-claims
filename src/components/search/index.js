import algoliasearch from "algoliasearch/lite"
import { default as React, useState, useMemo } from "react"
import { InstantSearch, SearchBox, Menu, Pagination } from "react-instantsearch-dom"
import SearchResult from "./search-results"

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

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <div className="grid gap-5 row-gap-5 grid-cols-4">
        <section className="col-span-3">
          <SearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />
          <Pagination/>
        </section>
        <section class="flex flex-col my-4">
          <SearchBox />
          <Menu attribute="category"/>
        </section>
      </div>

    </InstantSearch>

  )
}