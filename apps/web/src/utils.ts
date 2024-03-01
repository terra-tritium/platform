export const getDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100
}

export const getFirstLetter = (text: string) => {
  let firstLetter = text

  if (text && text.length > 1) {
    firstLetter = text.charAt(0).toUpperCase()
  }

  return firstLetter
}

export const getInitials = (firstName: string, lastName?: string) => {
  return `${getFirstLetter(firstName)}${lastName && getFirstLetter(lastName)}`
}
