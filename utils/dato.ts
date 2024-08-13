export const formaterDato = (dato: string) => {
    return new Date(dato).toLocaleDateString('da-DK', {
        dateStyle: 'long'
    })
}