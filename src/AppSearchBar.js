export default function AppSearchBar() {
    return (
    <div className="AppSearchBar">
        <form method="get" class="search_bar">
            <input type="text" placeholder="Search for any IP address"></input>
            <button type="submit">
                <i class="fa-solid fa-angle-right search_bar__btn"></i>
            </button>
        </form>
    </div>
    )
}