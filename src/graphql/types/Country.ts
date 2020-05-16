export default `
    type Country {
        id: Int
        name: String
        code: String
        capital: String
        capital_iata_code: String
        population: Int
        region: String
        region_en: String
        subregion: String
        subregion_en: String
        coordinates: Coordinates
        area: Int
        gini: Int
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
        gpi_score: Int
        gpi_score_min: Int
        gpi_score_max: Int
        price_level: Int
        price_level_max: Int
        price_level_min: Int
        qol: QualityOfLife
        languages: [String]
        wikipedia_article: String
        music: [String]
        facts: [String]
    }
    type QualityOfLife {
        total: Int
        safety: Int
        healt_care: Int
        pollution: Int
        climate: Int
    }
    type Query {
        country(code: String): Country
        countries: [Country]
    }
    type Mutation {
        addCountry(name: String): Country
    }
`;
