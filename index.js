// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toUpperCase() === string.toUpperCase()
    )
  }

  function fuzzyMatch(drivers, string) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toUpperCase().indexOf(string.toUpperCase()) === 0
        )
  }

  function matchName(drivers, string) {
    return drivers.filter( record => record.name === string)
  }