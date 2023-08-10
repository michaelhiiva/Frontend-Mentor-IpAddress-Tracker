import './AppSearchBar.css'

export default function AppSearchBar({ setIpAddress }) {
  const search_input_field = document.querySelector('.search_input_field');

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    setIpAddress(search_input_field.value);
  }

  return (
    <form className="search_bar_form" onSubmit={handleSubmitEvent}>
      <input type="text" placeholder="Search for any IP address" className="search_input_field" />
      <button type="submit" className="search_bar__btn">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </form>
  );
}