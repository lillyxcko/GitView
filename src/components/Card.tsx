import type { GitHubData } from '../App'

type Props = {
  data: GitHubData
}

function Card({ data }: Props) {
  return (
    <div className='card-container'>
      
      <div className='avatar-container'>
        <div className='user-info'>
          <div className='user-avatar'>
            <img
              src={data.avatar_url}
              alt='User avatar'
            />
          </div>
          <div className='user-details'>
            <h3 className='user-name'>
              {data.name}
              <span className='user-login'>
                @{data.login}
              </span>
            </h3>
            <p className='repo-info'>
              {data.public_repos} repositories. User since{' '}
              {data.created_at.slice(0, 4)}
            </p>
            <p className='user-location'>
              {data.location || ''}
            </p>
            <p className='user-bio'>
              {data.bio}
            </p>
          </div>
        </div>
      </div>

      <div className='button-container'>
        <button type="button" className='profile-button' tabIndex={0} onClick={() => window.location.href = data.html_url}>
          <span>Profile</span>
        </button>
        <button type="button" className='website-button' tabIndex={0} onClick={() => window.location.href = data.blog}>
          <span>Website</span>
        </button>
      </div>
    </div>
  )
}

export default Card
