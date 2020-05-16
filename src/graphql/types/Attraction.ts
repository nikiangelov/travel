export default `
    type Attraction {
        id: ID!
        name: String
        description: String
        description_short: String
        city_code: String
        city_url_slug: String
        country_code: String
        wikipedia_article_url: String
        coordinates: Coordinates
        phone: String
        work_time_description: String
        is_free: Boolean
        tickets: TicketsType
    }
    type TicketsType {
        adult: Float
        reduced: Float
        currency: String
    }
    type Query {
        attractions(id: ID, city_url_slug: String, limit: Int): [Attraction]
        attraction(id: ID): Attraction
    }
    type Mutation {
        addAttraction(name: String): Attraction
    }
`;
