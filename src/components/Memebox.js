import React from 'react';

const Memebox = ({ meme }) => {
    const { id, userName, imageUrl, profileUrl } = meme;
    return (
        <div>
            <div style={Stylesheet.prodiv}>
                <div>
                    <img style={Stylesheet.proimg} src={profileUrl} alt="proimg" />
                    <span style={Stylesheet.nametab}>
                        {userName} <small>({id})</small>
                    </span>
                </div>
            </div>
            <div><img style={Stylesheet.image} src={imageUrl} alt={userName} /></div>
            <br /><hr /><br />
        </div>
    )
}
const Stylesheet = {
    proimg: {
        borderRadius: '50%',
        width: '20px'
    },
    nametab: {
        padding: '10px',
        fontSize: '17px',
        fontWeight: '600'
    },
    prodiv: {
        padding: '10px'
    },
    image: {
        width: '100%'
    }
};
export default Memebox;
