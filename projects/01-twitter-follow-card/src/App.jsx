import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo Heraldo',
            isFollowing: false
        }
    ]

    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => {
                    <TwitterFollowCard
                        key={userName}
                        userName={userName} 
                        initialIsFollowing = {isFollowing}>
                        {name}
                    </TwitterFollowCard>
                })
            }
        </section>
    )
}   