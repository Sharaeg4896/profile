import React from 'react';

class Social extends React.Component {
    render() {
        return (
            <section className="ms-textAlignCenter">
                <a href="javascript:void(0);"><i className="fas fa-envelope-square" /></a>
                <a href="javascript:void(0);"><i className="fab fa-twitter" /></a>
                <a href="javascript:void(0);"><i className="fab fa-instagram" /></a>
                <a href="javascript:void(0);"><i className="fab fa-linkedin-in" /></a>
                <a href="javascript:void(0);"><i className="fab fa-github-square" /></a>
            </section>
        )
    }
}

export default Social;