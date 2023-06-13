// Write your code here
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {data} = props
  console.log(data)

  return (
    <div>
      <ReactPlayer url={data.videoUrl} controls className="vid" />
    </div>
  )
}
export default MovieItem
