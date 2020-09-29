import React, {useState, useEffect} from 'react';
import './profileData.css';
import Repo from './repo.js';


const ProfileData = (props) => {
    const [userRepos, userReposSet] = useState({
        repos: []
    });
    const [error , errorSet] = useState({
        error: undefined
    })
    useEffect(() => {
        fetch('https://api.github.com/users/'+props.userData.login+'/repos').then(result => {
            return result.json();
        }).then((resData) => {
            userReposSet({
                repos: resData
            })
        }).catch(err => {
            if(err) {
                errorSet({
                    error: err
                })
            }
        })
    }, [props.userData.login])

    const listOfRepos = userRepos.repos.map((item) => {
        return <Repo key={item.id} name={item.name} url={item.html_url} />
    })
    return(
        <div>
            <div className="profile-header">
                <img src={props.userData.avatar_url} alt="profile pic"/>
                {props.userData.name ? <h1>{props.userData.name}</h1> : null}
                <h2>{props.userData.login}</h2>
            </div>
            <div className="basic-info">
                <section className="followers">
                    <h1>Followers:</h1>
                    <p>{props.userData.followers}</p>
                </section>
                <section className="followers">
                    <h1>Following:</h1>
                    <p>{props.userData.following}</p>
                </section>
                <section className="followers">
                    <h1>Public Repositories:</h1>
                    <p>{props.userData.public_repos}</p>
                </section>
            </div>
            <div className="repo-list">
                <h2>Repos:</h2>
                {/* style={{display: 'flex',justifyContent: props.userData.public_repos <= 1 ? null : 'space-around'} */}
                {error.error ? <h3>Some Error Ocurred</h3> : null}
                {props.userData.public_repos < 1 ? <h3 className='no-repo'>No Repositories...</h3> : null}
                <section>
                    {listOfRepos}
                </section>
                
            </div>
        </div>
    )
}

export default ProfileData;