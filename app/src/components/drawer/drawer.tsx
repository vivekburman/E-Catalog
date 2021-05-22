import './drawer.scss';
const Drawer = () => {
    return (
        <div className="ec-drawer-wrapper ec-full-height">
            <div className="ec-drawer-container">
                <button className="ec-drawer-icon ec-cursor-pointer ec-no-padding">
                    <div className="ec-drawer-line ec-margin-bottom-3"></div>
                    <div className="ec-drawer-line ec-margin-bottom-2"></div>
                    <div className="ec-drawer-line"></div>
                </button>
                <div className="ec-drawer-listwrapper ec-position-fixed">
                </div>
            </div>
        </div>
    )
}

export default Drawer;