
import friendsData from './friendsData'
import { BMI } from '../utils'

export function getLumbarScore ({height, weight}) {
  return 1000 / BMI(height, weight)
}

export function getLumbarScoreRanking (data) {
  const allData = friendsData.slice().concat([data])
  allData.sort((a, b) => getLumbarScore(b) - getLumbarScore(a))
  return allData.indexOf(data) + 1
}

export default getLumbarScore
