function calculateVolumeAndArea(side) {

  if (Number.isInteger(side) && side > 0 && typeof side !== "string") {
    return `Объем куба: ${ side * side * side }, площадь всей поверхности: ${ 6 * (side * side) }`
  } else {
    return 'При вычислении произошла ошибка'
  }
}

calculateVolumeAndArea(5)


function getCoupeNumber(number) {

  if (number === 0 || number > 36) {
    console.log("Таких мест в вагоне не существует")
    return "Таких мест в вагоне не существует"
  }
  if (Number.isInteger(number) && number > 0 && typeof number !== "string") {
    if (number <= 4) {
      return 1
    } else if (number > 4 && number <= 8) {
      return 2
    } else if (number > 8 && number <= 12) {
      return 3
    } else if (number > 12 && number <= 16) {
      return 4
    } else if (number > 16 && number <= 20) {
      return 5
    } else if (number > 20 && number <= 24) {
      return 6
    } else if (number > 24 && number <= 28) {
      return 7
    } else if (number > 28 && number <= 32) {
      return 8
    } else {
      return 9
    }
  } else {
    console.log("Ошибка. Проверьте правильность введенного номера места")
    return "Ошибка. Проверьте правильность введенного номера места"
  }

}

getCoupeNumber(36)