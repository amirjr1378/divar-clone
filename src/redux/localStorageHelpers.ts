const localStorageName = 'REDUX_STATE'

export const saveStateToLocalStorage = (state: Record<string, any>) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(localStorageName, serializedState)
  } catch {
    // ignore write errors
  }
}

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(localStorageName)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
