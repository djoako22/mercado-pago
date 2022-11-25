import { useSearchParams } from 'react-router-dom';

function Success() {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);

  return (
    <div>
      <h1>Success</h1>
      <h3>Params</h3>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  )
}
export default Success