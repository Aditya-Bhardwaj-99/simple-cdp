interface tagsInterface {
    [key: string] : number
}

interface addressInterface {
    street: string, // Street address
    city: string, // City
    state: string, // State
    zip: string, // Zip code
}

interface keyStringInterface {
    [key: string]: any
}

interface cdpObjInterface{
    id: string, // Unique identifier for the customer profile
    firstName: string, // First name of the customer
    lastName: string, // Last name of the customer
    email: string, // Email address of the customer
    phone: string, // Phone number of the customer
    address: addressInterface,
    tags: tagsInterface, // Tags assigned to the customer
    createdAt: Date, // Timestamp when the profile was created
    updatedAt: Date, // Timestamp when the profile was last updated
}

interface addressupdtInterface {
    street?: string, // Street address
    city?: string, // City
    state?: string, // State
    zip?: string, // Zip code
}

interface cdpFilterObjInterface{
    firstName?: string, // First name of the customer
    lastName?: string, // Last name of the customer
    email?: string, // Email address of the customer
    phone?: string, // Phone number of the customer
    address?: addressupdtInterface
}

interface cdpUpdtObjInterface{
    firstName?: string, // First name of the customer
    lastName?: string, // Last name of the customer
    email?: string, // Email address of the customer
    phone?: string, // Phone number of the customer
    address?: addressupdtInterface,
    updatedAt: Date, // Timestamp when the profile was last updated
}

export { cdpObjInterface,cdpUpdtObjInterface, tagsInterface, keyStringInterface,cdpFilterObjInterface,addressupdtInterface }