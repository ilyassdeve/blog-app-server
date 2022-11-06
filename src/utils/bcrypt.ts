import * as bcrypt from 'bcrypt'

const SALT = 10


export const encrypt = async (password: string): Promise<string> => {
    const hashed = await bcrypt.hash(password, SALT)
    return hashed;

}


export const compareHash = async (localPassword: string, dbPassword: string): Promise<boolean> => {
    const isMatch = bcrypt.compare(localPassword, dbPassword)
    return isMatch;
}