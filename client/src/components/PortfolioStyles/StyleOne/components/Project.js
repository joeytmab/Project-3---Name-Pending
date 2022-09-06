
const styles = {
    projects: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
    }, 
    flex: {
        display: 'flex',
    },
    fit: {
        height: '0',
        maxHeight: 'fit-content',
    },
    img: {
        maxWidth: '85%',
        maxHeight: 'fit-content',
        border: '2px #f19b2c solid',
        transition: 'all 0.5s ease-in-out',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bottom: '25%',
        width: 'fit-content',
        backgroundColor: '#f19b2c',
        textDecoration: 'none',
        color: 'white',
        padding: '1% 2%',
        zIndex: '1',
    },
    header: {
        margin: '0',
    },
};

const Project = (props) => { //create a project object and map over it instead of repeating the same code 
    //need to map over params.projects 
    return (
    <div>
        <header>
            <h1 className="orange">MY PROJECTS</h1>
            <h2>CLICK ON THE PROJECT TO VIEW</h2>
        </header>
        <div style={styles.projects}>
            {props.params.projects.map((project) => (
                <div>map projects here</div>
            ))}
            <div style={styles.flex}>
                <div className="project-container">
                    <a href="https://github.com/cartaud/mvcTechBlog" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={``}  alt="Project preview" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Tech Blog</h5>
                        <h6 style={styles.header}>MVC</h6>
                    </div>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/E-CommerceBackEnd" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={``}  alt="Project preview" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>E-Commerce</h5>
                        <h6 style={styles.header}>ORM</h6>
                    </div>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/expressNoteTaker" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={``}  alt="Project preview" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Note Taker</h5>
                        <h6 style={styles.header}>Express.JS</h6>
                    </div>
                </div>
            </div>

            <div style={styles.flex}>
                <div className="project-container">
                    <a href="https://github.com/cartaud/employeeTracker" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={``}  alt="Project preview" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Employee Tracker</h5>
                        <h6 style={styles.header}>SQL</h6>
                    </div>
                </div>
                <div className="project-container">
                    <a href="https://cartaud.github.io/etch-a-sketch/" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={``}  alt="Project preview" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Etch-A-Sketch</h5>
                        <h6 style={styles.header}>Javascript</h6>
                    </div>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/vinylMusicShop" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={``}  alt="Project preview" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Music Store</h5>
                        <h6 style={styles.header}>Fullstack</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Project