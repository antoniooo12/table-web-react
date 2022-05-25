import * as E from 'fp-ts/lib/Either'
import Either = E.Either

export const checkBtnPressed = (btnCodeBase: string) => (btnCode: string) => (val: string): Either<Error, string> => {
    if (btnCodeBase === btnCode) {
        return E.right(val)
    }
    return E.left(new Error(`btnCodeBase| ${btnCodeBase} != ${btnCode}`))
}