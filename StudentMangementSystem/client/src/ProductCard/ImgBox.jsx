import React from 'react';

function ImgBox(props) {
    const img = "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true";
    return (
        <>
            <div className="imgBx">
                <img src={img} alt="Nike Jordan Proto-Lyte Image" />
            </div>
        </>
    );
}

export default ImgBox;