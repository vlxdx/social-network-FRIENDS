import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://www.irishexaminer.com/cms_media/module_img/6597/3298958_1_seoimage4x3_iStock-107430118.jpg',
                followed: false, fullName: 'Alex', status: 'Avaliable', location: { city: 'Dublin', country: 'Ireland' }
            },
            {
                id: 2, photoUrl: 'https://media.theeverygirl.com/wp-content/uploads/2022/06/feelings-for-friend-teg-gallery.jpg',
                followed: true, fullName: 'Marie', status: 'Hey there!', location: { city: 'Hamburg', country: 'Germany' }
            },
            {
                id: 3, photoUrl: 'https://cdn2.momjunction.com/wp-content/uploads/2021/08/27-Important-Qualities-Of-A-Good-Friend-2.jpg',
                followed: false, fullName: 'Ashley', status: 'Peace', location: { city: 'Knoxville', country: 'United States' }
            }
        ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;