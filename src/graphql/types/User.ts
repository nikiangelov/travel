export default `
    type User {
        _id: String!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        avatar: String,
        userType: String!
    }

    input UserInput {
        firstName: String!
        lastName: String!
        email: String!
        avatar: String,
        password: String!
        passwordConfirm: String!
    }
    input UserEditInput {
        firstName: String
        lastName: String
        avatar: String,
        password: String
        userType: String
    }

    type LoginResponse {
        accessToken: String
        user: User
    }

    type Query {
        user(_id: String!): User
        users: [User]
        currentUser: User
    }

    type Mutation {
        registerUser(user: UserInput!): LoginResponse
        loginUser(email: String!, password: String!): LoginResponse
        logoutUser: Boolean
        deleteUser(_id: String!): User
        editUser(_id: String!, user: UserEditInput! ): User
    }
`;
