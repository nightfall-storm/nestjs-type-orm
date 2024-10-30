import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig = (): JwtModuleOptions => ({
  secret:
    process.env.JWT_SECRET ||
    '068e5f9d375cf39134ba1d9249065fc82892bb0e26672a39df51bd45eb79a1a08844c7da391453822a8619ae85ace3ec',
  signOptions: {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_MS || '1h', // Set the token expiration
    algorithm: 'HS256', // HMAC-SHA256 is the default and commonly used
  },
});
