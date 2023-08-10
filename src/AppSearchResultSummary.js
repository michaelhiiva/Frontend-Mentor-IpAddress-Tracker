import './AppSearchResultSummary.css'

export default function AppSearchResultSummary({ data_query }) {
  return (
    <article className="ip_search_result_output">
      <section>
        <h2>IP Address</h2>
        <p className="ip_address__number">{data_query.ip}</p>
      </section>
      <div className="section_divider">
        <hr />
      </div>
      <section>
        <h2>Location</h2>
        <p className="ip_address__location">{data_query.city}, {data_query.state_prov}, {data_query.country}</p>
      </section>
      <div className="section_divider">
        <hr />
      </div>
      <section>
        <h2>Time Zone</h2>
        <p className="ip_address__timezone">{data_query.time_zone.name}</p>
      </section>
      <div className="section_divider">
        <hr />
      </div>
      <section>
        <h2>ISP</h2>
        <p className="ip_address__isp">{data_query.organization}</p>
      </section>
    </article>
  );
}