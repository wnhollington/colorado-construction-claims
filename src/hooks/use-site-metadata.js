import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query metadata {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        description
                    }
                }
            }
        `
    ) 
    return site.siteMetadata
}