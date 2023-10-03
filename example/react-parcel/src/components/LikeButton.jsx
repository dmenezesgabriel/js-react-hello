export default function LikeButton({ likes, onClick }) {
  return <button onClick={onClick}>Like ({likes})</button>;
}
