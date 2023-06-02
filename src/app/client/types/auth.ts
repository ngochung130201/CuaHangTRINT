type TypeLogin = {
    email:string | null,
    password?:string | null
}
type TypeRegister = {
    firstName:string | null,
    lastName:string | null,
    email:string | null,
    password:string | null,
    confirmPassword:string | null
}
export {
    TypeLogin,
    TypeRegister
}