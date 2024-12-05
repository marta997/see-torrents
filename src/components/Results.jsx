const Results = (props) => {
  const { results } = props

  const icon = {
    Literature: "📙",
    Anime: "🎞",
  }
  return results.map((result, index) => {
    const seeds = result.downloads || result.leechers
    return (
      <p key={index}>
        <a href={result?.magnet} target="_blank">
          {icon[result?.category]} {result.name}{" "}
          <b style={{ color: "orange" }}>({seeds})</b>
        </a>
      </p>
    )
  })
}
export default Results
