export default function Return({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#fff"
      className={className}
    >
      <path d="M354-270 144-480l210-210 51 51-123 123h462v-108h72v180H282l123 123-51 51Z" />
    </svg>
  );
}
