import React from 'react';

const Memebox = ({ meme }) => {
    const { id, userName, imageUrl, profileUrl } = meme;
    return (
        <div>
            <div style={Stylesheet.feed}>
                <div style={Stylesheet.profileHeader}>
                    <div>
                        <img style={Stylesheet.proimg} src={profileUrl} alt="proimg" />
                    </div>
                    <div>
                        <h4>{userName}</h4>
                        <small>100m</small>
                    </div>
                </div>
            </div>
            <div><img style={Stylesheet.MemeImage} src={imageUrl} alt={userName} /></div>
            <br /><hr /><br />
        </div >
    )
}
const Stylesheet = {
    feed: {
        padding: '10px'
    },
    proimg: {
        borderRadius: '50%',
        width: '30px',
        marginRight: '12px'
    },
    profileHeader: {
        display: 'flex',
        alignItems: 'center',
        background: 'whitesmoke',
        padding: '6px'
    },
    MemeImage: {
        width: '100%'
    }
};
export default Memebox;
