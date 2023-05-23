import jwt from 'jsonwebtoken';

const secret = process.env.TWOC2P_SECRET_KEY as string;

// Function to generate a JWT
export const generateToken = (payload: any): string => {
    return jwt.sign(payload, secret);
};

// Function to verify a JWT
export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        throw new Error('Invalid token');
    }
};
