import { getLumbarScoreRanking } from './lumbarScore'
import { toast } from 'react-toastify'

export default function (store) {
  function select(state) {
    return getLumbarScoreRanking(state.form)
  }

  let currentValue
  function handleChange() {
    const previousValue = currentValue
    currentValue = select(store.getState())

    if (previousValue === undefined) return

    if (previousValue !== currentValue) {
      toast(`순위 변동: ${previousValue} → ${currentValue}`)
    }
  }

  store.subscribe(handleChange)
}
