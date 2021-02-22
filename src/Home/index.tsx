import './styles.css';
function Home (){
    return (
    <div className="twitter">
    <div className="container">

      <h2>Welcome</h2>
      <p>
        Hello, I am a student of Software Engineering at <a href="https://www.ucsal.br/">Universidade Católica do Salvador</a>. Currently in the third year
        of the course. I am currently one of the coordinators of the study group for programming marathons at the 
        Universidade Católica do Salvador.<br/>

        I am very fond of sharing knowledge as much as I can. I believe that information in the right hands has the power
         to move the world and offer better conditions for the whole of society.<br/>
        My interest in technology and computing has always been with me. I try to maintain a daily study routine and apply
        this knowledge in practice through personal projects.<br/>
      </p>

      <h2>My Skills</h2>

      <table>
        <tr>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/java.png?raw=true"/><a>Java</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/spring.png?raw=true"/><a>Spring Boot</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/hibernate.png?raw=true"/><a>Hibernate</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/postgresql.png?raw=true"/><a>PostgreSQL</a></td>
        </tr>
        <tr>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/typescript.png?raw=true"/><a>TypeScript</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/react.png?raw=true"/><a>React</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/mysql.png?raw=true"/><a>MySQL</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/cplusplus.png?raw=true"/><a>C++</a></td>
        </tr>
        <tr>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/restapi.png?raw=true"/><a>RestAPI</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/html.png?raw=true"/><a>HTML</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/css.png?raw=true"/><a>CSS</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/h2.png?raw=true"/><a>H2 DataBase</a></td>
        </tr>
        <tr>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/git.png?raw=true"/><a>Git</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/python.png?raw=true"/><a>Python</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/flask.png?raw=true"/><a>Flask</a></td>
        </tr>  
      </table>

      <h2>Projects / Repositories</h2>
      <p><a className="a-sub" href="https://github.com/joaldotavares/dsdeliver"  target="_blank">Ds Deliver </a>: It is an application 
      for ordering food for restaurants and deliveries. With the option of placing an order and choosing the location for delivery. The 
      technologies used were Java, Spring Boot and Hibernate for backend development and Typescript, HTML 5, CSS 3 and React for frontend development. <br /><br />
      <a className="a-sub" href="https://github.com/joaldotavares/data-structures"  target="_blank">Data Structures </a>: This project contains 
      implementations of some data structures and algorithms in java, made by me. It has Sorting algorithms, Trees and Graphs. <br /><br />
      <a className="a-sub" href=""  target="_blank">Problem Solving </a>: <br /><br />
      </p>

      <h2>General Skills</h2>
      <table>
        <tr>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/check.png?raw=true"/><a>Problem Solving</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/check.png?raw=true"/><a>Algoriths</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/check.png?raw=true"/><a>Data Structures</a></td>
        </tr>
        <tr>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/check.png?raw=true"/><a>Adaptability</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/check.png?raw=true"/><a>Open to learning</a></td>
          <td><img className="img-skills" src="https://github.com/joaldotavares/joaldotavares/blob/main/src/Home/images/check.png?raw=true"/><a>Curiosity</a></td>
        </tr>
      </table>
    </div>
    </div>
    );
}

export default Home;