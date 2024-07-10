export default function Reel({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#fff"
      className={className}
    >
      <path d="M192-144v-672h72v72h72v-72h288v72h72v-72h72v672h-72v-72h-72v72H336v-72h-72v72h-72Zm72-144h72v-80h-72v80Zm0-152h72v-80h-72v80Zm0-152h72v-80h-72v80Zm360 304h72v-80h-72v80Zm0-152h72v-80h-72v80Zm0-152h72v-80h-72v80ZM408-216h144v-528H408v528Zm0-528h144-144Z" />
    </svg>
  );
}
