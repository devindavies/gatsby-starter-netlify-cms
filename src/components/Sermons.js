import React from 'react'
// eslint-disable-next-line no-unused-vars
import YouTube from 'react-youtube'
import styled from 'styled-components'

const SermonGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  margin: 20px;
  grid-gap: 20px;
`
const SermonTitle = styled.h1`
  font-size: 1.375rem;
`
const SermonListItem = styled.div`
  list-style-type: none;

  iframe {
    height: 300px;
  }
`

class Sermons extends React.Component {
  constructor(props) {
    super(props)
    this.state = { videos: [], loading: true }
  }

  componentDidMount() {
    var that = this
    var API_key = 'AIzaSyASF7lTgiAnbIFNs5lrZv7vI1j5Id_EqNk'
    var playlistId = 'UUdY_YA4_NLGBBjk7LFXCA3Q'
    var maxResults = 9
    var url =
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=' +
      maxResults +
      '&playlistId=' +
      playlistId +
      '&key=' +
      API_key

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(function(data) {
        that.setState({ videos: data.items, loading: false })
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
  }

  handleTitle() {
    // eslint-disable-next-line no-unused-vars
    const { loading, videos } = this.state

    if (loading) {
      return null
    }
  }

  render() {
    const { loading, videos } = this.state

    if (loading) {
      return null
    }
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        listType: this.props.listType,
        list: this.props.list,
        modestbranding: 1,
      },
    }

    const listVideos = videos.map(video => (
      <SermonListItem key={video.contentDetails.videoId}>
        <YouTube
          key={video.contentDetails.videoId}
          videoId={video.contentDetails.videoId}
          opts={opts}
          onReady={this._onReady}
        />
        <SermonTitle>{video.snippet.title}</SermonTitle>
      </SermonListItem>
    ))

    return <SermonGrid>{listVideos}</SermonGrid>
  }
}

export default Sermons
