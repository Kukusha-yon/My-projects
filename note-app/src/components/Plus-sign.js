
const Plus = () => {
    const changeDisplay = () => {
            const nav = document.querySelector(".new");
            nav.style.cssText = "opacity: 1";
          }
    
    return (
        <div className="plus">
            <button className="plus-button" onClick={changeDisplay}>
            <img src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png" alt="plus"/>
            </button>
        </div>
    )
}
export default Plus;