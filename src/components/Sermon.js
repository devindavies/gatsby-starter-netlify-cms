import React from 'react'
// eslint-disable-next-line no-unused-vars
import YouTube from 'react-youtube'
import './Sermon.css'

class Sermon extends React.Component {
  constructor(props) {
    super(props)
    this.state = { videos: [], loading: true }
  }

  componentDidMount() {
    var that = this
    var API_key = 'AIzaSyASF7lTgiAnbIFNs5lrZv7vI1j5Id_EqNk'
    var playlistId = 'UUdY_YA4_NLGBBjk7LFXCA3Q'
    var maxResults = 1
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
    var title = videos[0].snippet.title
    title = title.slice(16, -28)
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
    return (
      <div className="Message">
        <YouTube
          className="MessageVideo"
          videoId={videos[0].contentDetails.videoId}
          opts={opts}
          onReady={this._onReady}
        />
        <div className="MessageTitleGroup">
          <h1>Our Latest Message</h1>
          <h2>{title}</h2>
          <div className="WatchButton">
            <a href="https://www.youtube.com/channel/UCdY_YA4_NLGBBjk7LFXCA3Q">
              WATCH MORE
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Sermon
/*function onYouTubePlayerAPIReady()
{
        player = new YT.Player('player',
        {
          height: '390',
          width: '640',
          playerVars:
          {
            listType:'playlist',
            list: '<YOURPLAYLISTID>'
          }
        });
}*/
