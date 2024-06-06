import PermissionType from "./PermissionType";

interface DatabaseItem{
    email : string;
    password : string;
    permission : PermissionType;
}

const Database : DatabaseItem[] = [
    {
        email : "usuario1@gmail.com",
        password : "654321",
        permission : PermissionType.ADMIN
    },
    {
        email : "usuario2@gmail.com",
        password : "qwerty",
        permission : PermissionType.USER
    },
    {
        email : "usuario3@gmail.com",
        password : "password",
        permission : PermissionType.USER
    }
];

export default Database;