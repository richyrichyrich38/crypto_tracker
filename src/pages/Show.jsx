import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'

function Show() {
  const store = showStore()
  const params = useParams()


  React.useEffect(() => {
    console.log(params);
    store.fetchData(params.id)
  }, [])

  return (
    <div>Show</div>
  )
}

export default Show;