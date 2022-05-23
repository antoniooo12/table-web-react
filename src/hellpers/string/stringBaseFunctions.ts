import * as E from 'fp-ts/lib/Either'
import Either = E.Either
export const checkLengthP = (length: number) => (str: string): Either<Error, string> => (str.length === length ? E.right(str) : E.left(new Error('')))
