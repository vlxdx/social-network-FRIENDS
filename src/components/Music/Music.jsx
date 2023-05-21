import React from "react";
import s from "./Music.module.css"

const Music = (props) => {
    return (
        <div className={s.music}> 
            <header>
                <h1>Music</h1>
            </header>
            <div>
                <div>
                    New Music
                </div>
                <div>
                    New DJ Mixes
                </div>
                <div>
                    Music by Mood
                </div>
                <div>
                    Best New Songs
                </div>
                <div>
                    Daily Top 100
                </div>
                <div>
                    City Charts
                </div>
                <div>
                    Artist Interviews
                </div>
            </div>
        </div>
    )
}

export default Music;