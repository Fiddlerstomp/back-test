import React, { ChangeEvent, useState } from 'react'
import spacesAPI from '../../api/spaces-api';

const Spaces = () => {
    const [title, setTitle] = useState<string>("");

    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const clickSubmitHandler = () => {
        spacesAPI.createSpace(title)
            .then(res => {
                console.log(res.status);
                setTitle("");
            });
    }

    return (
        <div>
            <p>Space title:</p>
            <input type="text" value={title} onChange={changeTitleHandler}/>
            <button onClick={clickSubmitHandler}>Submit</button>
        </div>
    )
}

export default Spaces