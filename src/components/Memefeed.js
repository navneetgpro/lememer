import React from 'react';
import Memebox from './Memebox';
import Loader from './Loader';

const Memefeed = ({ memes, loading }) => {
    if (loading) {
        return <Loader />
    } else {
        return (
            <main>
                <div className="spacer">
                    {memes.map(meme => {
                        return <Memebox key={meme.id} meme={meme} />
                    })}
                </div>
            </main>
        )
    }
}
export default Memefeed;
