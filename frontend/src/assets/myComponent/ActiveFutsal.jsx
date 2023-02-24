import ImageSlider from "./ImageSlider";
import pic4 from '../images/active_futsal.jpg';
import style from './Active_futsal.module.css';



const Active = () => {
    const slides = [
        { url: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/273508160_286561200209021_7787798813308399542_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=gvZTpRDm0VsAX_k5Cup&_nc_ht=scontent.fktm17-1.fna&oh=00_AfA7iLkbVSoUtkIM8h-B9KrsBPya8y7BClYSwx7QJCKqEw&oe=63F40764", title: "beach" },
        { url: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/240516034_198857832312692_3775243054959120875_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=dKwRXDUB-VYAX8SZybz&_nc_oc=AQkYgh07qskbCyEE6XiaG9ijla6K384_uZAHEP1dbiY2twKbX50AaZyUQ_qt5-Kz0LOXV816d9WtOyyKR4aNHH6_&_nc_ht=scontent.fktm17-1.fna&oh=00_AfALsFzCiBga0Q5QaTFNy2wG8_X_Fyrg82Box8-iIrkRtA&oe=63F3B573", title: "boat" },
        { url: "https://scontent.fktm17-1.fna.fbcdn.net/v/t1.6435-9/171375130_112103624321447_8697118596638278010_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=kMkHHVIZiIQAX8zdgv5&_nc_ht=scontent.fktm17-1.fna&oh=00_AfDxSOgnpYO9GlIjZnCQxB2ugcqJQouxQiphb1ztYJngPA&oe=640D024E", title: "forest" },
        { url: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/240516034_198857832312692_3775243054959120875_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=8HFnGGupo3sAX_Obn2U&_nc_oc=AQlejP6by7KEtThJYdJnkHRTLB6sG9pPyRDDLLZSc0WctPpMX66O8iGjTo8aGk-kIoumu8YiCYq79JZQNEg8fJ4j&_nc_ht=scontent.fktm17-1.fna&oh=00_AfBqoNaYF44c8NofftDw1BHVwr7q1Rd9O3lbdDebE52tng&oe=63E9D233", title: "city" },
        { url: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/328936616_733211938150433_6402683889639463532_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=9sU10ZfFZdQAX9mpjTA&tn=UqHOCuIm1fgrDSli&_nc_ht=scontent.fktm17-1.fna&oh=00_AfB1z1qII5uc9P6AFeWZhFVA-Ic0DTJ3LhtnxHkDgz3l5Q&oe=63EA8BA5", title: "italy" },
    ];
    const containerStyles = {
        width: "100%",
        height: "450px",
        margin: "0 auto",

    };
    return (
        <>
            <div>
                <div style={containerStyles}>
                    <ImageSlider slides={slides} />
                </div>
                <div className={style.name}>
                    <h1>Active Futsal</h1>
                </div>
                <p className={style.status}>Opening and Closing Status<br />
                    Open now</p>
                <div>
                    <div>
                        <h2>Sports Available</h2>
                        <p className={style.status}>Futsal <br />Game modes:5 vs 5</p>
                        <div>
                            <h2>Aminities</h2>
                            <div>
                                <h3>Changing Rooms</h3>
                                <p>Lockers and changing rooms available</p>
                            </div>
                            <h3>CCTVC survellience</h3>
                            <p>The venue is secured with CCTVC survellience</p>
                            <div>
                                <button className={style.button} type="button">Book a match</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
};

export default Active;