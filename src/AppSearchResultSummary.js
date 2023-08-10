import './AppSearchResultSummary.css'

export default function AppSearchResultSummary({ data }) {
  return (
    <article className="ip_search_result_output">
      <section>
        <h2>IP Address</h2>
        <p className="ip_address__number">{data.query}</p>
      </section>
      <div className="section_divider">
        <hr />
      </div>
      <section>
        <h2>Location</h2>
        <p className="ip_address__location">{data.region}, {data.country}</p>
      </section>
      <div className="section_divider">
        <hr />
      </div>
      <section>
        <h2>Time Zone</h2>
        <p className="ip_address__timezone">{data.timezone}</p>
      </section>
      <div className="section_divider">
        <hr />
      </div>
      <section>
        <h2>ISP</h2>
        <p className="ip_address__isp">{data.org}</p>
      </section>
    </article>
  );
}