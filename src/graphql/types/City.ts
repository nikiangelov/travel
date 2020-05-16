export default `
    type City {
        id: ID!
        name: String
        sub_name: String
        population: Population!
        utc_offset: String
        url_slug: String
        backdrop_image: String
        featured_image_vertical: String
        featured_image_thumb: String
        iata_code: String
        country_code: String
        description: String
        temperature: Int
        wiki_article_url: String
        wiki_article_en_url: String
        wiki_voyage_article_url: String
        climate_description: String
    }
    type Query {
        cities: [City]
        city(id: ID, url_slug: String): City
    }
    type Mutation {
        addCity(name: String): City
    }
`;
