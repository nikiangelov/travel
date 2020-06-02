export default `
    type Travellog {
        _id: String!
        title: String
        author: Author
        images: [String]
        short_description: String
        html_content: String
        plain_text_content: String
        where: String
        duration: String
        price: String
        category: String
        season: String
        is_draft: Boolean
        created_at: String
        updated_at: String
    }
    type Author {
        _id: String!
        firstName: String
        lastName: String
        avatar: String
        email: String!
    }
    input AuthorInput {
        _id: String!
        firstName: String
        lastName: String
        avatar: String
        email: String!
    }
    input TravellogInput {
        title: String
        author: AuthorInput
        images: [String]
        short_description: String
        html_content: String
        plain_text_content: String
        where: String
        duration: String
        price: String
        category: String
        season: String
        is_draft: Boolean
    }
    
    type Query {
        travellogs: [Travellog]
        travellog(_id: ID): Travellog
    }
    type Mutation {
        newTravellog: Travellog
        editTravellog(_id: ID, travellog: TravellogInput): Travellog
    }
`;
