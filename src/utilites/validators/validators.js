export const required = (value) => {
    if (value) return undefined
    if (value==='') return 'Field is required'
    return 'Field is required'
}

export const maxLengthCreator = (maxLength)=> (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}