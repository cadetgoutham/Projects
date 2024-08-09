import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({ image }) {
    const [image2, image3, image4] = image
    return (
        <div style={{ width: "100%", height: '100%', border: "1px solid black" }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="h-custom w-100"
                        src={image2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="h-custom w-100"
                        src={image3}
                        alt="second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="h-custom w-100"
                        src={image4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;