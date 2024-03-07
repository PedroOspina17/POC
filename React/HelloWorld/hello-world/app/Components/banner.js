const Banner = (props)=> { // This can be destructured like {headerText}
    return (
        <header >
            <div>
            </div>
            <div>
                <h1>{props.headerText}</h1>
            </div>
        </header>
    );
};

export default Banner;