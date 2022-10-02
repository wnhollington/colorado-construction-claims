import * as React from "react"
import { Script } from "gatsby"

const TwitterFeed = () => {
    return (
        <div className="bg-gray-100 p-4 my-2 rounded-lg shadow">
            <a class="twitter-timeline" href="https://twitter.com/wnealhollington?ref_src=twsrc%5Etfw"></a>
            <Script src="https://platform.twitter.com/widgets.js" />
        </div>
    )
}


export default TwitterFeed