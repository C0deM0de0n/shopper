import { verify } from 'argon2'

export async function validationPass(enteredPass: string, password: string) {
    return verify(password, enteredPass)
}