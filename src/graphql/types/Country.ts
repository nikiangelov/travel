export default `
    type Country {
        _id: String!
        name: String!
        description: String
        code: String!
        capital: String!
        capital_iata_code: String!
        population: Int
        region: String
        region_en: String
        subregion: String
        subregion_en: String
        coordinates: Coordinates!
        area: Int
        gini: Float
        timezones: String
        timezone_simple: String
        timezone_code: String
        borders: [String]
        currencies: [String]
        flag: String
        eu: Boolean
        schengen: Boolean
        gpi_rank: Int
        gpi_rank_max: Int
        gpi_score: Float
        gpi_score_min: Float
        gpi_score_max: Float
        price_level: Int
        price_level_max: Int
        price_level_min: Int
        qol: QualityOfLife
        languages: [String]
        wikipedia_article: String
        music: [String]
        facts: [String]
        phrases: [Phrase]
    }
    input CountryInput {
        name: String!
        description: String
        code: String!
        capital: String!
        capital_iata_code: String!
        population: Int
        region: String
        region_en: String
        subregion: String
        subregion_en: String
        coordinates: CoordinatesInput!
        area: Int
        gini: Float
        timezones: String
        timezone_simple: String
        timezone_code: String
        borders: [String]
        currencies: [String]
        flag: String
        eu: Boolean
        schengen: Boolean
        gpi_rank: Int
        gpi_rank_max: Int
        gpi_score: Float
        gpi_score_min: Float
        gpi_score_max: Float
        price_level: Int
        price_level_max: Int
        price_level_min: Int
        qol: QualityOfLifeInput
        languages: [String]
        wikipedia_article: String
        music: [String]
        facts: [String]
        phrases: [PhraseInput]
    }
    type QualityOfLife {
        total: Int
        safety: Int
        healt_care: Int
        pollution: Int
        climate: Int
    }
    type Phrase {
        origin: String
        transcript: String
        bg: String
    }
    input QualityOfLifeInput {
        total: Int
        safety: Int
        healt_care: Int
        pollution: Int
        climate: Int
    }
    input PhraseInput {
        origin: String
        transcript: String
        bg: String
    }
    type Query {
        country(code: String): Country
        countries: [Country]
    }
    type Mutation {
        addCountry(country: CountryInput!): Country
    }
`;

// Example Mutations

/*
# Write your query or mutation here
mutation AddCountry {
  addCountry(country: {
    name: "",
    code: "",
    capital: "",
    capital_iata_code: "",
    population: 0,
    region: "",
    region_en: "",
    subregion: "",
    subregion_en: "",
    coordinates: {
      lat: 0,
      lng: 0
    },
    area: "",
    gini: 0,
    timezones: "",
    timezone_simple: "",
    timezone_code: "",
    borders: [""]
    currencies: [""]
    flag: "",
    eu: false,
    schengen: false,
    gpi_rank: 0,
    gpi_rank_max: 0,
    gpi_score: 0,
    gpi_score_min: 0,
    gpi_score_max: 0,
    price_level: 0,
    price_level_max: 0,
    price_level_min: 0,
    qol: {
      total: 0,
      safety: 0,
      healt_care: 0,
      pollution: 0,
      climate: 0,
    },
    languages: [""]
    wikipedia_article: "",
    music: [""]
    facts: [""]
  }) {
    id
    name
    capital
  }
}

*/
