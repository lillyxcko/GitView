import { FormEvent, useState } from 'react'

type Props = {
  fetchData: (username: string) => void
}

function Form({ fetchData }: Props) {
  const [username, setUsername] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    fetchData(username)
    }

    return (
      <form className='w-full max-w-sm mx-auto'
            onSubmit={handleSubmit}>
        <div className='flex mt-10'>
          <input
            name='username'
            required
            value={username}
            placeholder="Type in a GitHub username"
            onChange={(event) => setUsername(event.target.value)}
            className="form-input"
          />
          <button
            type='submit'
            className="search-button">
            Search
          </button>
        </div>
      </form>
    )
  }
  
  export default Form
  