export default `
    type Population {
        year: Int
        total: Int
        density: Int
    }
    input PopulationInput {
        year: Int
        total: Int
        density: Int
    }
    type Coordinates {
        lat: Float
        lng: Float
    }
    input CoordinatesInput {
        lat: Float!
        lng: Float!
    }

    # Quote Types
    type Quote {
        quote: String
        author: String
    }
    input QuoteInput{
        quote: String
        author: String
    }
    
    # Transport Types
    type Transport {
        options: [TransportOption]
    }
    type TransportOption {
        type: String
        description: String
        price: [TransportPrice]
        price_range: TransportPriceRange,
    }
    type TransportPrice {
        title: String
        value: Float
        currency: String
    }
    type TransportPriceRange {
        min: Float,
        max: Float,
        currency: String,
    }
    input TransportInput {
        options: [TransportOptionInput]
    }
    input TransportOptionInput {
        type: String
        description: String
        price: [TransportPriceInput]
        price_range: TransportPriceRangeInput,
    }
    input TransportPriceInput {
        title: String
        value: Float
        currency: String
    }
    input TransportPriceRangeInput {
        min: Float,
        max: Float,
        currency: String,
    }

`;
