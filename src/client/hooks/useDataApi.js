import { formatAccounts } from '.'

const useDataApi = () => {
  const _API_BASE = `http://localhost:3000/read-xml`

  const getData = async () => {
    return await fetch(_API_BASE)
      .then(response => response.json())
      .then(response => formatAccounts(response))
      .catch(() => console.log('Something went wrong....'))
  }
  return { getData };
}

export default useDataApi;
