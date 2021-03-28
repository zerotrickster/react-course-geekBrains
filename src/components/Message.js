export const Message = ({ text, author }) => {
  return (
    <div>
      <small>{author}:</small>
      {text}
    </div>
  );
};
