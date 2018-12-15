
import friendsData from './friendsData'

function bmi ({ height, weight }) {
  return weight / height / height * 10000
}

export function getLumbarScore ({height, weight}) {
  return 1000 / bmi({ height, weight })
}

export function getLumbarScoreRanking (data) {
  const allData = friendsData.slice()
  allData.concat([data])
  allData.sort((a, b) => getLumbarScore(b) - getLumbarScore(a))
  return allData.indexOf(data)
}

export default getLumbarScore
