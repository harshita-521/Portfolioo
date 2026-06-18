import './Loader.css'

const bootLines = [
  { text: '▶  initializing portfolio...',  color: 'loaderAccent', delay: 0    },
  { text: '   loading components',         color: 'loaderMuted',  delay: 380  },
  { text: '   fetching projects',          color: 'loaderMuted',  delay: 720  },
  { text: '✓  all systems go',             color: 'loaderGreen',  delay: 1060 },
  { text: '   building UI',               color: 'loaderMuted',  delay: 1380 },
  { text: '✦  ready.',                     color: 'loaderPurple', delay: 1700 },
]

function Loader() {
  return (
    <div className="loader">
      <div className="loaderWindow">

        <div className="loaderTitleBar">
          <span className="loaderDot loaderDotRed"   />
          <span className="loaderDot loaderDotYellow"/>
          <span className="loaderDot loaderDotGreen" />
          <span className="loaderWindowTitle">boot — zsh</span>
        </div>

        <div className="loaderBody">
          {bootLines.map((line, i) => (
            <div
              key={i}
              className={`loaderLine ${line.color}`}
              style={{ animationDelay: `${line.delay}ms` }}
            >
              {line.text}
              {i === bootLines.length - 1 && (
                <span className="loaderCursor" />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Loader
