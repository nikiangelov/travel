export default `
    type City {
        _id: String!
        name: String!
        description: String
        history: String
        history_en: String
        sub_name: String
        url_slug: String
        iata_code: String!
        country_code: String!
        wiki_article_url: String
        wiki_article_en_url: String
        wiki_voyage_article_url: String
        backdrop_image: String
        featured_image_vertical: String
        featured_image_thumb: String
        population: Population
        coordinates: Coordinates!
        website: String
        timezone: String
        utc_offset: String
        metro: Metro
        quote: Quote
        temperature: Float
        climate_description: String
        climate_description_en: String
        transport: Transport
        transport_description: String
        transport_description_en: String
        parking: String
        parking_en: String
        vlogs: [String]
        description_wiki_short: String
        description_wiki_short_html: String
        description_wiki: String
    }
    input CityInput {
        name: String!
        description: String
        history: String
        history_en: String
        sub_name: String
        url_slug: String
        iata_code: String!
        country_code: String!
        wiki_article_url: String
        wiki_article_en_url: String
        wiki_voyage_article_url: String
        backdrop_image: String
        featured_image_vertical: String
        featured_image_thumb: String
        population: PopulationInput
        coordinates: CoordinatesInput!
        website: String
        timezone: String
        utc_offset: String
        metro: MetroInput
        quote: QuoteInput
        temperature: Float
        climate_description: String
        climate_description_en: String
        transport: TransportInput
        transport_description: String
        transport_description_en: String
        parking: String
        parking_en: String
        vlogs: [String]
        description_wiki_short: String
        description_wiki_short_html: String
        description_wiki: String
    }
    
    type WorkHour {
        start: String
        end: String
    }
    input WorkHourInput {
        start: String
        end: String
    }
    type Metro {
        map_image_url: String
        map_image_page_url: String
        map_attribution: String
        map_attribution_html: String
        attribution_required: Boolean
        working_hours: WorkHour
    }
    input MetroInput {
        map_image_url: String
        map_image_page_url: String
        map_attribution: String
        map_attribution_html: String
        attribution_required: Boolean
        working_hours: WorkHourInput
    }
    type Query {
        cities: [City]
        city(_id: ID, url_slug: String): City
    }
    type Mutation {
        addCity(city: CityInput): City
    }
`;
