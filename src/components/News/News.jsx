import React from "react";
import s from "./News.module.css";

const News = (props) => {
    return (
        <div className={s.newsBlock}>
            <header>
                <h1>News</h1>
            </header>
            <div>
                <div>
                    Video
                </div>
                <div>
                    World
                </div>
                <div>
                    US
                </div>
                <div>
                    Business
                </div>
                <div>
                    Tech
                </div>
                <div>
                    Science
                </div>
            </div>
        </div>
    )
}

export default News;