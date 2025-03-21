import { validate } from 'class-validator'

export async function validateDto(dto: any, dtoClass: any) {
    const dtoInstance = Object.assign(new dtoClass(), dto)
    const errors = await validate(dtoInstance)

    if (errors.length > 0) {

        const errorMessage = errors.map(error => ({
            property: error.property,
            constraints: error.constraints
        }));

        throw errorMessage;
    }

    return dtoInstance
}
