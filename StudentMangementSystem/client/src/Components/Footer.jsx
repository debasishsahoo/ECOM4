import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div className="row expanded callout secondary">

                <div className="large-4 columns">
                    <h5>FLICKR IMAGES</h5>
                    <div className="row small-up-4">
                        <div className="column"><img className="thumbnail" src="https://via.placeholder.com/75" alt="image of space dog" />
                        </div>
                        <div className="column"><img className="thumbnail" src="https://via.placeholder.com/75" alt="image of space dog" />
                        </div>
                        <div className="column"><img className="thumbnail" src="https://via.placeholder.com/75" alt="image of space dog" />
                        </div>
                        <div className="column"><img className="thumbnail" src="https://via.placeholder.com/75" alt="image of space dog" />
                        </div>
                        <div className="column"><img className="thumbnail" src="https://via.placeholder.com/75" alt="image of space dog" />
                        </div>
                        <div className="column"><img className="thumbnail" src="https://via.placeholder.com/75" alt="image of space dog" />
                        </div>
                        <div className="column"><img className="thumbnail" src="https://via.placeholder.com/75" alt="image of space dog" />
                        </div>
                        <div className="column"><img className="thumbnail" src="https://via.placeholder.com/75" alt="image of space dog" />
                        </div>
                    </div>

                </div>

                <div className="large-4 columns">
                    <h5>FLICKR IMAGES</h5>
                    <span className="secondary label">Space</span>
                    <span className="secondary label">Galaxies</span>
                    <span className="secondary label">Milky Way</span>
                    <span className="secondary label">Black Holes</span>
                    <span className="secondary label">Rebels</span>
                    <span className="secondary label">Death Star</span>
                    <span className="secondary label">Republic</span>
                    <span className="secondary label">R2D2</span>
                </div>

                <div className="large-4 columns">
                    <h5>RANDOM MAG</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quam voluptatum vel repellat ab similique
                        molestias molestiae ea omnis eos, id asperiores est praesentium, voluptate officia nulla aspernatur sequi
                        aliquam.</p>
                </div>

            </div>
            
            <div className="row expanded">

                <div className="medium-6 columns">
                    <ul className="menu">
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Partner</a></li>
                        <li><a href="#">Explore</a></li>
                    </ul>
                </div>

                <div className="medium-6 columns">
                    <ul className="menu align-right">
                        <li className="menu-text">Copyright © 2099 Random Mag</li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}

export default Footer;