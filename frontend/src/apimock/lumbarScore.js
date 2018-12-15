
import friendsData from './friendsData'
import { BMI } from '../utils'

export function getLumbarScore ({height, weight}) {
  return 1000 / BMI(height, weight)
}

export function getLumbarScoreRanking (data) {
  const allData = friendsData.slice()
  allData.concat([data])
  allData.sort((a, b) => getLumbarScore(b) - getLumbarScore(a))
  return allData.indexOf(data)
}

export default getLumbarScore
