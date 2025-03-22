import jwt from 'jsonwebtoken'
import { getUserById } from '../../shared'


export function generateTokens(id: string) {
    const secret = process.env.JWT_SECRET || ''
    const accessToken = jwt.sign({ id }, secret, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ id }, secret, { expiresIn: '7d' })

    return {
        accessToken,
        refreshToken
    }
}

export async function getNewTokens(refreshToken: string) {
    const secret = process.env.JWT_SECRET || ''
    const decoded = jwt.verify(refreshToken, secret)

    if(!decoded) throw { message: 'Invalid refresh token' }

    const userId = (decoded as { id: string }).id
    const isExist = await getUserById(userId)

    if(!isExist) throw { message: 'something went wrong' }

    const { password, ...user } = isExist

    const tokens = generateTokens(user.id)

    return {
        user,
        ...tokens
    }
}