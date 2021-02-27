import './styles.css';

function Sidebar() {
    return (
        <main className="main">
            <aside className="sidebar">
                    <img className="img-perfil"
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQEa7eaFQX87Sg/profile-displayphoto-shrink_800_800/0/1538870707203?e=1619654400&v=beta&t=G9neXdjPZzoychsINo_8sM-gDTlRAxK9pX9A_JyK8qc"
                    alt="Joaldo"/>
                    <h3>Joaldo Tavares</h3>
                    <div className="menu">
                        <img className="img-icons" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Sidebar/images/school.png?raw=true"/><br/>
                        <a className="a-menu" href="">Bachelor of Software Engineer</a><br/>
                        <img className="img-icons" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Sidebar/images/github.png?raw=true"/><br/>
                        <a className="a-menu-github" href="https://github.com/joaldotavares" target="_blank">GitHub</a><br/>
                        <img className="img-icons" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Sidebar/images/mail.png?raw=true"/><br/>
                        <a className="a-menu-email" href="mailto:joaldo643@gmail.com" target="_blank">Email</a><br/>
                        <img className="img-icons" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Sidebar/images/linkedin.png?raw=true"/><br/>
                        <a className="a-menu-linkedin" href="https://www.linkedin.com/in/joaldotavares/" target="_blank">LinkedIn</a><br/>
                        <img className="img-icons" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Sidebar/images/developer.png?raw=true"/><br/>
                        <a className="a-menu-back" href="">Backend Developer</a><br/>
                    </div>
            </aside>
        </main>
    );
}

export default Sidebar;