import yellowStar from "/assets/icons/star-yellow.svg";
import lightStar from "/assets/icons/star-light.svg";

export default function Star({ count }: { count: number }) {
  const totalStars = 5; // Assuming the maximum number of stars is 5

  // Array to store star elements
  const starsArray = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < count) {
      // Render yellow star if index is less than count
      starsArray.push(<img key={i} src={yellowStar} alt="star" />);
    } else {
      // Render light star if index is equal to or greater than count
      starsArray.push(<img key={i} src={lightStar} alt="star" />);
    }
  }

  return <div className="stars">{starsArray}</div>;
}
