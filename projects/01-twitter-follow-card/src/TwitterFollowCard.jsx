import { useState } from 'react'

export function TwitterFollowCard({ children, userName = 'unknown', initialIsFollowing = false }) {
    const imageSrc = `https://unavatar.io/${userName}`
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () =>  {
        setIsFollowing(!isFollowing)
    }

    console.log('[TwitterFollowCard]render with userName: ', userName)

    return  (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar" src={imageSrc}></img>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{buttonText}</span> 
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>                                                                                                    
                </button>
            </aside>
        </article>
    )
}