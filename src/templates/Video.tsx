const url = 'https://fresh-pickle.s3.amazonaws.com/og-video.mp4'

const Video = () => (
  <div id="video">
    <video autoPlay loop muted playsInline>
      <source src={url} type="video/mp4" />
    </video>
  </div>
)
export { Video }
