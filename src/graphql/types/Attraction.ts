export default `
    type Attraction {
        _id: ID!
        name: String
        description: String
        is_translated: Boolean
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
    input TicketsTypeInput {
        adult: Float
        reduced: Float
        currency: String
    }
    input AttractionInput {
        name: String!
        description: String
        description_short: String
        is_translated: Boolean
        city_code: String
        city_url_slug: String
        country_code: String
        wikipedia_article_url: String
        coordinates: CoordinatesInput!
        phone: String
        work_time_description: String
        is_free: Boolean
        tickets: TicketsTypeInput
    }
    type Query {
        attractions(_id: ID, city_url_slug: String, limit: Int): [Attraction]
        attraction(_id: ID): Attraction
    }
    type Mutation {
        addAttraction(attraction: AttractionInput!): Attraction
        addAttractions(attractions: [AttractionInput] ): [Attraction]
    }
`;
