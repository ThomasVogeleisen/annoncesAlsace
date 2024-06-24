import { useDispatch } from 'react-redux'
import { TestAction } from '../../actions/user.actions'

export function Home() {
  const dispatch = useDispatch()

  const testButton = () => {
    console.log('test')
    dispatch(TestAction('Bonjour Redux'))
  }
  return (
    <>
      <h1>Page HOME</h1>
      <button onClick={testButton}>Test</button>
    </>
  )
}
