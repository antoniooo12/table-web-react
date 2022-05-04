export const telMiddleware = (telNumber: string) =>
    telNumber.split('')
        .filter(num => Number(num) || num === '0')
        .join('')