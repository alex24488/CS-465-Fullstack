export interface Trip {
    _id: string, // Internal primary key in MongoDb
    code:string,
    name:string,
    length:string,
    start:string,
    resort:string,
    perPerson:string,
    image:string,
    description: string
}