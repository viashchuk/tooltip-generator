export const objectToCss = (cssObj) => {
  return Object.keys(cssObj)
    .reduce((str, key) => {
      const properties = JSON.stringify(cssObj[key].style)
        .replace(/"/g, '')
        .replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
        .replace(/,/g, ';\n')
        .replace(/:/g, ': ')
        .replace(/{/g, '\n')
        .replace(/}/g, '\n')
      str += `\n.${key} { ${properties} }`
      return str
    }, '')
}
