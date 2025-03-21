import jwt from 'jsonwebtoken'

export function generateTokens(id: string) {
    const secret = process.env.JWT_SECRET || ''
    const accessToken = jwt.sign({ id }, secret, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ id }, secret, { expiresIn: '7d' })

    return {
        accessToken,
        refreshToken
    }
}